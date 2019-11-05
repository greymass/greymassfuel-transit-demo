import debounce from 'debounce'
import {createDecorator} from 'vue-class-component'

/** Decorator that adds a debounce to decorated method */
export function Debounce(ms: number) {
    return createDecorator((options, key) => {
        if (!options.methods) { options.methods = {} }
        const method = options.methods[key]
        if (typeof method === 'function') {
            options.methods[key] = debounce(method, ms)
        } else {
            throw new Error('Can not debounce: Not a function')
        }
    })
}

/**
 * Sleep for N milliseconds.
 */
export function sleep(ms: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, ms)
    })
}
