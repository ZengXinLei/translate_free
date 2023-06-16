History = function History() {
};
environment.safefunction(History);
environment.rename(History);

Object.defineProperty(History.prototype, "length", {
    value: 0,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(History.prototype, "scrollRestoration", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(History.prototype, "state", {
    value: {
        "back": null,
        "current": "/",
        "forward": null,
        "position": 17,
        "replaced": true,
        "scroll": {
            "left": 0,
            "top": 0
        }
    }, writable: undefined, enumerable: true, configurable: true
});
Object.defineProperty(History.prototype, "back", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(History.prototype, "forward", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(History.prototype, "go", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(History.prototype, "pushState", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(History.prototype, "replaceState", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(History.prototype, "Symbol.toStringTag", {
    value: "History",
    writable: false,
    enumerable: false,
    configurable: true
});

