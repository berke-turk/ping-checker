const consoleTitle = require('node-bash-title');

// Variables
var request_ip = "";

// Service Argv
request_ip = Enums.Service.DEV_API();
for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] == '--service')
        if (process.argv.length >= i)
            if (process.argv[i + 1] == Enums.Service.API())
                request_ip = Enums.Service.API();
            else
                request_ip = Enums.Service.DEV_API();
}

console.log(request_ip);
if(request_ip == ""){
    
}

while (condition) {

}

consoleTitle("Ping Checker");