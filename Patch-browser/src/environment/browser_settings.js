//加载环境
import fs from 'fs'
import vmtools from './tools_settings.js'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var code = ''

function browser(file_js) {
    code += fs.readFileSync(`${__dirname}/browser/${file_js}`) + '\r\n'
}

//注意顺序父亲先放上面
export default function GetCode(config, fun_text) {

    code += vmtools() + '\r\n'
    for (let item in config) {
        code += 'environment.memory.config.' + item + '=' + config[item] + '\r\n'
    }
    browser('EventTarget.js')
    browser('Node.js')
    browser('Event.js')
    browser('Performance.js')
    browser('CSSStyleDeclaration.js')
    browser('DOMTokenList.js')
    browser('Element.js')
    browser('Document.js')
    browser('HTMLDocument.js')

    browser('HTMLElement.js')
    browser('HTMLBodyElement.js')
    browser('HTMLCanvasElement.js')
    browser('Location.js')
    browser('Navigator.js')
    browser('FormData.js')
    browser('Blob.js')
    browser('History.js')
    browser('Window.js')

    //这是读取的例子
    // browser('Window.js')
    code += 'debugger;\r\n'
    return code
}

