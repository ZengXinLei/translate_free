environment.rename = function rename(obj, obname) {
    Object.defineProperties(obj, {
        [Symbol.toStringTag]: {
            value: obname,
            configurable: true,
            writable: false,
            enumerable: false
        }
    })
};