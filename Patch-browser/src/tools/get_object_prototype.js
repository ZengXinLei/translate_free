//脱环境
let protect = [];

//获取属性
function GetAttributes(object_prototype, object_name, object) {
    let code = '';
    let obj_pro = Object.getOwnPropertyDescriptors(object_prototype.prototype);
    for (var key in obj_pro) {
        if (key == 'constructor') {
        } else {
            let value = Object.prototype.toString.call(object[key]);
            let type_value = value.match(/\[object (\w+)\]/)[1];
            if (type_value == 'Function') {
                let built_in = object[key].toString().match(/\[native code\]/);
                //补内置方法
                if (built_in) {
                    code += `Object.defineProperty(${object_name}.prototype,"${key}",{value: function ${key}(){debugger;},writable:${obj_pro[key].writable},enumerable:${obj_pro[key].enumerable},configurable:${obj_pro[key].configurable}});` + '\r\n';
                    //保护tostring
                    protect.push(`environment.safefunction(${object_name}.prototype.${key});`)
                    //修改名字
                    protect.push(`environment.rename(${object_name}.prototype.${key},"${key}");`)
                } else code += `Object.defineProperty(${object_name}.prototype,"${key}",{value: ${object[key].toString()},writable:${obj_pro[key].writable},enumerable:${obj_pro[key].enumerable},configurable:${obj_pro[key].configurable}});` + '\r\n';
            } else if (type_value == 'String') {
                //设置属性
                code += `Object.defineProperty(${object_name}.prototype,"${key}",{value: \`${object[key]}\`,writable:${obj_pro[key].writable},enumerable:${obj_pro[key].enumerable},configurable:${obj_pro[key].configurable}});` + '\r\n';
            } else if (type_value == 'Array') {
                //设置属性
                code += `Object.defineProperty(${object_name}.prototype,"${key}",{value: [],writable:${obj_pro[key].writable},enumerable:${obj_pro[key].enumerable},configurable:${obj_pro[key].configurable}});` + '\r\n';
            } else if (type_value == 'Boolean' || type_value == 'Null' || type_value == 'Undefined' || type_value == 'RegExp' || type_value == 'Number') {
                code += `Object.defineProperty(${object_name}.prototype,"${key}",{value: ${object[key]},writable:${obj_pro[key].writable},enumerable:${obj_pro[key].enumerable},configurable:${obj_pro[key].configurable}});` + '\r\n';
            } else code += `Object.defineProperty(${object_name}.prototype,"${key}",{value: {},writable:${obj_pro[key].writable},enumerable:${obj_pro[key].enumerable},configurable:${obj_pro[key].configurable}});` + '\r\n';
        }
    }

    //Symbol.toStringTag属性
    let symbol_tostringtag = obj_pro[Symbol.toStringTag]
    if (symbol_tostringtag) code += `Object.defineProperty(${object_name}.prototype,"Symbol.toStringTag",{value: "${symbol_tostringtag.value}",writable:${symbol_tostringtag.writable},enumerable:${symbol_tostringtag.enumerable},configurable:${symbol_tostringtag.configurable}});` + '\r\n';
    //Symbol.unscopables属性
    let symbol_unscopables = obj_pro[Symbol.unscopables]
    try {
        if (symbol_unscopables) code += `Object.defineProperty(${object_name}.prototype,"Symbol.unscopables",{value: ${JSON.stringify(symbol_unscopables.value)},writable:${symbol_unscopables.writable},enumerable:${symbol_unscopables.enumerable},configurable:${symbol_unscopables.configurable}});` + '\r\n';
    } catch (e) {
    }
    return code
}

//对象是否能被new
function GetNew(object_prototype, object_name) {
    let code = '';
    try {
        //可以new
        //保护加改名
        new object_prototype
        code += `${object_name} = function ${object_name} (){};` + '\r\n';
        code += `environment.safefunction(${object_name});` + '\r\n';
        code += `environment.rename(${object_name});` + '\r\n';

    } catch (e) {
        //不能new
        //保护加改名
        code += `${object_name} = function ${object_name} (){environment.error()};` + '\r\n';
        code += `environment.safefunction(${object_name});` + '\r\n';
        code += `environment.rename(${object_name});` + '\r\n';
    }
    return code;


}


//主函数使用示例
//copy(get_object_prototype(Window, 'Window', window))
//copy(get_object_prototype(Document, 'Document', document, 'Node'))

//object_prototype 构造函数
//object_name 构造函数名
//object 全局对象
//father 父类

function get_object_prototype(object_prototype, object_name, object, father = undefined) {
    let code = '';
    //试试能不能被new
    let new_redult = GetNew(object_prototype, object_name)
    code += new_redult + '\r\n';

    //获取属性
    let result = GetAttributes(object_prototype, object_name, object);
    code += result + '\r\n';

    //保护和改名
    for (let i of protect) {
        code += i + '\r\n';
    }
    //继承父亲
    if (father) code += `Object.setPrototypeOf(${object_name}.prototype, ${father}.prototype);` + '\r\n';
    //清空数组
    protect.length = 0;
    return code;
}


