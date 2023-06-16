//取一个对象所有值
function get_value(object) {
    let code = '';
    let obj_pro = Object.getOwnPropertyNames(object);
    if (!obj_pro) code += '{}';
    else {
        code += '{';
        for (let key of obj_pro) {
            if (key == 'length') {
                continue
            }
            let value = Object.prototype.toString.call(object[key]);
            let type_value = value.match(/\[object (\w+)\]/)[1];
            if (type_value == 'Function') {
                let built_in = object[key].toString().match(/\[native code\]/);
                if (built_in) code += `${key} :function ${key}(){debugger;},`;
                else code += `${key} :${object[key].toString()},`;
            } else if (type_value == 'String') code += `${key} :\`${object[key]}\`,`;
            else if (type_value == 'Array') code += `${key} : [],`;
            else if (type_value == 'Boolean' || type_value == 'Null' || type_value == 'Undefined' || type_value == 'RegExp' || type_value == 'Number') code += `${key} : ${object[key]},`;
            else code += `${key} : {},`;
        }
        code += '}';
    }
    return code


}


//使用实例
//copy(get_json(object))

function get_json(object) {
    let code = '';
    //嗦对象
    let value = get_value(object);
    code += value + '\r\n'
    return code;
}
