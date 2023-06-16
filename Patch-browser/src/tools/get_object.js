//脱环境
let protects = [];

//获取属性
function getattributes(object, object_name) {
    let code = '';
    let obj_pro = Object.getOwnPropertyNames(object);
    for (let key of obj_pro) {
        if (key == 'valueOf') {
        } else if (key == 'toString') {
        } else {
            let value = Object.prototype.toString.call(object[key])
            let type_value = value.match(/\[object (\w+)\]/)[1]
            let obj_attr = Object.getOwnPropertyDescriptor(object, key)
            if (type_value == 'Function') {
                let built_in = object[key].toString().match(/\[native code\]/)
                //补内置方法
                if (built_in) {
                    code += `Object.defineProperty(${object_name},"${key}",{value: function ${key}(){debugger;},writable:${obj_attr.writable},enumerable:${obj_attr.enumerable},configurable:${obj_attr.configurable}});` + '\r\n';
                    //保护tostring
                    protects.push(`environment.safefunction(${object_name}.${key});`)
                    //修改名字
                    protects.push(`environment.rename(${object_name}.${key},"${key}");`)
                } else code += `Object.defineProperty(${object_name},"${key}",{value: ${object[key].toString()},writable:${obj_attr.writable},enumerable:${obj_attr.enumerable},configurable:${obj_attr.configurable}});` + '\r\n';
            } else if (type_value == 'Boolean' || type_value == 'Null' || type_value == 'Undefined' || type_value == 'RegExp' || type_value == 'Number') {
                code += `Object.defineProperty(${object_name},"${key}",{value: ${object[key]},writable:${obj_attr.writable},enumerable:${obj_attr.enumerable},configurable:${obj_attr.configurable}});` + '\r\n';
                //设置属性
            } else if (type_value == 'String') {
                //设置属性
                code += `Object.defineProperty(${object_name},"${key}",{value: "${object[key]}",writable:${obj_attr.writable},enumerable:${obj_attr.enumerable},configurable:${obj_attr.configurable}});` + '\r\n';
            } else if (type_value == 'Array') {
                //设置属性
                code += `Object.defineProperty(${object_name},"${key}",{value: [],writable:${obj_attr.writable},enumerable:${obj_attr.enumerable},configurable:${obj_attr.configurable}});` + '\r\n';
            } else {
                code += `Object.defineProperty(${object_name},"${key}",{value: {},writable:${obj_attr.writable},enumerable:${obj_attr.enumerable},configurable:${obj_attr.configurable}});` + '\r\n';
            }
        }
    }
    return code
}

//创建对象
function create_obj(object_name) {
    let code = '';
    code += `${object_name} = {}`
    return code
}

function create_proxy(object_name) {
    let code = '';
    code += `${object_name} = environment.proxy(${object_name}, "${object_name}");`
    return code
}


//主函数使用示例
//copy(get_object(location, 'location'))
//copy(get_object(location, 'location', 'Location'))
//object 除window的全局对象
//object_name 全局对象名
//father 父类

function get_object(object, object_name, father = undefined) {
    let code = '';
    //创建对象
    let create_object = create_obj(object_name);
    code += create_object + '\r\n';


    //获取自身属性
    let result = getattributes(object, object_name);
    code += result + '\r\n';

    //保护和改名
    for (let i of protects) {
        code += i + '\r\n';
    }
    //继承父亲
    if (father) code += `Object.setPrototypeOf(${object_name}, ${father}.prototype);` + '\r\n';

    //挂代理
    let create_proxys = create_proxy(object_name);
    code += create_proxys + '\r\n';
    //清空数组
    protects.length = 0;
    return code
}
