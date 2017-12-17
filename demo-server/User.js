module.exports = {
    userName: "Jack",
    sayHello: function() {
        return 'hello '
    }
}
let http = require('http')
let server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type',"text/plain;charset=utf-8")
    res.end('hello, node.js')
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('服务器运行了')
})