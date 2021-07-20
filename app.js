const Koa = require('koa');
const app = new Koa();
// //ctx:上下文,web容器，ctx.request ctx.response
// //next:下一层中间件，下一层中间件是否能都到执行，取决于next函数有没有被调用

// app.use((ctx, next) => {
//     let start = +new Date();
//     ctx.response.body = 'hello world';
//     next();
//     let end = +new Date();
//     console.log(end - start);
// });
// //第二次中间件
// app.use((ctx, next) => {
//     ctx.response.body = 'next';
// });
const respDurationMiddleware = require('./middleware/koa_response_duration')
const respHeader = require('./middleware/koa_response_header')
const respData = require('./middleware/koa_response_data')
app.use(respDurationMiddleware)
app.use(respHeader)
app.use(respData)

app.listen(8888);

const webSocketService = require('./service/web_socket_service');
webSocketService.listen();