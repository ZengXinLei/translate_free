import fs from 'fs';
import {VM, VMScript} from 'vm2';
import catvm2 from './environment/browser_settings.js';
import path from 'path';
import {fileURLToPath} from 'url';
import express from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const catvm2code = catvm2({proxy: true});
const codefile = `${__dirname}/code.js`;
//定义一个沙箱的全局变量，用来输出沙箱的运行结果
const caigou = {};
const vm = new VM({
    sandbox: {caigou},
})
const script = new VMScript(catvm2code + fs.readFileSync(codefile), `${__dirname}/调试.js`);
debugger
vm.run(script);
let o = 'Z21kD9ZK1ke6ugku2ccWuwRmpItPkRr5XcmzOgAKD0GcaHTZL9kyNKkN2aYY6yiO-Pkx16OhYE6x6O_w0PGEUyqQw2ixAWpCOzeLijyJrgmq08b1HopwAokmaQtHVzoPowBFaSw5DFYs7xfsdDC0aIJSAnGPYIYA0LRn9ZaNcxzssu_WfHnht4RENaDLFPlf'
let decodeKey = 'ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl'
let decodeIv = 'ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4'
// console.log();



const app = express();
const port = 3000;

app.get('/api/myendpoint', (req, res) => {
    const { o, decodeKey, decodeIv } = req.query;



    res.send(caigou.T(o, decodeKey, decodeIv));
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
