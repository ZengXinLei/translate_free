let Event = function() {
    // environment.error()
};
environment.safefunction(Event);
environment.rename(Event);

Object.defineProperty(Event.prototype, "type", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "target", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "currentTarget", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "eventPhase", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "bubbles", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "cancelable", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "defaultPrevented", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "composed", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "timeStamp", {
    value: 0,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "srcElement", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "returnValue", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "cancelBubble", {
    value: undefined,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "NONE", {value: 0, writable: false, enumerable: true, configurable: false});
Object.defineProperty(Event.prototype, "CAPTURING_PHASE", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(Event.prototype, "AT_TARGET", {value: 2, writable: false, enumerable: true, configurable: false});
Object.defineProperty(Event.prototype, "BUBBLING_PHASE", {
    value: 3,
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(Event.prototype, "composedPath", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "initEvent", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "preventDefault", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "stopImmediatePropagation", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "stopPropagation", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Event.prototype, "Symbol.toStringTag", {
    value: "Event",
    writable: false,
    enumerable: false,
    configurable: true
});

// Object.setPrototypeOf(Event.prototype,Window.prototype)
