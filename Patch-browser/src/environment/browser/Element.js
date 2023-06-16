Element = function Element(tagName) {
    this.tagName = tagName?tagName:"div";
    this.attributes = {};
    this.children = [];
    this.classList=new DOMTokenList(this)
    const cssStyleDeclaration = new CSSStyleDeclaration();
    this.style = new Proxy(cssStyleDeclaration, {
        get(target, propertyName) {
            if (typeof propertyName === 'string' && propertyName in cssStyleDeclaration) {
                return cssStyleDeclaration[propertyName];
            }
            return cssStyleDeclaration.getPropertyValue(propertyName);
        },
        set(target, propertyName, value) {
            cssStyleDeclaration.setProperty(propertyName, value);
            return true;
        },
    });
};
environment.safefunction(Element);
environment.rename(Element);

Object.defineProperty(Element.prototype, "namespaceURI", {
    value: `http://www.w3.org/1999/xhtml`,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "prefix", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "localName", {
    value: `body`,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "tagName", {
    value: `BODY`,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "id", {value: ``, writable: undefined, enumerable: true, configurable: true});
Object.defineProperty(Element.prototype, "className", {
    value: ``,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "classList", {
    value: {},
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "slot", {
    value: ``,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "attributes", {
    value: {},
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "shadowRoot", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "part", {
    value: {},
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "assignedSlot", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "assignedSlot", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "innerHTML", {
    value:"", writable: undefined, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "outerHTML", {
    value: "", writable: undefined, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "scrollTop", {
    value: 0,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "scrollLeft", {
    value: 0,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "scrollWidth", {
    value: 987,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "scrollHeight", {
    value: 411,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "clientTop", {
    value: 0,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "clientLeft", {
    value: 0,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "clientWidth", {
    value: 987,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "clientHeight", {
    value: 150,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "attributeStyleMap", {
    value: {},
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onbeforecopy", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onbeforecut", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onbeforepaste", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onsearch", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "elementTiming", {
    value: ``,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onfullscreenchange", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onfullscreenerror", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onwebkitfullscreenchange", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onwebkitfullscreenerror", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "onbeforexrselect", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});

Object.defineProperty(Element.prototype, "firstElementChild", {
    value: {},
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "lastElementChild", {
    value: {},
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "childElementCount", {
    value: 3,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "previousElementSibling", {
    value: {},
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "nextElementSibling", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "after", {
    value: function after() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "animate", {
    value: function animate() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "append", {
    value: function append() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "attachShadow", {
    value: function attachShadow() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "before", {
    value: function before() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "closest", {
    value: function closest() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "computedStyleMap", {
    value: function computedStyleMap() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getAttribute", {
    value: function getAttribute() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getAttributeNS", {
    value: function getAttributeNS() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getAttributeNames", {
    value: function getAttributeNames() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getAttributeNode", {
    value: function getAttributeNode() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getAttributeNodeNS", {
    value: function getAttributeNodeNS() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getBoundingClientRect", {
    value: function getBoundingClientRect() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getClientRects", {
    value: function getClientRects() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getElementsByClassName", {
    value: function getElementsByClassName() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getElementsByTagName", {
    value: function getElementsByTagName() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "getElementsByTagNameNS", {
    value: function getElementsByTagNameNS() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "hasAttribute", {
    value: function hasAttribute() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "hasAttributeNS", {
    value: function hasAttributeNS() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "hasAttributes", {
    value: function hasAttributes() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "hasPointerCapture", {
    value: function hasPointerCapture() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "insertAdjacentElement", {
    value: function insertAdjacentElement() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "insertAdjacentHTML", {
    value: function insertAdjacentHTML() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "insertAdjacentText", {
    value: function insertAdjacentText() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "matches", {
    value: function matches() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "prepend", {
    value: function prepend() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "querySelector", {
    value: function querySelector() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "querySelectorAll", {
    value: function querySelectorAll() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "releasePointerCapture", {
    value: function releasePointerCapture() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "remove", {
    value: function remove() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "removeAttribute", {
    value: function removeAttribute() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "removeAttributeNS", {
    value: function removeAttributeNS() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "removeAttributeNode", {
    value: function removeAttributeNode() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "replaceWith", {
    value: function replaceWith() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "requestFullscreen", {
    value: function requestFullscreen() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "requestPointerLock", {
    value: function requestPointerLock() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "scroll", {
    value: function scroll() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "scrollBy", {
    value: function scrollBy() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "scrollIntoView", {
    value: function scrollIntoView() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "scrollIntoViewIfNeeded", {
    value: function scrollIntoViewIfNeeded() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "scrollTo", {
    value: function scrollTo() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "setAttribute", {
    value: function setAttribute() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "setAttributeNS", {
    value: function setAttributeNS() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "setAttributeNode", {
    value: function setAttributeNode() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "setAttributeNodeNS", {
    value: function setAttributeNodeNS() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "setPointerCapture", {
    value: function setPointerCapture() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "toggleAttribute", {
    value: function toggleAttribute() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "webkitMatchesSelector", {
    value: function webkitMatchesSelector() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "webkitRequestFullScreen", {
    value: function webkitRequestFullScreen() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "webkitRequestFullscreen", {
    value: function webkitRequestFullscreen() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "ariaDescription", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaAtomic", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaAutoComplete", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaBusy", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaChecked", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaColCount", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaColIndex", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaColSpan", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaCurrent", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaDisabled", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaExpanded", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaHasPopup", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaHidden", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaKeyShortcuts", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaLabel", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaLevel", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaLive", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaModal", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaMultiLine", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaMultiSelectable", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaOrientation", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaPlaceholder", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaPosInSet", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaPressed", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaReadOnly", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaRelevant", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaRequired", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaRoleDescription", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaRowCount", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaRowIndex", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaRowSpan", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaSelected", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaSetSize", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaSort", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaValueMax", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaValueMin", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaValueNow", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "ariaValueText", {
    value: null,
    writable: undefined,
    enumerable: true,
    configurable: true
});
Object.defineProperty(Element.prototype, "getAnimations", {
    value: function getAnimations() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "replaceChildren", {
    value: function replaceChildren() {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "addEventListener", {
    value: function () {
        debugger;
    }, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(Element.prototype, "appendChild", {
    value: function (node) {
        debugger;
        // node instanceof Element || node instanceof TextNode
        if (node instanceof Element) {
            this.children.push(node);
            return node;
        }
    }, writable: true, enumerable: true, configurable: true
});

environment.safefunction(Element.prototype.after);
environment.rename(Element.prototype.after, "after");
environment.safefunction(Element.prototype.animate);
environment.rename(Element.prototype.animate, "animate");
environment.safefunction(Element.prototype.append);
environment.rename(Element.prototype.append, "append");
environment.safefunction(Element.prototype.attachShadow);
environment.rename(Element.prototype.attachShadow, "attachShadow");
environment.safefunction(Element.prototype.before);
environment.rename(Element.prototype.before, "before");
environment.safefunction(Element.prototype.closest);
environment.rename(Element.prototype.closest, "closest");
environment.safefunction(Element.prototype.computedStyleMap);
environment.rename(Element.prototype.computedStyleMap, "computedStyleMap");
environment.safefunction(Element.prototype.getAttribute);
environment.rename(Element.prototype.getAttribute, "getAttribute");
environment.safefunction(Element.prototype.getAttributeNS);
environment.rename(Element.prototype.getAttributeNS, "getAttributeNS");
environment.safefunction(Element.prototype.getAttributeNames);
environment.rename(Element.prototype.getAttributeNames, "getAttributeNames");
environment.safefunction(Element.prototype.getAttributeNode);
environment.rename(Element.prototype.getAttributeNode, "getAttributeNode");
environment.safefunction(Element.prototype.getAttributeNodeNS);
environment.rename(Element.prototype.getAttributeNodeNS, "getAttributeNodeNS");
environment.safefunction(Element.prototype.getBoundingClientRect);
environment.rename(Element.prototype.getBoundingClientRect, "getBoundingClientRect");
environment.safefunction(Element.prototype.getClientRects);
environment.rename(Element.prototype.getClientRects, "getClientRects");
environment.safefunction(Element.prototype.getElementsByClassName);
environment.rename(Element.prototype.getElementsByClassName, "getElementsByClassName");
environment.safefunction(Element.prototype.getElementsByTagName);
environment.rename(Element.prototype.getElementsByTagName, "getElementsByTagName");
environment.safefunction(Element.prototype.getElementsByTagNameNS);
environment.rename(Element.prototype.getElementsByTagNameNS, "getElementsByTagNameNS");
environment.safefunction(Element.prototype.hasAttribute);
environment.rename(Element.prototype.hasAttribute, "hasAttribute");
environment.safefunction(Element.prototype.hasAttributeNS);
environment.rename(Element.prototype.hasAttributeNS, "hasAttributeNS");
environment.safefunction(Element.prototype.hasAttributes);
environment.rename(Element.prototype.hasAttributes, "hasAttributes");
environment.safefunction(Element.prototype.hasPointerCapture);
environment.rename(Element.prototype.hasPointerCapture, "hasPointerCapture");
environment.safefunction(Element.prototype.insertAdjacentElement);
environment.rename(Element.prototype.insertAdjacentElement, "insertAdjacentElement");
environment.safefunction(Element.prototype.insertAdjacentHTML);
environment.rename(Element.prototype.insertAdjacentHTML, "insertAdjacentHTML");
environment.safefunction(Element.prototype.insertAdjacentText);
environment.rename(Element.prototype.insertAdjacentText, "insertAdjacentText");
environment.safefunction(Element.prototype.matches);
environment.rename(Element.prototype.matches, "matches");
environment.safefunction(Element.prototype.prepend);
environment.rename(Element.prototype.prepend, "prepend");
environment.safefunction(Element.prototype.querySelector);
environment.rename(Element.prototype.querySelector, "querySelector");
environment.safefunction(Element.prototype.querySelectorAll);
environment.rename(Element.prototype.querySelectorAll, "querySelectorAll");
environment.safefunction(Element.prototype.releasePointerCapture);
environment.rename(Element.prototype.releasePointerCapture, "releasePointerCapture");
environment.safefunction(Element.prototype.remove);
environment.rename(Element.prototype.remove, "remove");
environment.safefunction(Element.prototype.removeAttribute);
environment.rename(Element.prototype.removeAttribute, "removeAttribute");
environment.safefunction(Element.prototype.removeAttributeNS);
environment.rename(Element.prototype.removeAttributeNS, "removeAttributeNS");
environment.safefunction(Element.prototype.removeAttributeNode);
environment.rename(Element.prototype.removeAttributeNode, "removeAttributeNode");
environment.safefunction(Element.prototype.replaceWith);
environment.rename(Element.prototype.replaceWith, "replaceWith");
environment.safefunction(Element.prototype.requestFullscreen);
environment.rename(Element.prototype.requestFullscreen, "requestFullscreen");
environment.safefunction(Element.prototype.requestPointerLock);
environment.rename(Element.prototype.requestPointerLock, "requestPointerLock");
environment.safefunction(Element.prototype.scroll);
environment.rename(Element.prototype.scroll, "scroll");
environment.safefunction(Element.prototype.scrollBy);
environment.rename(Element.prototype.scrollBy, "scrollBy");
environment.safefunction(Element.prototype.scrollIntoView);
environment.rename(Element.prototype.scrollIntoView, "scrollIntoView");
environment.safefunction(Element.prototype.scrollIntoViewIfNeeded);
environment.rename(Element.prototype.scrollIntoViewIfNeeded, "scrollIntoViewIfNeeded");
environment.safefunction(Element.prototype.scrollTo);
environment.rename(Element.prototype.scrollTo, "scrollTo");
environment.safefunction(Element.prototype.setAttribute);
environment.rename(Element.prototype.setAttribute, "setAttribute");
environment.safefunction(Element.prototype.setAttributeNS);
environment.rename(Element.prototype.setAttributeNS, "setAttributeNS");
environment.safefunction(Element.prototype.setAttributeNode);
environment.rename(Element.prototype.setAttributeNode, "setAttributeNode");
environment.safefunction(Element.prototype.setAttributeNodeNS);
environment.rename(Element.prototype.setAttributeNodeNS, "setAttributeNodeNS");
environment.safefunction(Element.prototype.setPointerCapture);
environment.rename(Element.prototype.setPointerCapture, "setPointerCapture");
environment.safefunction(Element.prototype.toggleAttribute);
environment.rename(Element.prototype.toggleAttribute, "toggleAttribute");
environment.safefunction(Element.prototype.webkitMatchesSelector);
environment.rename(Element.prototype.webkitMatchesSelector, "webkitMatchesSelector");
environment.safefunction(Element.prototype.webkitRequestFullScreen);
environment.rename(Element.prototype.webkitRequestFullScreen, "webkitRequestFullScreen");
environment.safefunction(Element.prototype.webkitRequestFullscreen);
environment.rename(Element.prototype.webkitRequestFullscreen, "webkitRequestFullscreen");
environment.safefunction(Element.prototype.getAnimations);
environment.rename(Element.prototype.getAnimations, "getAnimations");
environment.safefunction(Element.prototype.replaceChildren);
environment.rename(Element.prototype.replaceChildren, "replaceChildren");
Object.setPrototypeOf(Element.prototype, Node.prototype);
