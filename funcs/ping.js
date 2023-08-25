const Time = require('./time');
const superagent = require('superagent');

/**
 * @param {string} host 
 * @param {number} port 
 * @param {string} method 
 * @param {number} delay_second 
 */
module.exports = async function (host, port, method, delay_second) {
    while (true) {
        console.log("Ping: " + host + ':' + port + ' ' + method.toLocaleUpperCase() + ' - (Time) ' + new Date().toLocaleTimeString());

        // Send Http Request
        let result =
            method == "get" ?
                await superagent.get(
                    host + ':' + port)
                    .send() :
                method == "post" ?
                    await superagent.post(
                        host + ':' + port)
                        .send({}) :
                    method == "put" ?
                        await superagent.put(
                            host + ':' + port)
                            .send({}) :
                        method == "delete" ?
                            await superagent.delete(
                                host + ':' + port)
                                .send({}) : null;

        console.log((result));

        await Time.delay(1000 * delay_second);
    }
}