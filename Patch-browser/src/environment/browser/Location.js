Location = function Location() {
    environment.error()
};
environment.safefunction(Location);
environment.rename(Location);

Object.defineProperty(Location.prototype, "Symbol.toStringTag", {
    value: "Location",
    writable: false,
    enumerable: false,
    configurable: true
});


location = {}
Object.defineProperty(location, "ancestorOrigins", {
    value: {},
    writable: undefined,
    enumerable: true,
    configurable: false
});
Object.defineProperty(location, "href", {
    value: "chrome://newtab/",
    writable: undefined,
    enumerable: true,
    configurable: false
});
Object.defineProperty(location, "origin", {
    value: "chrome://newtab",
    writable: undefined,
    enumerable: true,
    configurable: false
});
Object.defineProperty(location, "protocol", {
    value: "chrome:",
    writable: undefined,
    enumerable: true,
    configurable: false
});
Object.defineProperty(location, "host", {value: "newtab", writable: undefined, enumerable: true, configurable: false});
Object.defineProperty(location, "hostname", {
    value: "newtab",
    writable: undefined,
    enumerable: true,
    configurable: false
});
Object.defineProperty(location, "port", {value: "", writable: undefined, enumerable: true, configurable: false});
Object.defineProperty(location, "pathname", {value: "/", writable: undefined, enumerable: true, configurable: false});
Object.defineProperty(location, "search", {value: "", writable: undefined, enumerable: true, configurable: false});
Object.defineProperty(location, "hash", {value: "", writable: undefined, enumerable: true, configurable: false});
Object.defineProperty(location, "assign", {
    value: function assign() {
        debugger;
    }, writable: false, enumerable: true, configurable: false
});
Object.defineProperty(location, "reload", {
    value: function reload() {
        debugger;
    }, writable: false, enumerable: true, configurable: false
});
Object.defineProperty(location, "replace", {
    value: function replace() {
        debugger;
    }, writable: false, enumerable: true, configurable: false
});

environment.safefunction(location.assign);
environment.rename(location.assign, "assign");
environment.safefunction(location.reload);
environment.rename(location.reload, "reload");
environment.safefunction(location.replace);
environment.rename(location.replace, "replace");
Object.setPrototypeOf(location, Location.prototype);
location = environment.proxy(location, "location");

