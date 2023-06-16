//代理
environment.proxy = function (o, name) {
    if (environment.memory.config.proxy == false) {
        return o
    }
    return new Proxy(o, {
        set(target, key, value) {
            console.log('类型:set', '调用者', name, '属性', key, '值', value);
            // debugger
            return Reflect.set(...arguments);
        },
        get(target, key, receiver) {
            // console.log('类型:get', target, key, target[key]);
            // debugger
            console.log('类型:get', '调用者', name, '属性', key, '值', target[key]);
            return Reflect.get(...arguments);
        },
        deleteProperty: function (target, key) {
            console.log('delete', name, key);
            return true
        }
    });

}

