const consoleTitle = require('node-bash-title');
const superagent = require('superagent');

// Example Log
const example = "\n|example|\n-> node app.js --host 127.0.0.1|http://google.com --delay 1 --method get|post|put|delete";

// Variables
var request_host = "";
var request_delay = 0;
var request_method = "";
var request_show_body = "false";

// Functions
const Funcs = {
    ProcessArgvs: require('./funcs/process_argv'),
    Ping: require('./funcs/ping')
};

// Read With Process Argv
request_host = Funcs.ProcessArgvs.read_argv('--host');
request_delay = Funcs.ProcessArgvs.read_argv_number('--delay');
request_method = Funcs.ProcessArgvs.read_argv('--method').toLowerCase();
request_show_body = Funcs.ProcessArgvs.read_argv('--response').toLowerCase();

if (request_host == "") {
    console.log("host ?" + example);
    return;
} else if (request_method != "get" && request_method != "post" && request_method != "put" && request_method != "delete") {
    console.log("method ?" + example);
    return;
}

// Show Datas
console.log("Starting ping in....");
console.log("Host: " + request_host);
console.log("Delay: " + request_delay + "s");
console.log("Method: " + request_method);
console.log("Show Response Body: " + request_show_body);

// Start Ping
Funcs.Ping(request_host, request_method, request_show_body, request_delay);

// Console Title
consoleTitle("Ping Checker");