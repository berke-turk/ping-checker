const consoleTitle = require('node-bash-title');
const superagent = require('superagent');

// Functions
const Funcs = {
    ProcessArgvs: require('./funcs/process_argv'),
    Ping: require('./funcs/ping')
};

// Example Log
const example = "\n|example|\n-> node app.js --host 127.0.0.1|http://example.com --delay 1 --method get|post|put|delete --amount 0(unlimited)|5|100";
if (Funcs.ProcessArgvs.read_argv('--info') == "on") {
    console.log(example); return;
}

// Variables
var request_host = "";
var request_delay = 0;
var request_method = "";
var request_show_body = "false";
var request_amount = 0;

// Read With Process Argv
request_host = Funcs.ProcessArgvs.read_argv('--host');
request_amount = Funcs.ProcessArgvs.read_argv_int('--amount');
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
console.log("Starting ping in.... 5 second later");
console.log("Host: " + request_host);
console.log("Delay: " + request_delay + "s");
console.log("Method: " + request_method.toLocaleUpperCase("TR"));
console.log("Show Response Body: " + request_show_body);
console.log("Request Amount: " + (request_amount == 0 ? 'unlimited' : request_amount));

// Start Ping
Funcs.Ping(request_host, request_method, request_show_body, request_amount, request_delay);

// Console Title
consoleTitle("Ping Checker");