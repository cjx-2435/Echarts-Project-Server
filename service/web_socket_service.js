const WebSocket = require('ws');
const path = require('path');
const file_utils = require('../utils/file_utils');
const wss = new WebSocket.Server({
    port: 9998
});

module.exports.listen = () => {
    wss.on('connection', async client => {
        console.log('有客户端连接成功...');
        client.on('message', async msg => {
            let payload = JSON.parse(msg);
            const action = payload.action
            if (action === 'getData') {
                let filePath = '../data/' + payload.chartName + '.json'
                filePath = path.join(__dirname, filePath);
                const res = await file_utils.getFileJsonData(filePath)
                payload.data = res;
                client.send(JSON.stringify(payload));
            } else{
                console.log(msg);
                wss.clients.forEach(client => {
                    client.send(msg);
                });
            }
        })
    })
}