/**
 * @param {number} ms Miliseconds
 */
exports.delay = async function (ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
}

module.exports;