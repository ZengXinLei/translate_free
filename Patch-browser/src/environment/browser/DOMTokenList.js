DOMTokenList = function DOMTokenList(element) {
    this._element = element;
    this._tokenSet = new Set();
};
environment.safefunction(DOMTokenList);
environment.rename(DOMTokenList);
Object.defineProperty(DOMTokenList.prototype, "length", {
    get: function () {
        debugger
        return this._tokenSet.size;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "value", {
    get: function () {
        debugger

        return Array.from(this._tokenSet).join(' ');
    },
    set: function (newValue) {
        debugger

        this._tokenSet = new Set(newValue.split(' '));
        this._updateClassName();
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "add", {
    value: function (...tokens) {
        debugger

        tokens.forEach((token) => {
            this._tokenSet.add(token);
        });
        this._updateClassName();
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "contains", {
    value: function (token) {
        debugger

        return this._tokenSet.has(token);
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "item", {
    value: function (index) {
        debugger

        return Array.from(this._tokenSet)[index] || null;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "remove", {
    value: function (...tokens) {
        debugger

        tokens.forEach((token) => {
            this._tokenSet.delete(token);
        });
        this._updateClassName();
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "replace", {
    value: function (oldToken, newToken) {
        debugger

        if (this._tokenSet.has(oldToken)) {
            this._tokenSet.delete(oldToken);
            this._tokenSet.add(newToken);
            this._updateClassName();
        }
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "supports", {
    value: function () {
        debugger

        throw new Error("DOMTokenList.supports() is not implemented");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "toggle", {
    value: function (token, force) {
        debugger

        if (force === undefined) {
            force = !this._tokenSet.has(token);
        }
        if (force) {
            this._tokenSet.add(token);
        } else {
            this._tokenSet.delete(token);
        }
        this._updateClassName();
        return force;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "toString", {
    value: function () {
        debugger

        return this.value;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "entries", {
    value: function () {
        debugger

        return this._tokenSet.entries();
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "keys", {
    value: function () {
        debugger

        return this._tokenSet.keys();
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "values", {
    value: function () {
        debugger

        return this._tokenSet.values();
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "forEach", {
    value: function (callback, thisArg) {
        debugger
        this._tokenSet.forEach(callback, thisArg);
    },
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(DOMTokenList.prototype, "Symbol.toStringTag", {
    value: "DOMTokenList",
    writable: true,
    enumerable: false,
    configurable: true,
});

DOMTokenList.prototype._updateClassName = function () {
    debugger

    const newClassName = Array.from(this._tokenSet).join(' ');
    this._element.setAttribute('class', newClassName);
};


environment.safefunction(DOMTokenList.prototype.toString);
environment.rename(DOMTokenList.prototype.toString, "toString");
