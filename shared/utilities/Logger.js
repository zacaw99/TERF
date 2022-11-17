/*
    TERF Logger Utility

    Can be called from Client or Server

    Server call will log to server console.

    Client call will log to F8 console.
*/

const log = (message, prefix = "TERF") => {
    console.log(`[${prefix}] ${message}`);
}

const logError = (message, prefix = "TERF") => {
    console.log(`[${prefix}][ERROR] ${message}`);
}

const logWarn = (message, prefix = "TERF") => {
    console.log(`[${prefix}][WARN] ${message}`);
}

const logDebug = (message, prefix = "TERF") => {
    if(typeof message == Object) {
        console.log(`[${prefix}][DEBUG] Start of Object Dump`);
        message.forEach((item) => {
            console.log(`[${prefix}][DEBUG] ${item}`);
        })
        console.log(`[${prefix}][DEBUG] End of Object Dump`);
    } else {
        console.log(`[${prefix}][DEBUG] ${message}`);
    }
}

// FiveM Exports
exports("log", log);
exports("logError", logError);
exports("logWarn", logWarn);
exports("logDebug", logDebug);