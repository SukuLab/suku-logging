# SUKU Logging Library
This is the SUKU logging library. It's a config wrapper around [winston](https://github.com/winstonjs/winston) and ensures consistent log messages across all repos. This allows for easier parsing using log parsers like [Logstash](https://github.com/elastic/logstash). 

## Setup
Install via npm.

```
npm install --save @suku/suku-logger
```

## Generating log messages
Require the logging lirabry with a reference to `package.json`. It will automatically add metadata like the package name to your log messages. 

```js
let logger = require('@suku/suku-logging')(require('../package.json'));

logger.info("info message");
logger.error("error message");
```

## Output
The output will look like this:

```
2020-06-17T19:25:28.857Z [suku-package-name@1.0.0] info: info message
2020-06-17T19:25:30.478Z [suku-package-name@1.0.0] error: error message
```

