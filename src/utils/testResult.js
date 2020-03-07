function testResult(fnName, pass, opts) {
    const caller = `${fnName}(element, expectedValue)`;
    // const caller = /function\s(.*?)\{/.exec(testResult.caller.toString())[1];

    return {
        pass,
        message: () => _buildMessage(caller, opts),
    }
}

function _buildMessage(caller, opts) {
    if (typeof opts === 'string') {
        return `.${caller}\n\n${opts}`;
    }

    return `.${caller}\n\nActual:\n\t${opts.actual}\nExpected:\n\t${opts.expected}`
}


module.exports = testResult;