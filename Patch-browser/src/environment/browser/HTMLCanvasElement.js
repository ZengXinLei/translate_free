HTMLCanvasElement = function HTMLCanvasElement() {
    environment.error()
};
environment.safefunction(HTMLCanvasElement);
environment.rename(HTMLCanvasElement);

Object.defineProperty(HTMLCanvasElement.prototype, "width", {
    value: 300,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(HTMLCanvasElement.prototype, "height", {
    value: 150,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(HTMLCanvasElement.prototype, "captureStream", {
    value: function captureStream() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
    value: function getContext() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
    value: function toBlob() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
    value: function toDataURL() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(HTMLCanvasElement.prototype, "transferControlToOffscreen", {
    value: function transferControlToOffscreen() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});

environment.safefunction(HTMLCanvasElement.prototype.captureStream);
environment.rename(HTMLCanvasElement.prototype.captureStream, "captureStream");
environment.safefunction(HTMLCanvasElement.prototype.getContext);
environment.rename(HTMLCanvasElement.prototype.getContext, "getContext");
environment.safefunction(HTMLCanvasElement.prototype.toBlob);
environment.rename(HTMLCanvasElement.prototype.toBlob, "toBlob");
environment.safefunction(HTMLCanvasElement.prototype.toDataURL);
environment.rename(HTMLCanvasElement.prototype.toDataURL, "toDataURL");
environment.safefunction(HTMLCanvasElement.prototype.transferControlToOffscreen);
environment.rename(HTMLCanvasElement.prototype.transferControlToOffscreen, "transferControlToOffscreen");
environment.safefunction(HTMLCanvasElement.prototype.captureStream);
environment.rename(HTMLCanvasElement.prototype.captureStream, "captureStream");
environment.safefunction(HTMLCanvasElement.prototype.getContext);
environment.rename(HTMLCanvasElement.prototype.getContext, "getContext");
environment.safefunction(HTMLCanvasElement.prototype.toBlob);
environment.rename(HTMLCanvasElement.prototype.toBlob, "toBlob");
environment.safefunction(HTMLCanvasElement.prototype.toDataURL);
environment.rename(HTMLCanvasElement.prototype.toDataURL, "toDataURL");
environment.safefunction(HTMLCanvasElement.prototype.transferControlToOffscreen);
environment.rename(HTMLCanvasElement.prototype.transferControlToOffscreen, "transferControlToOffscreen");
Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);
let dd = document.createElement("canvas")
Object.setPrototypeOf(dd, HTMLCanvasElement.prototype)


