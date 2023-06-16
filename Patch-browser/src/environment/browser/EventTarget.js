EventTarget = function EventTarget (){};
environment.safefunction(EventTarget);
environment.rename(EventTarget);

Object.defineProperty(EventTarget.prototype,"addEventListener",{value: function addEventListener(){debugger},writable:true,enumerable:true,configurable:true});
Object.defineProperty(EventTarget.prototype,"dispatchEvent",{value: function dispatchEvent(){debugger},writable:true,enumerable:true,configurable:true});
Object.defineProperty(EventTarget.prototype,"removeEventListener",{value: function removeEventListener(){debugger},writable:true,enumerable:true,configurable:true});

environment.safefunction(EventTarget.prototype.addEventListener);
environment.rename(EventTarget.prototype.addEventListener,"addEventListener");
environment.safefunction(EventTarget.prototype.dispatchEvent);
environment.rename(EventTarget.prototype.dispatchEvent,"dispatchEvent");
environment.safefunction(EventTarget.prototype.removeEventListener);
environment.rename(EventTarget.prototype.removeEventListener,"removeEventListener");
environment.safefunction(EventTarget.prototype.addEventListener);
environment.rename(EventTarget.prototype.addEventListener,"addEventListener");
environment.safefunction(EventTarget.prototype.dispatchEvent);
environment.rename(EventTarget.prototype.dispatchEvent,"dispatchEvent");
environment.safefunction(EventTarget.prototype.removeEventListener);
environment.rename(EventTarget.prototype.removeEventListener,"removeEventListener");
