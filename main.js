var config = {
    log : true,
    warn : true,
    error : true
};
function log(){
    if(config.log == true){
        console.log.apply(console, arguments);
    }
};

function warn(){
    if (config.warn == true) {
        console.log.apply(console, arguments);
    }
}

function error(){
    if (config.error == true) {
        console.log.apply(console, arguments);
    }
}

log('Logging', {b : 213});
warn('Warning', {a : 17});
error('Error', {c : 37});


/* ---------------------------------- */

var $math = {
    sum : function(a, b){
        return a + b;
    },
    mul : function(a, b){
        return a * b;
    }
};

var $logger = {log, warn, error};

function execute(code, variables){
    var values = Object.values(variables);
    var keys = Object.keys(variables);
    var defineVariables = '';
    for (var i=0; i<keys.length; i++){
        defineVariables += `var ${keys[i]} = ${values[i]};`;
    }
    var bigCode = defineVariables + code;
    eval(bigCode);
}
execute('$logger.log("sum:", $math.sum(a,b))', {a:17, b:3});
execute('$logger.log("mul:", $math.mul(a,b))', {a:17, b:3});

