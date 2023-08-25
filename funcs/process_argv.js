/**
 * @param {string} key
 * @returns {string} value 
 */
exports.read_argv = function (key) {
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
exports.read_argv_int = function (key) {
    // Service Request Argv
    try {
        for (let i = 0; i < process.argv.length; i++) {
            if (process.argv[i] == key)
                if (process.argv.length >= i)
                    return parseInt(process.argv[i + 1]);
        }
        return 0;
    } catch (error) {
        return 0;
    }
}

/**
 * @param {string} key
 * @returns {number} value 
 */
exports.read_argv_number = function (key) {
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

module.exports;