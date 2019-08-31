const service = require('./search.service');

module.exports = async (req, res) => res.status(200)
  .json(await service.search(req.query, req.locale.language));
