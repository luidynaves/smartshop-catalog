const winston = require('winston');
const { kafka } = require('../config');
require('winston-kafka-connect');

const kafkaTransport = new winston.transports.WinstonKafkaTransport({
  level: 'info',
  format: winston.format.json(),
  meta: {},
  kafkaClient: {
    kafkaHost: kafka.hosts,
    clientId: 'catalog-kafka-logger',
  },
  topic: kafka.topics.logAnalytics,
  name: 'SmartShopCatalogLogger',
  timestamp() { return Date.now(); },
  formatter: JSON.stringify,
});

const logger = winston.createLogger({
  transports: [kafkaTransport],
});

logger.stream = {
  write: function (message, encoding) {
     logger.info(message);
  }
};

module.exports = logger;
