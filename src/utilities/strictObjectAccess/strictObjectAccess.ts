export class StrictAccessError extends Error {
    constructor(target: Object, propertyKey: PropertyKey) {
        const msg = 'Accessing this object property results in an undefined value.';
        const usedKey = `Used property key: '${propertyKey?.toString()}',`;
        const affectedObject = `Affected object: ${JSON.stringify(target, null, 2)}`;
        const message = [msg, usedKey, affectedObject].join('\n');

        super(message);

        this.name = 'StrictAccessError';

        Error.captureStackTrace(this, StrictAccessError);
    }
}

const handler = {
    get(...args: any) {
        const [target, propertyKey, receiver] = args;
        const HMR_PROPERTY_NAME = '$$typeof';

        if (!Reflect.has(target, propertyKey) && propertyKey !== HMR_PROPERTY_NAME) {
            throw new StrictAccessError(target, propertyKey);
        }

        return Reflect.get(target, propertyKey, receiver);
    },
};

/**
    If there is an attempt to read an undefined property,
    an error is thrown.
    @param {Object} target
    @return {Object}
*/
export default function strictObjectAccess(
    target: any = {},
    enabled: any = process ? process.env.NODE_ENV === 'development' : true,
) {
    // omit the functionality outside of development env.
    return enabled ? new Proxy(target, handler) : target;
}
