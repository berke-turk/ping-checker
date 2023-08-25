const Time = require('./time');
const superagent = require('superagent');

/**
 * @param {string} host 
 * @param {string} method 
 * @param {string} show_body
 * @param {number} amount 
 * @param {number} delay_second 
 */
module.exports = async function (host, method, show_body, amount, delay_second) {
    await Time.delay(1000 * 5);

    let count = amount != 0 ? 0 : -1;
    while (count < amount) {
        console.log("Ping: " + host + ' ' + method.toLocaleUpperCase() + ' - (Time) ' + new Date().toLocaleTimeString());

        // Send Http Request
        try {
            let response =
                method == "get" ?
                    await superagent.get(
                        host)
                        .send() :
                    method == "post" ?
                        await superagent.post(
                            host)
                            .send({}) :
                        method == "put" ?
                            await superagent.put(
                                host)
                                .send({}) :
                            method == "delete" ?
                                await superagent.delete(
                                    host)
                                    .send({}) : null;
            if (show_body == "true")
                console.log(response.body);

            console.log("<-----Response-----> Status: " + response.status);
        } catch (error) {
            console.log(error);
            console.log("error request...");
        }
        count = amount != 0 ? count + 1 : -1;
        await Time.delay(1000 * delay_second);
    }

    console.log("Ping Count: " + count);
}