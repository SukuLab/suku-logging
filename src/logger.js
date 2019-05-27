const winston = require('winston');
const { timestamp, label, printf, colorize } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`;
});

var prefix;
var version;

exports.setDetails = function(_prefix, _version) {
    prefix = _prefix;
    version = _version;
}

exports.getLogger = function () {
    return winston.createLogger({
        transports: [
            new winston.transports.Console({
                level: 'silly',
                format: winston.format.combine(
                    label({ label: prefix + '@' + version }),
                    timestamp(),
                    colorize(),
                    myFormat
                ),
            }),
        ],
        levels: {
            emerg: 0,
            alert: 1,
            crit: 2,
            error: 3,
            warning: 4,
            notice: 5,
            info: 6,
            debug: 7,
            silly: 8
        },
    });
} 