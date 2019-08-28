const middlewareLogger = require('./middlewareLogger');
const { morgan, logFormat } = require('./middlewareFormatLog');

const registerMiddlewareLogConfiguration = morgan(logFormat, { stream: middlewareLogger.stream });

module.exports = { registerMiddlewareLogConfiguration };
