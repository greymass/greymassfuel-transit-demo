<template>
    <div id="app">
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">GREYMASS | FUEL</h1>
                    <h2 class="subtitle">
                        Demo using eos-transit and greymassfuel to sign transactions
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container" v-if="!auth">
                <b-field label="Chain">
                    <b-select v-model="selectedChain">
                        <option v-for="[i, name] in chainNames" :key="name" :value="i">
                            {{ name }}
                        </option>
                    </b-select>
                </b-field>
                <b-field label="Wallet provider">
                    <b-select v-model="selectedWalletProvider">
                        <option
                            v-for="(provider, i) in walletProviders"
                            :key="provider.id"
                            :value="i"
                        >
                            {{ provider.meta.name }}
                        </option>
                    </b-select>
                </b-field>
                <b-field class="submit-field">
                    <div class="control">
                        <b-button
                            type="is-primary"
                            @click="login"
                            :disabled="isLoggingIn"
                            :loading="isLoggingIn"
                        >
                            Login
                        </b-button>
                    </div>
                </b-field>
            </div>
            <div class="container" v-else>
                <b-message>
                    Logged in as
                    <b>{{ accountName }}</b> on <b>{{ chainName }}</b> using
                    <b>{{ walletProvider.meta.name }}</b>
                    &nbsp;<b-button size="is-small" outlined @click="logout">Log out</b-button>
                </b-message>
                <b-field grouped>
                    <b-field
                        label="Contract"
                        :message="contractError"
                        :type="{ 'is-danger': contractError }"
                    >
                        <b-input v-model="contract" :loading="contractLoading" />
                    </b-field>
                    <b-field label="Action">
                        <b-select
                            v-model="selectedAction"
                            :disabled="contractError || contractLoading"
                            :loading="contractLoading"
                        >
                            <option v-for="action in contractActions" :key="action">{{
                                action
                            }}</option>
                        </b-select>
                    </b-field>
                </b-field>
                <b-field grouped group-multiline>
                    <b-field v-for="field in fields" :key="field.name" :label="field.name">
                        <b-field v-if="field.type == 'name'">
                            <b-input
                                v-model="actionData[field.name]"
                                :disabled="placeholderFields.includes(field.name)"
                                :placeholder="
                                    placeholderFields.includes(field.name)
                                        ? accountName
                                        : field.type
                                "
                            />
                            <b-checkbox-button
                                class="signer-button"
                                v-model="placeholderFields"
                                :native-value="field.name"
                            >
                                <b-icon icon="draw" />
                            </b-checkbox-button>
                        </b-field>
                        <b-input
                            v-else
                            v-model="actionData[field.name]"
                            :placeholder="field.type"
                        />
                    </b-field>
                </b-field>
                <b-message :active="!!requestError" type="is-danger" has-icon :duration="0">{{
                    requestError
                }}</b-message>
                <b-field class="submit-field">
                    <b-button
                        :disabled="!canTransact"
                        :loading="isTransacting"
                        type="is-primary"
                        size="is-medium"
                        icon-left="fire"
                        @click="transact"
                        >Transact for free with FUEL®™</b-button
                    >
                </b-field>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

import { Abi } from 'eosjs/dist/eosjs-rpc-interfaces'
import { AuthorityProviderArgs } from 'eosjs/dist/eosjs-api-interfaces'
import { Action } from 'eosjs/dist/eosjs-serialize'

import * as transit from 'eos-transit'
import ScatterProvider from 'eos-transit-scatter-provider'
import KeycatProvider from 'eos-transit-keycat-provider'
import SimpleosProvider from 'eos-transit-simpleos-provider'

import { Debounce } from './utils'
import TokenAbi from './eosio.token.abi'
import SystemAbi from './eosio.abi'

const fuelAuth = {
    actor: 'greymassfuel',
    permission: 'cosign',
}

enum Chain {
    EOS,
    JUNGLE,
}

const chainNames = new Map([[Chain.EOS, 'EOS Mainnet'], [Chain.JUNGLE, 'Jungle Testnet']])

const explorers = new Map([
    [Chain.EOS, 'https://bloks.io/transaction/$txid'],
    [Chain.JUNGLE, 'https://jungle.bloks.io/transaction/$txid'],
])

