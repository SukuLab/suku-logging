let getLoggerInstance = require('./src/logger');

var myLogger = getLoggerInstance('my-test-label');
myLogger.info("test");