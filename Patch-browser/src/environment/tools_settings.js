//读取全部工具
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//注意顺序
export default function GetCode() {
    let code = ''
    code += fs.readFileSync(`${__dirname}/tools/memory.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/tools/safefunction.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/tools/proxy.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/tools/rename.js`) + '\r\n'
    return code
}