const networks = new Map([
    [
        Chain.EOS,
        {
            host: 'eos.greymass.com',
            port: 443,
            protocol: 'https',
            chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
        },
    ],
    [
        Chain.JUNGLE,
        {
            host: 'jungle.greymass.com',
            port: 443,
            protocol: 'https',
            chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
        },
    ],
])

@Component
export default class App extends Vue {

    get chainName() {
        return chainNames.get(this.selectedChain)!
    }

    get accessContext() {
        const walletProviders = [ScatterProvider(), SimpleosProvider()]
        if (this.selectedChain === Chain.EOS) {
            walletProviders.push(KeycatProvider())
        }
        return transit.initAccessContext({
            appName: 'Greymassfuel Demo',
            network: networks.get(this.selectedChain)!,
            walletProviders,
        })
    }

    get walletProviders() {
        return this.accessContext.getWalletProviders()
    }

    get walletProvider() {
        return this.walletProviders[this.selectedWalletProvider]
    }

    get wallet(): transit.Wallet {
        return this.accessContext.initWallet(this.walletProvider)
    }

    get api() {
        const api = this.wallet.eosApi
        // swizzle out authority provider to ignore the fuel permission
        const getRequiredKeys = api.authorityProvider.getRequiredKeys.bind(api.authorityProvider)
        api.authorityProvider.getRequiredKeys = async (args: AuthorityProviderArgs) => {
            const actions = args.transaction.actions.map((action: Action) => {
                const authorization = action.authorization.filter(
                    ({ actor, permission }) =>
                        !(actor === fuelAuth.actor && permission === fuelAuth.permission),
                )
                return {
                    ...action,
                    authorization,
                }
            })
            const transaction = {
                ...args.transaction,
                actions,
            }
            return getRequiredKeys({
                ...args,
                transaction,
            })
        }
        return api
    }

    get accountName() {
        return this.wallet.auth ? this.wallet.auth.accountName : ''
    }

    get contractActions() {
        if (!this.contractAbi) {
            return []
        }
        return this.contractAbi.actions.map(({ name }) => name)
    }

    get resolvedAction() {
        if (!this.wallet.auth) {
            return null
        }
        if (!this.fields) {
            return null
        }
        const structs = this.contractAbi!.structs.map(({ name }) => name)
        const data: any = {}
        for (let { name, type } of this.fields) {
            let value = this.actionData[name]
            if (this.placeholderFields.includes(name)) {
                value = this.wallet.auth.accountName
            }
            let isArray = false
            if (type.slice(-2) === '[]') {
                type = type.slice(0, -2)
                isArray = true
            }
            if (type === 'string') {
                if (isArray) {
                    value = value.split(',')
                } else {
                    value = value || ''
                }
            } else if (structs.includes(type)) {
                try {
                    value = value ? JSON.parse(value) : {}
                } catch (error) {
                    // tslint:disable-next-line:no-console
                    console.warn('error parsing json for field', name, type, error)
                    value = {}
                }
            }
            data[name] = value
        }
        return {
            account: this.contract,
            name: this.selectedAction!,
            authorization: [
                fuelAuth,
                {
                    actor: this.wallet.auth.accountName,
                    permission: this.wallet.auth.permission,
                },
            ],
            data,
        }
    }

    get fields() {
        if (!this.contractAbi || !this.selectedAction) {
            return null
        }
        const action = this.contractAbi.actions.find(({ name }) => name === this.selectedAction)!
        const type = this.contractAbi.structs.find(({ name }) => name === action.type)
        if (!type) {
            return null
        }
        return type.fields
    }

    get canTransact() {
        return !this.isTransacting && this.resolvedAction != null
    }

    chainNames = chainNames
    selectedChain = Chain.JUNGLE
    selectedWalletProvider = 0
    auth: transit.WalletAuth | null = null
    isLoggingIn = false
    isTransacting = false
    contract = 'eosio'
    contractAbi: Abi | null = SystemAbi
    contractError: string | null = null
    contractLoading = false
    selectedAction: string | null = 'voteproducer'
    actionData: any = {
        proxy: 'greymassvote',
        producers: '',
    }
    placeholderFields: string[] = ['voter']
    requestError: string | null = null

