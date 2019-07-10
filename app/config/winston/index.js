const winston = require('winston');
require('winston-kafka-connect');

const kafkaTransport = new winston.transports.WinstonKafkaTransport({
  level: 'info',
  format: winston.format.json(),
  meta: {},
  kafkaClient: {
    kafkaHost: `${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`,
    clientId: 'catalog-kafka-logger',
  },
  topic: 'smartshop-catalog-logs',
  name: 'SmartShopCatalogLogger',
  timestamp() { return Date.now(); },
  formatter: JSON.stringify,
});

const logger = winston.createLogger({
  transports: [kafkaTransport],
});

module.exports = logger;
