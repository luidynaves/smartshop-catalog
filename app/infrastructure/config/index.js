
module.exports = {
  server: {
    port: process.env.PORT,
  },
  kafka: {
    hosts: process.env.KAFKA_HOSTS,
    topics: {
      logAnalytics: 'catalog-log-analytics',
      logs: 'catalog-log',
    },
  },
  elastic: {
    node: process.env.ELASTIC_NODE,
  },
};
