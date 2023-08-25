const consoleTitle = require('node-bash-title');

// Variables
var request_host = "";
var request_port = 80;
var request_delay = 0;
const Funcs = {
    Time: require('./funcs/time')
};

request_host = read_argv('--host');
request_port = read_argv_int('--port');
request_delay = read_argv_number('--delay');

console.log(request_host);
console.log(request_port);
console.log(request_delay);

if (request_host == "") {
    console.log("request ip is null");
    return;
}

while (condition) {
    // Ping
}

async function ping(host, port, delay_second) {
    while (true) {
        console.log("Ping: " + host + ':' + port + ' - (Time) ' + Date.now());
        await Funcs.Time.delay(1000 * delay_second);
    }
}
consoleTitle("Ping Checker");

/**
 * @param {string} key
 * @returns {string} value 
 */
function read_argv(key) {
    try {
        // Service Request Argv
        for (let i = 0; i < process.argv.length; i++) {
            if (process.argv[i] == key)
                if (process.argv.length >= i)
                    return process.argv[i + 1];
        }
        return "";
    } catch (error) {
        return "";
    }
}

/**
 * @param {string} key
 * @returns {number} value 
 */
function read_argv_int(key) {
    // Service Request Argv
    try {
        for (let i = 0; i < process.argv.length; i++) {
            if (process.argv[i] == key)
                if (process.argv.length >= i)
                    return parseInt(process.argv[i + 1]);
        }
        return 1;
    } catch (error) {
        return 1;
    }
}

/**
 * @param {string} key
 * @returns {number} value 
 */
function read_argv_number(key) {
    // Service Request Argv
    try {
        for (let i = 0; i < process.argv.length; i++) {
            if (process.argv[i] == key)
                if (process.argv.length >= i)
                    return parseFloat(process.argv[i + 1]);
        }
        return 1;
    } catch (error) {
        return 1;
    }
}