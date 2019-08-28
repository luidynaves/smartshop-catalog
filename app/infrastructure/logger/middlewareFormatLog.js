const morgan = require('morgan');
const morganJson = require('morgan-json');

morgan.token('query', req => JSON.stringify(req.query));

morgan.token('locale', req => req.locale.language);

const logFormat = morganJson(':query :locale :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');

module.exports = { morgan, logFormat };
