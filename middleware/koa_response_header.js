module.exports = async (ctx, next) => {
    ctx.set('Content-Type', 'application/json;charset=UTF-8');
    ctx.set('Access-Control-Allow-Origin','http://localhost:8080');
    ctx.set('Access-Control-Allow-Credentials','true');
    ctx.set('Access-Control-Allow-Methods','GET,POST');
    await next();
}