    @Watch('walletProviders')
    walletProvidersUpdated() {
        this.selectedWalletProvider = 0
    }

    login() {
        if (this.isLoggingIn) {
            return
        }
        this.isLoggingIn = true
        this.auth = null
        this.loginAsync()
            .then((auth) => {
                this.auth = auth
            })
            .catch((error) => {
                this.$buefy.dialog.alert({
                    title: 'Login failed',
                    message: error.message || String(error),
                })
            })
            .finally(() => {
                this.isLoggingIn = false
            })
    }

    async loginAsync() {
        if (!this.wallet.connected) {
            await this.wallet.connect()
        }
        await this.wallet.login()
        return this.wallet.auth!
    }

    logout() {
        this.auth = null
        this.accessContext.logoutAll().catch((error) => {
            this.$buefy.dialog.alert({
                type: 'is-error',
                title: 'Unable to log out',
                message: error.message || String(error),
            })
        })
    }

    @Watch('placeholderFields')
    onPlaceholderFieldsUpdate(fields: string[]) {
        for (const field of fields) {
            delete this.actionData[field]
        }
    }

    // load abi when contract changes
    @Watch('contract')
    @Debounce(200)
    onContractChange(contract: string) {
        this.contractLoading = true
        this.contractError = null
        this.contractAbi = null
        this.api
            .getAbi(contract)
            .then((abi) => {
                if (this.contract === contract) {
                    if (!abi || abi.actions.length === 0) {
                        throw new Error('Contract has no actions or invalid ABI')
                    }
                    this.contractAbi = abi
                }
            })
            .catch((error) => {
                if (this.contract === contract) {
                    this.contractAbi = null
                    let message: string = error.message || String(error)
                    if (message.startsWith('unknown key')) {
                        message = 'No such contract'
                    }
                    this.contractError = message
                }
            })
            .finally(() => {
                if (this.contract === contract) {
                    this.contractLoading = false
                }
            })
    }

    // reload abi when chain changes
    @Watch('selectedChain')
    onSelectedChainChange() {
        this.onContractChange(this.contract)
    }

    // set selected action when contract updates
    @Watch('contractActions')
    onContractActionsUpdated(actions: string[]) {
        const selected = this.selectedAction
        if (selected && actions.includes(selected)) {
            return
        }
        this.selectedAction = actions[0] || null
    }

    transact() {
        this.isTransacting = true
        this.api.transact(
            {
                actions: [this.resolvedAction],
            },
            {
                broadcast: true,
                blocksBehind: 3,
                expireSeconds: 120,
            },
        ).then((result) => {
            const explorerUrl = explorers
                .get(this.selectedChain)!
                .replace('$txid', result.transaction_id)
            this.$buefy.dialog.alert({
                title: 'Transaction broadcast!',
                type: 'is-success',
                message: `
                    Successfully signed and broadcast transaction.<br>
                    <a href="${ explorerUrl }" target="_blank" class="has-text-info">Show transaction details</a>
                `,
            })
        }).catch((error) => {
            this.$buefy.dialog.alert({
                type: 'is-danger',
                hasIcon: true,
                icon: 'alert-circle',
                title: 'Unable to transact',
                message: error.message || String(error),
            })
        }).finally(() => {
            this.isTransacting = false
        })
    }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

$primary: #e7911f;
$primary-invert: findColorInvert($primary);
$colors: (
    'white': (
        $white,
        $black,
    ),
    'black': (
        $black,
        $white,
    ),
    'light': (
        $light,
        $light-invert,
    ),
    'dark': (
        $dark,
        $dark-invert,
    ),
    'primary': (
        $primary,
        $primary-invert,
    ),
    'info': (
        $info,
        $info-invert,
    ),
    'success': (
        $success,
        $success-invert,
    ),
    'warning': (
        $warning,
        $warning-invert,
    ),
    'danger': (
        $danger,
        $danger-invert,
    ),
);

// // Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

.field.is-grouped.is-grouped-multiline .field:last-child {
    margin-bottom: 0.75rem;
}

#app {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .signer-button {
        .button {
            padding-left: 0.4em;
            padding-right: 0.3em;
        }
        .icon {
            margin: 0;
        }
    }
}
</style>
