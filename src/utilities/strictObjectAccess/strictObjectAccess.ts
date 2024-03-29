export class StrictAccessError extends Error {
    constructor(target: Object, propertyKey: string) {
        const msg = 'Accessing this object property results in an undefined value.';
        const usedKey = `Used property key: '${propertyKey}',`;
        const affectedObject = `Affected object: ${JSON.stringify(target, null, 2)}`;
        const message = [msg, usedKey, affectedObject].join('\n');

        super(message);

        this.name = 'StrictAccessError';

        Error.captureStackTrace(this, StrictAccessError);
    }
}

const handler = {
    get(target: object, propertyKey: string, receiver: any) {
        const HMR_PROPERTY_NAME = '$$typeof';

        if (!Reflect.has(target, propertyKey) && propertyKey !== HMR_PROPERTY_NAME) {
            throw new StrictAccessError(target, propertyKey);
        }

        return Reflect.get(target, propertyKey, receiver);
    },
};

/**
 *   If there is an attempt to read an undefined property, an error is thrown.
 */
export default function strictObjectAccess<T extends object>(
    target: T = {} as T,
    enabled: boolean = typeof process === 'object' ? process.env.NODE_ENV === 'development' : true,
): T {
    // omit the functionality outside of development env.
    return enabled ? new Proxy<T>(target, handler) : target;
}
