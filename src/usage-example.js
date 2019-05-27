let sukulogging = require('./logger');
sukulogging.setDetails('test', 'v1.1.1');
let sukulogger = sukulogging.getLogger();

// 3) Create log messages anywhere in the code
sukulogger.silly("test");