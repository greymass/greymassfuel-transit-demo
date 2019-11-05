export default {
    version: 'eosio::abi/1.1',
    types: [],
    structs: [
        {
            name: 'abi_hash',
            base: '',
            fields: [{ name: 'owner', type: 'name' }, { name: 'hash', type: 'checksum256' }],
        },
        { name: 'activate', base: '', fields: [{ name: 'feature_digest', type: 'checksum256' }] },
        {
            name: 'authority',
            base: '',
            fields: [
                { name: 'threshold', type: 'uint32' },
                { name: 'keys', type: 'key_weight[]' },
                { name: 'accounts', type: 'permission_level_weight[]' },
                { name: 'waits', type: 'wait_weight[]' },
            ],
        },
        {
            name: 'bid_refund',
            base: '',
            fields: [{ name: 'bidder', type: 'name' }, { name: 'amount', type: 'asset' }],
        },
        {
            name: 'bidname',
            base: '',
            fields: [
                { name: 'bidder', type: 'name' },
                { name: 'newname', type: 'name' },
                { name: 'bid', type: 'asset' },
            ],
        },
        {
            name: 'bidrefund',
            base: '',
            fields: [{ name: 'bidder', type: 'name' }, { name: 'newname', type: 'name' }],
        },
        {
            name: 'block_header',
            base: '',
            fields: [
                { name: 'timestamp', type: 'uint32' },
                { name: 'producer', type: 'name' },
                { name: 'confirmed', type: 'uint16' },
                { name: 'previous', type: 'checksum256' },
                { name: 'transaction_mroot', type: 'checksum256' },
                { name: 'action_mroot', type: 'checksum256' },
                { name: 'schedule_version', type: 'uint32' },
                { name: 'new_producers', type: 'producer_schedule?' },
            ],
        },
        {
            name: 'blockchain_parameters',
            base: '',
            fields: [
                { name: 'max_block_net_usage', type: 'uint64' },
                { name: 'target_block_net_usage_pct', type: 'uint32' },
                { name: 'max_transaction_net_usage', type: 'uint32' },
                { name: 'base_per_transaction_net_usage', type: 'uint32' },
                { name: 'net_usage_leeway', type: 'uint32' },
                { name: 'context_free_discount_net_usage_num', type: 'uint32' },
                { name: 'context_free_discount_net_usage_den', type: 'uint32' },
                { name: 'max_block_cpu_usage', type: 'uint32' },
                { name: 'target_block_cpu_usage_pct', type: 'uint32' },
                { name: 'max_transaction_cpu_usage', type: 'uint32' },
                { name: 'min_transaction_cpu_usage', type: 'uint32' },
                { name: 'max_transaction_lifetime', type: 'uint32' },
                { name: 'deferred_trx_expiration_window', type: 'uint32' },
                { name: 'max_transaction_delay', type: 'uint32' },
                { name: 'max_inline_action_size', type: 'uint32' },
                { name: 'max_inline_action_depth', type: 'uint16' },
                { name: 'max_authority_depth', type: 'uint16' },
            ],
        },
        {
            name: 'buyram',
            base: '',
            fields: [
                { name: 'payer', type: 'name' },
                { name: 'receiver', type: 'name' },
                { name: 'quant', type: 'asset' },
            ],
        },
        {
            name: 'buyrambytes',
            base: '',
            fields: [
                { name: 'payer', type: 'name' },
                { name: 'receiver', type: 'name' },
                { name: 'bytes', type: 'uint32' },
            ],
        },
        {
            name: 'buyrex',
            base: '',
            fields: [{ name: 'from', type: 'name' }, { name: 'amount', type: 'asset' }],
        },
        {
            name: 'canceldelay',
            base: '',
            fields: [
                { name: 'canceling_auth', type: 'permission_level' },
                { name: 'trx_id', type: 'checksum256' },
            ],
        },
        { name: 'claimrewards', base: '', fields: [{ name: 'owner', type: 'name' }] },
        { name: 'closerex', base: '', fields: [{ name: 'owner', type: 'name' }] },
        { name: 'cnclrexorder', base: '', fields: [{ name: 'owner', type: 'name' }] },
        {
            name: 'connector',
            base: '',
            fields: [{ name: 'balance', type: 'asset' }, { name: 'weight', type: 'float64' }],
        },
        { name: 'consolidate', base: '', fields: [{ name: 'owner', type: 'name' }] },
        {
            name: 'defcpuloan',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'loan_num', type: 'uint64' },
                { name: 'amount', type: 'asset' },
            ],
        },
        {
            name: 'defnetloan',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'loan_num', type: 'uint64' },
                { name: 'amount', type: 'asset' },
            ],
        },
        {
            name: 'delegatebw',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'receiver', type: 'name' },
                { name: 'stake_net_quantity', type: 'asset' },
                { name: 'stake_cpu_quantity', type: 'asset' },
                { name: 'transfer', type: 'bool' },
            ],
        },
        {
            name: 'delegated_bandwidth',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'to', type: 'name' },
                { name: 'net_weight', type: 'asset' },
                { name: 'cpu_weight', type: 'asset' },
            ],
        },
        {
            name: 'deleteauth',
            base: '',
            fields: [{ name: 'account', type: 'name' }, { name: 'permission', type: 'name' }],
        },
        {
            name: 'deposit',
            base: '',
            fields: [{ name: 'owner', type: 'name' }, { name: 'amount', type: 'asset' }],
        },
        {
            name: 'eosio_global_state',
            base: 'blockchain_parameters',
            fields: [
                { name: 'max_ram_size', type: 'uint64' },
                { name: 'total_ram_bytes_reserved', type: 'uint64' },
                { name: 'total_ram_stake', type: 'int64' },
                { name: 'last_producer_schedule_update', type: 'block_timestamp_type' },
                { name: 'last_pervote_bucket_fill', type: 'time_point' },
                { name: 'pervote_bucket', type: 'int64' },
                { name: 'perblock_bucket', type: 'int64' },
                { name: 'total_unpaid_blocks', type: 'uint32' },
                { name: 'total_activated_stake', type: 'int64' },
                { name: 'thresh_activated_stake_time', type: 'time_point' },
                { name: 'last_producer_schedule_size', type: 'uint16' },
                { name: 'total_producer_vote_weight', type: 'float64' },
                { name: 'last_name_close', type: 'block_timestamp_type' },
            ],
        },
        {
            name: 'eosio_global_state2',
            base: '',
            fields: [
                { name: 'new_ram_per_block', type: 'uint16' },
                { name: 'last_ram_increase', type: 'block_timestamp_type' },
                { name: 'last_block_num', type: 'block_timestamp_type' },
                { name: 'total_producer_votepay_share', type: 'float64' },
                { name: 'revision', type: 'uint8' },
            ],
        },
        {
            name: 'eosio_global_state3',
            base: '',
            fields: [
                { name: 'last_vpay_state_update', type: 'time_point' },
                { name: 'total_vpay_share_change_rate', type: 'float64' },
            ],
        },
        {
            name: 'eosio_global_state4',
            base: '',
            fields: [
                { name: 'continuous_rate', type: 'float64' },
                { name: 'inflation_pay_factor', type: 'int64' },
                { name: 'votepay_factor', type: 'int64' },
            ],
        },
        {
            name: 'exchange_state',
            base: '',
            fields: [
                { name: 'supply', type: 'asset' },
                { name: 'base', type: 'connector' },
                { name: 'quote', type: 'connector' },
            ],
        },
        {
            name: 'fundcpuloan',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'loan_num', type: 'uint64' },
                { name: 'payment', type: 'asset' },
            ],
        },
        {
            name: 'fundnetloan',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'loan_num', type: 'uint64' },
                { name: 'payment', type: 'asset' },
            ],
        },
        {
            name: 'init',
            base: '',
            fields: [{ name: 'version', type: 'varuint32' }, { name: 'core', type: 'symbol' }],
        },
        {
            name: 'key_weight',
            base: '',
            fields: [{ name: 'key', type: 'public_key' }, { name: 'weight', type: 'uint16' }],
        },
        {
            name: 'linkauth',
            base: '',
            fields: [
                { name: 'account', type: 'name' },
                { name: 'code', type: 'name' },
                { name: 'type', type: 'name' },
                { name: 'requirement', type: 'name' },
            ],
        },
        {
            name: 'mvfrsavings',
            base: '',
            fields: [{ name: 'owner', type: 'name' }, { name: 'rex', type: 'asset' }],
        },
        {
            name: 'mvtosavings',
            base: '',
            fields: [{ name: 'owner', type: 'name' }, { name: 'rex', type: 'asset' }],
        },
        {
            name: 'name_bid',
            base: '',
            fields: [
                { name: 'newname', type: 'name' },
                { name: 'high_bidder', type: 'name' },
                { name: 'high_bid', type: 'int64' },
                { name: 'last_bid_time', type: 'time_point' },
            ],
        },
        {
            name: 'newaccount',
            base: '',
            fields: [
                { name: 'creator', type: 'name' },
                { name: 'name', type: 'name' },
                { name: 'owner', type: 'authority' },
                { name: 'active', type: 'authority' },
            ],
        },
        { name: 'onblock', base: '', fields: [{ name: 'header', type: 'block_header' }] },
        {
            name: 'onerror',
            base: '',
            fields: [{ name: 'sender_id', type: 'uint128' }, { name: 'sent_trx', type: 'bytes' }],
        },
        {
            name: 'pair_time_point_sec_int64',
            base: '',
            fields: [{ name: 'first', type: 'time_point_sec' }, { name: 'second', type: 'int64' }],
        },
        {
            name: 'permission_level',
            base: '',
            fields: [{ name: 'actor', type: 'name' }, { name: 'permission', type: 'name' }],
        },
        {
            name: 'permission_level_weight',
            base: '',
            fields: [
                { name: 'permission', type: 'permission_level' },
                { name: 'weight', type: 'uint16' },
            ],
        },
        {
            name: 'producer_info',
            base: '',
            fields: [
                { name: 'owner', type: 'name' },
                { name: 'total_votes', type: 'float64' },
                { name: 'producer_key', type: 'public_key' },
                { name: 'is_active', type: 'bool' },
                { name: 'url', type: 'string' },
                { name: 'unpaid_blocks', type: 'uint32' },
                { name: 'last_claim_time', type: 'time_point' },
                { name: 'location', type: 'uint16' },
            ],
        },
        {
            name: 'producer_info2',
            base: '',
            fields: [
                { name: 'owner', type: 'name' },
                { name: 'votepay_share', type: 'float64' },
                { name: 'last_votepay_share_update', type: 'time_point' },
            ],
        },
        {
            name: 'producer_key',
            base: '',
            fields: [
                { name: 'producer_name', type: 'name' },
                { name: 'block_signing_key', type: 'public_key' },
            ],
        },
        {
            name: 'producer_schedule',
            base: '',
            fields: [
                { name: 'version', type: 'uint32' },
                { name: 'producers', type: 'producer_key[]' },
            ],
        },
        { name: 'refund', base: '', fields: [{ name: 'owner', type: 'name' }] },
        {
            name: 'refund_request',
            base: '',
            fields: [
                { name: 'owner', type: 'name' },
                { name: 'request_time', type: 'time_point_sec' },
                { name: 'net_amount', type: 'asset' },
                { name: 'cpu_amount', type: 'asset' },
            ],
        },
        {
            name: 'regproducer',
            base: '',
            fields: [
                { name: 'producer', type: 'name' },
                { name: 'producer_key', type: 'public_key' },
                { name: 'url', type: 'string' },
                { name: 'location', type: 'uint16' },
            ],
        },
        {
            name: 'regproxy',
            base: '',
            fields: [{ name: 'proxy', type: 'name' }, { name: 'isproxy', type: 'bool' }],
        },
        {
            name: 'rentcpu',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'receiver', type: 'name' },
                { name: 'loan_payment', type: 'asset' },
                { name: 'loan_fund', type: 'asset' },
            ],
        },
        {
            name: 'rentnet',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'receiver', type: 'name' },
                { name: 'loan_payment', type: 'asset' },
                { name: 'loan_fund', type: 'asset' },
            ],
        },
        {
            name: 'rex_balance',
            base: '',
            fields: [
                { name: 'version', type: 'uint8' },
                { name: 'owner', type: 'name' },
                { name: 'vote_stake', type: 'asset' },
                { name: 'rex_balance', type: 'asset' },
                { name: 'matured_rex', type: 'int64' },
                { name: 'rex_maturities', type: 'pair_time_point_sec_int64[]' },
            ],
        },
        {
            name: 'rex_fund',
            base: '',
            fields: [
                { name: 'version', type: 'uint8' },
                { name: 'owner', type: 'name' },
                { name: 'balance', type: 'asset' },
            ],
        },
        {
            name: 'rex_loan',
            base: '',
            fields: [
                { name: 'version', type: 'uint8' },
                { name: 'from', type: 'name' },
                { name: 'receiver', type: 'name' },
                { name: 'payment', type: 'asset' },
                { name: 'balance', type: 'asset' },
                { name: 'total_staked', type: 'asset' },
                { name: 'loan_num', type: 'uint64' },
                { name: 'expiration', type: 'time_point' },
            ],
        },
        {
            name: 'rex_order',
            base: '',
            fields: [
                { name: 'version', type: 'uint8' },
                { name: 'owner', type: 'name' },
                { name: 'rex_requested', type: 'asset' },
                { name: 'proceeds', type: 'asset' },
                { name: 'stake_change', type: 'asset' },
                { name: 'order_time', type: 'time_point' },
                { name: 'is_open', type: 'bool' },
            ],
        },
        {
            name: 'rex_pool',
            base: '',
            fields: [
                { name: 'version', type: 'uint8' },
                { name: 'total_lent', type: 'asset' },
                { name: 'total_unlent', type: 'asset' },
                { name: 'total_rent', type: 'asset' },
                { name: 'total_lendable', type: 'asset' },
                { name: 'total_rex', type: 'asset' },
                { name: 'namebid_proceeds', type: 'asset' },
                { name: 'loan_num', type: 'uint64' },
            ],
        },
        {
            name: 'rexexec',
            base: '',
            fields: [{ name: 'user', type: 'name' }, { name: 'max', type: 'uint16' }],
        },
        { name: 'rmvproducer', base: '', fields: [{ name: 'producer', type: 'name' }] },
        {
            name: 'sellram',
            base: '',
            fields: [{ name: 'account', type: 'name' }, { name: 'bytes', type: 'int64' }],
        },
        {
            name: 'sellrex',
            base: '',
            fields: [{ name: 'from', type: 'name' }, { name: 'rex', type: 'asset' }],
        },
        {
            name: 'setabi',
            base: '',
            fields: [{ name: 'account', type: 'name' }, { name: 'abi', type: 'bytes' }],
        },
        {
            name: 'setacctcpu',
            base: '',
            fields: [{ name: 'account', type: 'name' }, { name: 'cpu_weight', type: 'int64?' }],
        },
        {
            name: 'setacctnet',
            base: '',
            fields: [{ name: 'account', type: 'name' }, { name: 'net_weight', type: 'int64?' }],
        },
        {
            name: 'setacctram',
            base: '',
            fields: [{ name: 'account', type: 'name' }, { name: 'ram_bytes', type: 'int64?' }],
        },
        {
            name: 'setalimits',
            base: '',
            fields: [
                { name: 'account', type: 'name' },
                { name: 'ram_bytes', type: 'int64' },
                { name: 'net_weight', type: 'int64' },
                { name: 'cpu_weight', type: 'int64' },
            ],
        },
        {
            name: 'setcode',
            base: '',
            fields: [
                { name: 'account', type: 'name' },
                { name: 'vmtype', type: 'uint8' },
                { name: 'vmversion', type: 'uint8' },
                { name: 'code', type: 'bytes' },
            ],
        },
        {
            name: 'setinflation',
            base: '',
            fields: [
                { name: 'annual_rate', type: 'int64' },
                { name: 'inflation_pay_factor', type: 'int64' },
                { name: 'votepay_factor', type: 'int64' },
            ],
        },
        {
            name: 'setparams',
            base: '',
            fields: [{ name: 'params', type: 'blockchain_parameters' }],
        },
        {
            name: 'setpriv',
            base: '',
            fields: [{ name: 'account', type: 'name' }, { name: 'is_priv', type: 'uint8' }],
        },
        { name: 'setram', base: '', fields: [{ name: 'max_ram_size', type: 'uint64' }] },
        { name: 'setramrate', base: '', fields: [{ name: 'bytes_per_block', type: 'uint16' }] },
        { name: 'setrex', base: '', fields: [{ name: 'balance', type: 'asset' }] },
        {
            name: 'undelegatebw',
            base: '',
            fields: [
                { name: 'from', type: 'name' },
                { name: 'receiver', type: 'name' },
                { name: 'unstake_net_quantity', type: 'asset' },
                { name: 'unstake_cpu_quantity', type: 'asset' },
            ],
        },
        {
            name: 'unlinkauth',
            base: '',
            fields: [
                { name: 'account', type: 'name' },
                { name: 'code', type: 'name' },
                { name: 'type', type: 'name' },
            ],
        },
        { name: 'unregprod', base: '', fields: [{ name: 'producer', type: 'name' }] },
        {
            name: 'unstaketorex',
            base: '',
            fields: [
                { name: 'owner', type: 'name' },
                { name: 'receiver', type: 'name' },
                { name: 'from_net', type: 'asset' },
                { name: 'from_cpu', type: 'asset' },
            ],
        },
        {
            name: 'updateauth',
            base: '',
            fields: [
                { name: 'account', type: 'name' },
                { name: 'permission', type: 'name' },
                { name: 'parent', type: 'name' },
                { name: 'auth', type: 'authority' },
            ],
        },
        { name: 'updaterex', base: '', fields: [{ name: 'owner', type: 'name' }] },
        { name: 'updtrevision', base: '', fields: [{ name: 'revision', type: 'uint8' }] },
        {
            name: 'user_resources',
            base: '',
            fields: [
                { name: 'owner', type: 'name' },
                { name: 'net_weight', type: 'asset' },
                { name: 'cpu_weight', type: 'asset' },
                { name: 'ram_bytes', type: 'int64' },
            ],
        },
        {
            name: 'voteproducer',
            base: '',
            fields: [
                { name: 'voter', type: 'name' },
                { name: 'proxy', type: 'name' },
                { name: 'producers', type: 'name[]' },
            ],
        },
        {
            name: 'voter_info',
            base: '',
            fields: [
                { name: 'owner', type: 'name' },
                { name: 'proxy', type: 'name' },
                { name: 'producers', type: 'name[]' },
                { name: 'staked', type: 'int64' },
                { name: 'last_vote_weight', type: 'float64' },
                { name: 'proxied_vote_weight', type: 'float64' },
                { name: 'is_proxy', type: 'bool' },
                { name: 'flags1', type: 'uint32' },
                { name: 'reserved2', type: 'uint32' },
                { name: 'reserved3', type: 'asset' },
            ],
        },
        {
            name: 'wait_weight',
            base: '',
            fields: [{ name: 'wait_sec', type: 'uint32' }, { name: 'weight', type: 'uint16' }],
        },
        {
            name: 'withdraw',
            base: '',
            fields: [{ name: 'owner', type: 'name' }, { name: 'amount', type: 'asset' }],
        },
    ],
    actions: [
        {
            name: 'activate',
            type: 'activate',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Activate Protocol Feature\nsummary: \'Activate protocol feature {{nowrap feature_digest}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} activates the protocol feature with a digest of {{feature_digest}}.',
        },
        {
            name: 'bidname',
            type: 'bidname',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Bid On a Premium Account Name\nsummary: \'{{nowrap bidder}} bids on the premium account name {{nowrap newname}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\n{{bidder}} bids {{bid}} on an auction to own the premium account name {{newname}}.\n\n{{bidder}} transfers {{bid}} to the system to cover the cost of the bid, which will be returned to {{bidder}} only if {{bidder}} is later outbid in the auction for {{newname}} by another account.\n\nIf the auction for {{newname}} closes with {{bidder}} remaining as the highest bidder, {{bidder}} will be authorized to create the account with name {{newname}}.\n\n## Bid refund behavior\n\nIf {{bidder}}’s bid on {{newname}} is later outbid by another account, {{bidder}} will be able to claim back the transferred amount of {{bid}}. The system will attempt to automatically do this on behalf of {{bidder}}, but the automatic refund may occasionally fail which will then require {{bidder}} to manually claim the refund with the bidrefund action.\n\n## Auction close criteria\n\nThe system should automatically close the auction for {{newname}} if it satisfies the condition that over a period of two minutes the following two properties continuously hold:\n\n- no one has bid on {{newname}} within the last 24 hours;\n- and, the value of the latest bid on {{newname}} is greater than the value of the bids on each of the other open auctions.\n\nBe aware that the condition to close the auction described above are sufficient but not necessary. The auction for {{newname}} cannot close unless both of the properties are simultaneously satisfied, but it may be closed without requiring the properties to hold for a period of 2 minutes.',
        },
        {
            name: 'bidrefund',
            type: 'bidrefund',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Claim Refund on Name Bid\nsummary: \'Claim refund on {{nowrap newname}} bid\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\n{{bidder}} claims refund on {{newname}} bid after being outbid by someone else.',
        },
        {
            name: 'buyram',
            type: 'buyram',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Buy RAM\nsummary: \'{{nowrap payer}} buys RAM on behalf of {{nowrap receiver}} by paying {{nowrap quant}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/resource.png#3830f1ce8cb07f7757dbcf383b1ec1b11914ac34a1f9d8b065f07600fa9dac19\n---\n\n{{payer}} buys RAM on behalf of {{receiver}} by paying {{quant}}. This transaction will incur a 0.5% fee out of {{quant}} and the amount of RAM delivered will depend on market rates.',
        },
        {
            name: 'buyrambytes',
            type: 'buyrambytes',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Buy RAM\nsummary: \'{{nowrap payer}} buys {{nowrap bytes}} bytes of RAM on behalf of {{nowrap receiver}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/resource.png#3830f1ce8cb07f7757dbcf383b1ec1b11914ac34a1f9d8b065f07600fa9dac19\n---\n\n{{payer}} buys approximately {{bytes}} bytes of RAM on behalf of {{receiver}} by paying market rates for RAM. This transaction will incur a 0.5% fee and the cost will depend on market rates.',
        },
        {
            name: 'buyrex',
            type: 'buyrex',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Buy REX Tokens\nsummary: \'{{nowrap from}} buys REX tokens in exchange for {{nowrap amount}} and his vote stake increases by {{nowrap amount}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{amount}} is taken out of {{from}}’s REX fund and used to purchase REX tokens at the current market exchange rate. In order for the action to succeed, {{from}} must have voted for a proxy or at least 21 block producers. {{amount}} is added to {{from}}’s vote stake.\n\nA sell order of the purchased amount can only be initiated after waiting for the maturity period of 4 to 5 days to pass. Even then, depending on the market conditions, the initiated sell order may not be executed immediately.',
        },
        {
            name: 'canceldelay',
            type: 'canceldelay',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Cancel Delayed Transaction\nsummary: \'{{nowrap canceling_auth.actor}} cancels a delayed transaction\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\n{{canceling_auth.actor}} cancels the delayed transaction with id {{trx_id}}.',
        },
        {
            name: 'claimrewards',
            type: 'claimrewards',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Claim Block Producer Rewards\nsummary: \'{{nowrap owner}} claims block and vote rewards\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{owner}} claims block and vote rewards from the system.',
        },
        {
            name: 'closerex',
            type: 'closerex',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Cleanup Unused REX Data\nsummary: \'Delete REX related DB entries and free associated RAM\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\nDelete REX related DB entries and free associated RAM for {{owner}}.\n\nTo fully delete all REX related DB entries, {{owner}} must ensure that their REX balance and REX fund amounts are both zero and they have no outstanding loans.',
        },
        {
            name: 'cnclrexorder',
            type: 'cnclrexorder',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Cancel Scheduled REX Sell Order\nsummary: \'{{nowrap owner}} cancels a scheduled sell order if not yet filled\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{owner}} cancels their open sell order.',
        },
        {
            name: 'consolidate',
            type: 'consolidate',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Consolidate REX Maturity Buckets Into One\nsummary: \'Consolidate REX maturity buckets into one\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\nConsolidate REX maturity buckets into one bucket that {{owner}} will not be able to sell until 4 to 5 days later.',
        },
        {
            name: 'defcpuloan',
            type: 'defcpuloan',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Withdraw from the Fund of a Specific CPU Loan\nsummary: \'{{nowrap from}} transfers {{nowrap amount}} from the fund of CPU loan number {{nowrap loan_num}} back to REX fund\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{from}} transfers {{amount}} from the fund of CPU loan number {{loan_num}} back to REX fund.',
        },
        {
            name: 'defnetloan',
            type: 'defnetloan',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Withdraw from the Fund of a Specific NET Loan\nsummary: \'{{nowrap from}} transfers {{nowrap amount}} from the fund of NET loan number {{nowrap loan_num}} back to REX fund\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{from}} transfers {{amount}} from the fund of NET loan number {{loan_num}} back to REX fund.',
        },
        {
            name: 'delegatebw',
            type: 'delegatebw',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Stake Tokens for NET and/or CPU\nsummary: \'Stake tokens for NET and/or CPU and optionally transfer ownership\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/resource.png#3830f1ce8cb07f7757dbcf383b1ec1b11914ac34a1f9d8b065f07600fa9dac19\n---\n\n{{#if transfer}} {{from}} stakes on behalf of {{receiver}} {{stake_net_quantity}} for NET bandwidth and {{stake_cpu_quantity}} for CPU bandwidth.\n\nStaked tokens will also be transferred to {{receiver}}. The sum of these two quantities will be deducted from {{from}}’s liquid balance and add to the vote weight of {{receiver}}.\n{{else}}\n{{from}} stakes to self and delegates to {{receiver}} {{stake_net_quantity}} for NET bandwidth and {{stake_cpu_quantity}} for CPU bandwidth.\n\nThe sum of these two quantities add to the vote weight of {{from}}.\n{{/if}}',
        },
        {
            name: 'deleteauth',
            type: 'deleteauth',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Delete Account Permission\nsummary: \'Delete the {{nowrap permission}} permission of {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\nDelete the {{permission}} permission of {{account}}.',
        },
        {
            name: 'deposit',
            type: 'deposit',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Deposit Into REX Fund\nsummary: \'Add to {{nowrap owner}}’s REX fund by transferring {{nowrap amount}} from {{nowrap owner}}’s liquid balance\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\nTransfer {{amount}} from {{owner}}’s liquid balance to {{owner}}’s REX fund. All proceeds and expenses related to REX are added to or taken out of this fund.',
        },
        {
            name: 'fundcpuloan',
            type: 'fundcpuloan',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Deposit into the Fund of a Specific CPU Loan\nsummary: \'{{nowrap from}} funds a CPU loan\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{from}} transfers {{payment}} from REX fund to the fund of CPU loan number {{loan_num}} in order to be used in loan renewal at expiry. {{from}} can withdraw the total balance of the loan fund at any time.',
        },
        {
            name: 'fundnetloan',
            type: 'fundnetloan',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Deposit into the Fund of a Specific NET Loan\nsummary: \'{{nowrap from}} funds a NET loan\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{from}} transfers {{payment}} from REX fund to the fund of NET loan number {{loan_num}} in order to be used in loan renewal at expiry. {{from}} can withdraw the total balance of the loan fund at any time.',
        },
        {
            name: 'init',
            type: 'init',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Initialize System Contract\nsummary: \'Initialize system contract\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\nInitialize system contract. The core token symbol will be set to {{core}}.',
        },
        {
            name: 'linkauth',
            type: 'linkauth',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Link Action to Permission\nsummary: \'{{nowrap account}} sets the minimum required permission for the {{#if type}}{{nowrap type}} action of the{{/if}} {{nowrap code}} contract to {{nowrap requirement}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\n{{account}} sets the minimum required permission for the {{#if type}}{{type}} action of the{{/if}} {{code}} contract to {{requirement}}.\n\n{{#if type}}{{else}}Any links explicitly associated to specific actions of {{code}} will take precedence.{{/if}}',
        },
        {
            name: 'mvfrsavings',
            type: 'mvfrsavings',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Unlock REX Tokens\nsummary: \'{{nowrap owner}} unlocks REX Tokens\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{owner}} unlocks {{rex}} by moving it out of the REX savings bucket. The unlocked REX tokens cannot be sold until 4 to 5 days later.',
        },
        {
            name: 'mvtosavings',
            type: 'mvtosavings',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Lock REX Tokens\nsummary: \'{{nowrap owner}} locks REX Tokens\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{owner}} locks {{rex}} by moving it into the REX savings bucket. The locked REX tokens cannot be sold directly and will have to be unlocked explicitly before selling.',
        },
        {
            name: 'newaccount',
            type: 'newaccount',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Create New Account\nsummary: \'{{nowrap creator}} creates a new account with the name {{nowrap name}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\n{{creator}} creates a new account with the name {{name}} and the following permissions:\n\nowner permission with authority:\n{{to_json owner}}\n\nactive permission with authority:\n{{to_json active}}',
        },
        { name: 'onblock', type: 'onblock', ricardian_contract: '' },
        { name: 'onerror', type: 'onerror', ricardian_contract: '' },
        {
            name: 'refund',
            type: 'refund',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Claim Unstaked Tokens\nsummary: \'Return previously unstaked tokens to {{nowrap owner}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\nReturn previously unstaked tokens to {{owner}} after the unstaking period has elapsed.',
        },
        {
            name: 'regproducer',
            type: 'regproducer',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Register as a Block Producer Candidate\nsummary: \'Register {{nowrap producer}} account as a block producer candidate\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/voting.png#db28cd3db6e62d4509af3644ce7d377329482a14bb4bfaca2aa5f1400d8e8a84\n---\n\nRegister {{producer}} account as a block producer candidate.\n\n{{$clauses.BlockProducerAgreement}}',
        },
        {
            name: 'regproxy',
            type: 'regproxy',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Register/unregister as a Proxy\nsummary: \'Register/unregister {{nowrap proxy}} as a proxy account\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/voting.png#db28cd3db6e62d4509af3644ce7d377329482a14bb4bfaca2aa5f1400d8e8a84\n---\n\n{{#if isproxy}}\n{{proxy}} registers as a proxy that can vote on behalf of accounts that appoint it as their proxy.\n{{else}}\n{{proxy}} unregisters as a proxy that can vote on behalf of accounts that appoint it as their proxy.\n{{/if}}',
        },
        {
            name: 'rentcpu',
            type: 'rentcpu',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Rent CPU Bandwidth for 30 Days\nsummary: \'{{nowrap from}} pays {{nowrap loan_payment}} to rent CPU bandwidth for {{nowrap receiver}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{from}} pays {{loan_payment}} to rent CPU bandwidth on behalf of {{receiver}} for a period of 30 days.\n\n{{loan_payment}} is taken out of {{from}}’s REX fund. The market price determines the number of tokens to be staked to {{receiver}}’s CPU resources. In addition, {{from}} provides {{loan_fund}}, which is also taken out of {{from}}’s REX fund, to be used for automatic renewal of the loan.\n\nAt expiration, if the loan has less funds than {{loan_payment}}, it is closed and lent tokens that have been staked are taken out of {{receiver}}’s CPU bandwidth. Otherwise, it is renewed at the market price at the time of renewal, that is, the number of staked tokens is recalculated and {{receiver}}’s CPU bandwidth is updated accordingly. {{from}} can fund or defund a loan at any time before expiration. When the loan is closed, {{from}} is refunded any tokens remaining in the loan fund.',
        },
        {
            name: 'rentnet',
            type: 'rentnet',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Rent NET Bandwidth for 30 Days\nsummary: \'{{nowrap from}} pays {{nowrap loan_payment}} to rent NET bandwidth for {{nowrap receiver}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{from}} pays {{loan_payment}} to rent NET bandwidth on behalf of {{receiver}} for a period of 30 days.\n\n{{loan_payment}} is taken out of {{from}}’s REX fund. The market price determines the number of tokens to be staked to {{receiver}}’s NET resources for 30 days. In addition, {{from}} provides {{loan_fund}}, which is also taken out of {{from}}’s REX fund, to be used for automatic renewal of the loan.\n\nAt expiration, if the loan has less funds than {{loan_payment}}, it is closed and lent tokens that have been staked are taken out of {{receiver}}’s NET bandwidth. Otherwise, it is renewed at the market price at the time of renewal, that is, the number of staked tokens is recalculated and {{receiver}}’s NET bandwidth is updated accordingly. {{from}} can fund or defund a loan at any time before expiration. When the loan is closed, {{from}} is refunded any tokens remaining in the loan fund.',
        },
        {
            name: 'rexexec',
            type: 'rexexec',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Perform REX Maintenance\nsummary: \'Process sell orders and expired loans\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\nPerforms REX maintenance by processing a maximum of {{max}} REX sell orders and expired loans. Any account can execute this action.',
        },
        {
            name: 'rmvproducer',
            type: 'rmvproducer',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Forcibly Unregister a Block Producer Candidate\nsummary: \'{{nowrap producer}} is unregistered as a block producer candidate\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} unregisters {{producer}} as a block producer candidate. {{producer}} account will retain its votes and those votes can change based on voter stake changes or votes removed from {{producer}}. However new voters will not be able to vote for {{producer}} while it remains unregistered.',
        },
        {
            name: 'sellram',
            type: 'sellram',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Sell RAM From Account\nsummary: \'Sell unused RAM from {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/resource.png#3830f1ce8cb07f7757dbcf383b1ec1b11914ac34a1f9d8b065f07600fa9dac19\n---\n\nSell {{bytes}} bytes of unused RAM from account {{account}} at market price. This transaction will incur a 0.5% fee on the proceeds which depend on market rates.',
        },
        {
            name: 'sellrex',
            type: 'sellrex',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Sell REX Tokens in Exchange for EOS\nsummary: \'{{nowrap from}} sells {{nowrap rex}} tokens\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{from}} initiates a sell order to sell {{rex}} tokens at the market exchange rate during the time at which the order is ultimately executed. If {{from}} already has an open sell order in the sell queue, {{rex}} will be added to the amount of the sell order without change the position of the sell order within the queue. Once the sell order is executed, proceeds are added to {{from}}’s REX fund, the value of sold REX tokens is deducted from {{from}}’s vote stake, and votes are updated accordingly.\n\nDepending on the market conditions, it may not be possible to fill the entire sell order immediately. In such a case, the sell order is added to the back of a sell queue. A sell order at the front of the sell queue will automatically be executed when the market conditions allow for the entire order to be filled. Regardless of the market conditions, the system is designed to execute this sell order within 30 days. {{from}} can cancel the order at any time before it is filled using the cnclrexorder action.',
        },
        {
            name: 'setabi',
            type: 'setabi',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Deploy Contract ABI\nsummary: \'Deploy contract ABI on account {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\nDeploy the ABI file associated with the contract on account {{account}}.',
        },
        {
            name: 'setacctcpu',
            type: 'setacctcpu',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Explicitly Manage the CPU Quota of Account\nsummary: \'Explicitly manage the CPU bandwidth quota of account {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{#if_has_value cpu_weight}}\nExplicitly manage the CPU bandwidth quota of account {{account}} by pinning it to a weight of {{cpu_weight}}.\n\n{{account}} can stake and unstake, however, it will not change their CPU bandwidth quota as long as it remains pinned.\n{{else}}\nUnpin the CPU bandwidth quota of account {{account}}. The CPU bandwidth quota of {{account}} will be driven by the current tokens staked for CPU bandwidth by {{account}}.\n{{/if_has_value}}',
        },
        {
            name: 'setacctnet',
            type: 'setacctnet',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Explicitly Manage the NET Quota of Account\nsummary: \'Explicitly manage the NET bandwidth quota of account {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{#if_has_value net_weight}}\nExplicitly manage the network bandwidth quota of account {{account}} by pinning it to a weight of {{net_weight}}.\n\n{{account}} can stake and unstake, however, it will not change their NET bandwidth quota as long as it remains pinned.\n{{else}}\nUnpin the NET bandwidth quota of account {{account}}. The NET bandwidth quota of {{account}} will be driven by the current tokens staked for NET bandwidth by {{account}}.\n{{/if_has_value}}',
        },
        {
            name: 'setacctram',
            type: 'setacctram',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Explicitly Manage the RAM Quota of Account\nsummary: \'Explicitly manage the RAM quota of account {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{#if_has_value ram_bytes}}\nExplicitly manage the RAM quota of account {{account}} by pinning it to {{ram_bytes}} bytes.\n\n{{account}} can buy and sell RAM, however, it will not change their RAM quota as long as it remains pinned.\n{{else}}\nUnpin the RAM quota of account {{account}}. The RAM quota of {{account}} will be driven by the current RAM holdings of {{account}}.\n{{/if_has_value}}',
        },
        {
            name: 'setalimits',
            type: 'setalimits',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Adjust Resource Limits of Account\nsummary: \'Adjust resource limits of account {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} updates {{account}}’s resource limits to have a RAM quota of {{ram_bytes}} bytes, a NET bandwidth quota of {{net_weight}} and a CPU bandwidth quota of {{cpu_weight}}.',
        },
        {
            name: 'setcode',
            type: 'setcode',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Deploy Contract Code\nsummary: \'Deploy contract code on account {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\nDeploy compiled contract code to the account {{account}}.',
        },
        {
            name: 'setinflation',
            type: 'setinflation',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Set Inflation Parameters\nsummary: \'Set inflation parameters\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} sets the inflation parameters as follows:\n\n* Annual inflation rate (in units of a hundredth of a percent): {{annual_rate}}\n* Fraction of inflation used to reward block producers: 10000/{{inflation_pay_factor}}\n* Fraction of block producer rewards to be distributed proportional to blocks produced: 10000/{{votepay_factor}}',
        },
        {
            name: 'setparams',
            type: 'setparams',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Set System Parameters\nsummary: \'Set System Parameters\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} sets system parameters to:\n{{to_json params}}',
        },
        {
            name: 'setpriv',
            type: 'setpriv',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Make an Account Privileged or Unprivileged\nsummary: \'{{#if is_priv}}Make {{nowrap account}} privileged{{else}}Remove privileged status of {{nowrap account}}{{/if}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{#if is_priv}}\n{{$action.account}} makes {{account}} privileged.\n{{else}}\n{{$action.account}} removes privileged status of {{account}}.\n{{/if}}',
        },
        {
            name: 'setram',
            type: 'setram',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Configure the Available RAM\nsummary: \'Configure the available RAM\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} configures the available RAM to {{max_ram_size}} bytes.',
        },
        {
            name: 'setramrate',
            type: 'setramrate',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Set the Rate of Increase of RAM\nsummary: \'Set the rate of increase of RAM per block\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} sets the rate of increase of RAM to {{bytes_per_block}} bytes/block.',
        },
        {
            name: 'setrex',
            type: 'setrex',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Adjust REX Pool Virtual Balance\nsummary: \'Adjust REX Pool Virtual Balance\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} adjusts REX loan rate by setting REX pool virtual balance to {{balance}}. No token transfer or issue is executed in this action.',
        },
        {
            name: 'undelegatebw',
            type: 'undelegatebw',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Unstake Tokens for NET and/or CPU\nsummary: \'Unstake tokens for NET and/or CPU from {{nowrap receiver}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/resource.png#3830f1ce8cb07f7757dbcf383b1ec1b11914ac34a1f9d8b065f07600fa9dac19\n---\n\n{{from}} unstakes from {{receiver}} {{unstake_net_quantity}} for NET bandwidth and {{unstake_cpu_quantity}} for CPU bandwidth.\n\nThe sum of these two quantities will be removed from the vote weight of {{receiver}} and will be made available to {{from}} after an uninterrupted 3 day period without further unstaking by {{from}}. After the uninterrupted 3 day period passes, the system will attempt to automatically return the funds to {{from}}’s regular token balance. However, this automatic refund may occasionally fail which will then require {{from}} to manually claim the funds with the refund action.',
        },
        {
            name: 'unlinkauth',
            type: 'unlinkauth',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Unlink Action from Permission\nsummary: \'{{nowrap account}} unsets the minimum required permission for the {{#if type}}{{nowrap type}} action of the{{/if}} {{nowrap code}} contract\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\n{{account}} removes the association between the {{#if type}}{{type}} action of the{{/if}} {{code}} contract and its minimum required permission.\n\n{{#if type}}{{else}}This will not remove any links explicitly associated to specific actions of {{code}}.{{/if}}',
        },
        {
            name: 'unregprod',
            type: 'unregprod',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Unregister as a Block Producer Candidate\nsummary: \'{{nowrap producer}} unregisters as a block producer candidate\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/voting.png#db28cd3db6e62d4509af3644ce7d377329482a14bb4bfaca2aa5f1400d8e8a84\n---\n\n{{producer}} unregisters as a block producer candidate. {{producer}} account will retain its votes and those votes can change based on voter stake changes or votes removed from {{producer}}. However new voters will not be able to vote for {{producer}} while it remains unregistered.',
        },
        {
            name: 'unstaketorex',
            type: 'unstaketorex',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Buy REX Tokens Using Staked Tokens\nsummary: \'{{nowrap owner}} buys REX tokens in exchange for tokens currently staked to NET and/or CPU\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\n{{from_net}} and {{from_cpu}} are withdrawn from {{receiver}}’s NET and CPU bandwidths respectively. These funds are used to purchase REX tokens at the current market exchange rate. In order for the action to succeed, {{owner}} must have voted for a proxy or at least 21 block producers.\n\nA sell order of the purchased amount can only be initiated after waiting for the maturity period of 4 to 5 days to pass. Even then, depending on the market conditions, the initiated sell order may not be executed immediately.',
        },
        {
            name: 'updateauth',
            type: 'updateauth',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Modify Account Permission\nsummary: \'Add or update the {{nowrap permission}} permission of {{nowrap account}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/account.png#3d55a2fc3a5c20b456f5657faf666bc25ffd06f4836c5e8256f741149b0b294f\n---\n\nModify, and create if necessary, the {{permission}} permission of {{account}} to have a parent permission of {{parent}} and the following authority:\n{{to_json auth}}',
        },
        {
            name: 'updaterex',
            type: 'updaterex',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Update REX Owner Vote Weight\nsummary: \'Update vote weight to current value of held REX tokens\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\nUpdate vote weight of {{owner}} account to current value of held REX tokens.',
        },
        {
            name: 'updtrevision',
            type: 'updtrevision',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Update System Contract Revision Number\nsummary: \'Update system contract revision number\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/admin.png#9bf1cec664863bd6aaac0f814b235f8799fb02c850e9aa5da34e8a004bd6518e\n---\n\n{{$action.account}} advances the system contract revision number to {{revision}}.',
        },
        {
            name: 'voteproducer',
            type: 'voteproducer',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Vote for Block Producers\nsummary: \'{{nowrap voter}} votes for {{#if proxy}}the proxy {{nowrap proxy}}{{else}}up to 30 block producer candidates{{/if}}\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/voting.png#db28cd3db6e62d4509af3644ce7d377329482a14bb4bfaca2aa5f1400d8e8a84\n---\n\n{{#if proxy}}\n{{voter}} votes for the proxy {{proxy}}.\nAt the time of voting the full weight of voter’s staked (CPU + NET) tokens will be cast towards each of the producers voted by {{proxy}}.\n{{else}}\n{{voter}} votes for the following block producer candidates:\n\n{{#each producers}}\n  + {{this}}\n{{/each}}\n\nAt the time of voting the full weight of voter’s staked (CPU + NET) tokens will be cast towards each of the above producers.\n{{/if}}',
        },
        {
            name: 'withdraw',
            type: 'withdraw',
            ricardian_contract:
                '---\nspec_version: "0.2.0"\ntitle: Withdraw from REX Fund\nsummary: \'Withdraw {{nowrap amount}} from {{nowrap owner}}’s REX fund by transferring to {{owner}}’s liquid balance\'\nicon: http://raw.githubusercontent.com/EOS-Jungle-Testnet/icons/master/rex.png#d229837fa62a464b9c71e06060aa86179adf0b3f4e3b8c4f9702f4f4b0c340a8\n---\n\nWithdraws {{amount}} from {{owner}}’s REX fund and transfer them to {{owner}}’s liquid balance.',
        },
    ],
    tables: [
        { name: 'abihash', index_type: 'i64', key_names: [], key_types: [], type: 'abi_hash' },
        { name: 'bidrefunds', index_type: 'i64', key_names: [], key_types: [], type: 'bid_refund' },
        { name: 'cpuloan', index_type: 'i64', key_names: [], key_types: [], type: 'rex_loan' },
        {
            name: 'delband',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'delegated_bandwidth',
        },
        {
            name: 'global',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'eosio_global_state',
        },
        {
            name: 'global2',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'eosio_global_state2',
        },
        {
            name: 'global3',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'eosio_global_state3',
        },
        {
            name: 'global4',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'eosio_global_state4',
        },
        { name: 'namebids', index_type: 'i64', key_names: [], key_types: [], type: 'name_bid' },
        { name: 'netloan', index_type: 'i64', key_names: [], key_types: [], type: 'rex_loan' },
        {
            name: 'producers',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'producer_info',
        },
        {
            name: 'producers2',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'producer_info2',
        },
        {
            name: 'rammarket',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'exchange_state',
        },
        {
            name: 'refunds',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'refund_request',
        },
        { name: 'rexbal', index_type: 'i64', key_names: [], key_types: [], type: 'rex_balance' },
        { name: 'rexfund', index_type: 'i64', key_names: [], key_types: [], type: 'rex_fund' },
        { name: 'rexpool', index_type: 'i64', key_names: [], key_types: [], type: 'rex_pool' },
        { name: 'rexqueue', index_type: 'i64', key_names: [], key_types: [], type: 'rex_order' },
        {
            name: 'userres',
            index_type: 'i64',
            key_names: [],
            key_types: [],
            type: 'user_resources',
        },
        { name: 'voters', index_type: 'i64', key_names: [], key_types: [], type: 'voter_info' },
    ],
    ricardian_clauses: [
        { id: 'UserAgreement', body: 'User agreement for the chain can go here.' },
        {
            id: 'BlockProducerAgreement',
            body:
                'I, {{producer}}, hereby nominate myself for consideration as an elected block producer.\n\nIf {{producer}} is selected to produce blocks by the system contract, I will sign blocks with {{producer_key}} and I hereby attest that I will keep this key secret and secure.\n\nIf {{producer}} is unable to perform obligations under this contract I will resign my position by resubmitting this contract with the null producer key.\n\nI acknowledge that a block is \'objectively valid\' if it conforms to the deterministic blockchain rules in force at the time of its creation, and is \'objectively invalid\' if it fails to conform to those rules.\n\n{{producer}} hereby agrees to only use {{producer_key}} to sign messages under the following scenarios:\n\n* proposing an objectively valid block at the time appointed by the block scheduling algorithm;\n* pre-confirming a block produced by another producer in the schedule when I find said block objectively valid;\n* and, confirming a block for which {{producer}} has received pre-confirmation messages from more than two-thirds of the active block producers.\n\nI hereby accept liability for any and all provable damages that result from my:\n\n* signing two different block proposals with the same timestamp with {{producer_key}};\n* signing two different block proposals with the same block number with {{producer_key}};\n* signing any block proposal which builds off of an objectively invalid block;\n* signing a pre-confirmation for an objectively invalid block;\n* or, signing a confirmation for a block for which I do not possess pre-confirmation messages from more than two-thirds of the active block producers.\n\nI hereby agree that double-signing for a timestamp or block number in concert with two or more other block producers shall automatically be deemed malicious and cause {{producer}} to be subject to:\n\n* a fine equal to the past year of compensation received,\n* immediate disqualification from being a producer,\n* and/or other damages.\n\nAn exception may be made if {{producer}} can demonstrate that the double-signing occurred due to a bug in the reference software; the burden of proof is on {{producer}}.\n\nI hereby agree not to interfere with the producer election process. I agree to process all producer election transactions that occur in blocks I create, to sign all objectively valid blocks I create that contain election transactions, and to sign all pre-confirmations and confirmations necessary to facilitate transfer of control to the next set of producers as determined by the system contract.\n\nI hereby acknowledge that more than two-thirds of the active block producers may vote to disqualify {{producer}} in the event {{producer}} is unable to produce blocks or is unable to be reached, according to criteria agreed to among block producers.\n\nIf {{producer}} qualifies for and chooses to collect compensation due to votes received, {{producer}} will provide a public endpoint allowing at least 100 peers to maintain synchronization with the blockchain and/or submit transactions to be included. {{producer}} shall maintain at least one validating node with full state and signature checking and shall report any objectively invalid blocks produced by the active block producers. Reporting shall be via a method to be agreed to among block producers, said method and reports to be made public.\n\nThe community agrees to allow {{producer}} to authenticate peers as necessary to prevent abuse and denial of service attacks; however, {{producer}} agrees not to discriminate against non-abusive peers.\n\nI agree to process transactions on a FIFO (first in, first out) best-effort basis and to honestly bill transactions for measured execution time.\n\nI {{producer}} agree not to manipulate the contents of blocks in order to derive profit from: the order in which transactions are included, or the hash of the block that is produced.\n\nI, {{producer}}, hereby agree to disclose and attest under penalty of perjury all ultimate beneficial owners of my business entity who own more than 10% and all direct shareholders.\n\nI, {{producer}}, hereby agree to cooperate with other block producers to carry out our respective and mutual obligations under this agreement, including but not limited to maintaining network stability and a valid blockchain.\n\nI, {{producer}}, agree to maintain a website hosted at {{url}} which contains up-to-date information on all disclosures required by this contract.\n\nI, {{producer}}, agree to set the location value of {{location}} such that {{producer}} is scheduled with minimal latency between my previous and next peer.\n\nI, {{producer}}, agree to maintain time synchronization within 10 ms of global atomic clock time, using a method agreed to among block producers.\n\nI, {{producer}}, agree not to produce blocks before my scheduled time unless I have received all blocks produced by the prior block producer.\n\nI, {{producer}}, agree not to publish blocks with timestamps more than 500ms in the future unless the prior block is more than 75% full by either NET or CPU bandwidth metrics.\n\nI, {{producer}}, agree not to set the RAM supply to more RAM than my nodes contain and to resign if I am unable to provide the RAM approved by more than two-thirds of active block producers, as shown in the system parameters.',
        },
    ],
    error_messages: [],
    abi_extensions: [],
    variants: [],
}
