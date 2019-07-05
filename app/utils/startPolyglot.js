const Polyglot = require('node-polyglot');
const { messages } = require('../i18n');

module.exports = (req, res, next) => {
  const locale = req.locale.language;

  req.polyglot = new Polyglot();

  if (locale === 'ptBR') {
    req.polyglot.extend(messages.ptBr);
  } else {
    req.polyglot.extend(messages.enUs);
  }

  next();
};
