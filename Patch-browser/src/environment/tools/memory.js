//内存
global.environment = {}
environment.memory = {
    config: {proxy: false},
}
environment.error = function error() {
    let e = new TypeError()
    e.message = "Illegal constructor"
    e.stack = `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`
    throw e
};
