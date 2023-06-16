Window = function Window() {
    environment.error()
};
environment.safefunction(Window);
environment.rename(Window);

Object.defineProperty(Window.prototype, "TEMPORARY", {
    value: 0,
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(Window.prototype, "PERSISTENT", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(Window.prototype, "Symbol.toStringTag", {
    value: "Window",
    writable: false,
    enumerable: false,
    configurable: true
});

Object.setPrototypeOf(Window.prototype, EventTarget.prototype);


window = this;
window.FormData=FormData
window.Blob=Blob
window.history=new History()
window.document = document
window.location = location
window.navigator = navigator
window.performance = new Performance()
Object.setPrototypeOf(window, Window.prototype)
window = environment.proxy(window, 'window')




