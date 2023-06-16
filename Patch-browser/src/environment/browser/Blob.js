Blob = function Blob (){};
environment.safefunction(Blob);
environment.rename(Blob);

Object.defineProperty(Blob.prototype,"size",{value: undefined,writable:undefined,enumerable:true,configurable:true});
Object.defineProperty(Blob.prototype,"type",{value: undefined,writable:undefined,enumerable:true,configurable:true});
Object.defineProperty(Blob.prototype,"arrayBuffer",{value: undefined,writable:true,enumerable:true,configurable:true});
Object.defineProperty(Blob.prototype,"slice",{value: undefined,writable:true,enumerable:true,configurable:true});
Object.defineProperty(Blob.prototype,"stream",{value: undefined,writable:true,enumerable:true,configurable:true});
Object.defineProperty(Blob.prototype,"text",{value: undefined,writable:true,enumerable:true,configurable:true});
Object.defineProperty(Blob.prototype,"Symbol.toStringTag",{value: "Blob",writable:false,enumerable:false,configurable:true});

