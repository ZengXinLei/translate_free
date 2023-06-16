CSSStyleDeclaration = function CSSStyleDeclaration (){
    this.styles = new Map();

};
environment.safefunction(CSSStyleDeclaration);
environment.rename(CSSStyleDeclaration);

Object.defineProperty(CSSStyleDeclaration.prototype,"cssText",{value: undefined,writable:undefined,enumerable:true,configurable:true});
Object.defineProperty(CSSStyleDeclaration.prototype,"parentRule",{value: undefined,writable:undefined,enumerable:true,configurable:true});
Object.defineProperty(CSSStyleDeclaration.prototype,"cssFloat",{value: undefined,writable:undefined,enumerable:true,configurable:true});
Object.defineProperty(CSSStyleDeclaration.prototype,"Symbol.toStringTag",{value: "CSSStyleDeclaration",writable:true,enumerable:false,configurable:true});

Object.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
    value: function(propertyName, value, priority = '') {
        debugger
        this.styles.set(propertyName, { value, priority });
    },
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(CSSStyleDeclaration.prototype, "removeProperty", {
    value: function(propertyName) {
        debugger

        if (this.styles.has(propertyName)) {
            const oldValue = this.styles.get(propertyName).value;
            this.styles.delete(propertyName);
            return oldValue;
        }
        return null;
    },
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(CSSStyleDeclaration.prototype, "getPropertyValue", {
    value: function(propertyName) {
        debugger

        const style = this.styles.get(propertyName);
        return style ? style.value : null;
    },
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(CSSStyleDeclaration.prototype, "item", {
    value: function(index) {
        debugger

        const keys = Array.from(this.styles.keys());
        return keys[index] || null;
    },
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(CSSStyleDeclaration.prototype, "length", {
    get: function() {
        debugger

        return this.styles.size;
    },
    enumerable: true,
    configurable: true
});


Object.defineProperty(CSSStyleDeclaration.prototype, "getPropertyPriority", {
    value: function(propertyName) {
        debugger

        const style = this.styles.get(propertyName);
        return style ? style.priority : null;
    },
    writable: true,
    enumerable: true,
    configurable: true
});