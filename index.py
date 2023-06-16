import json
import os
import re
import subprocess
import threading
import traceback
from functools import reduce
from urllib.parse import quote

import redis
import requests
import urllib3
from flask import Flask, jsonify, request

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
# proxy = {
#     'http': 'http://127.0.0.1:8888',
#     'https': 'http://127.0.0.1:8888'
# }
proxy = None
app = Flask(__name__)

redis_client = redis.Redis(host='127.0.0.1', password="root123", port=6379, decode_responses=True)


def run_node_script():
    # 定义要运行的 Node.js 脚本文件路径
    node_script = './Patch-browser/src/main.js'
    node_modules_path = './Patch-browser/node_modules'
    env = os.environ.copy()
    env['NODE_PATH'] = node_modules_path
    # 使用 subprocess 调用 Node.js 解释器执行脚本
    process = subprocess.Popen(['node', node_script], stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                               env=env)
    stdout, stderr = process.communicate()
    # 获取脚本执行的标准输出和标准错误输出
    output = stdout.decode('utf-8').replace("\n", "").replace("'", '"')
    output = re.sub(r'(\w+):', r'"\1":', output)


# 创建新线程并启动
thread = threading.Thread(target=run_node_script)
thread.start()


def translate(text):
    try:

        if redis_client.hget("translate", text):
            return redis_client.hget("translate", text)
        url = "https://dict.youdao.com/webtranslate"

        payload = f"i={quote(text)}&from=auto&to=&domain=0&dictResult=true&keyid=webfanyi&sign=74d1a43bbd83cad4e57324cf257738ca&client=fanyideskweb&product=webfanyi&appVersion=1.0.0&vendor=web&pointParam=client%2CmysticTime%2Cproduct&mysticTime=1686888035372&keyfrom=fanyi.web"
        headers = {
            "Cookie": "OUTFOX_SEARCH_USER_ID=-1692719852@10.105.137.204;",
            "Host": "dict.youdao.com",
            "Connection": "keep-alive",
            "Content-Length": "252",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            "Origin": "https://fanyi.youdao.com",
            "Referer": "https://fanyi.youdao.com/",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
        }

        response = requests.request("POST", url, data=payload, headers=headers, proxies=proxy,
                                    verify=False)
        o = response.text

        decodeKey = 'ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl'
        decodeIv = 'ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4'
        res = requests.get(f"http://localhost:3000/api/myendpoint?o={o}&decodeKey={decodeKey}&decodeIv={decodeIv}")

        res = json.loads(res.text)
        if res['code'] == 40:
            return text

        t_res = reduce(lambda a, b: b['tgt'] + a, res['translateResult'][0], "")
        redis_client.hset("translate", text, t_res)
        return t_res
    except Exception as e:
        print(text)
        print(traceback.format_exc())
        return "程序异常"


@app.route('/api/translate', methods=['POST'])
def translate_api():
    # 解析请求体中的参数
    data = request.get_json()
    text = data.get('text')

    res = list(map(lambda f: translate(f), text.split("\n")))

    # 返回翻译结果
    return jsonify({
        "text": text,
        "from": "中文(简体)",
        "to": "英语",

        "result": res
    })


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
