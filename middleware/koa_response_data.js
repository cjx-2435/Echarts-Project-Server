const path = require('path');
const {
    getFileJsonData
} = require('../utils/file_utils');
module.exports = async (ctx, next) => {
    const url = ctx.request.url;
    const errorMsg = {
        message: '读取文件失败,资源不存在',
        status: 404
    }
    if (url.includes('/api')) {
        let filePath = url.replace('/api', '');
        filePath = '../data' + filePath + '.json';
        filePath = path.join(__dirname, filePath);
        try {
            let res = await getFileJsonData(filePath);
            ctx.response.body = res;
        } catch (error) {
            ctx.response.body = JSON.stringify(errorMsg);
        }
    } else {
        ctx.response.body = JSON.stringify(errorMsg);
    }
    await next();
}