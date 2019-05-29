// 1) Read microservice details from package.json (optional, values can also be added manually)
var pjson = require('../package.json');

// 2) Instantiate logger instance with details from package.json
let sukulogger = require('./logger')(pjson);

// 3) Create log messages anywhere in the code
sukulogger.silly("test");