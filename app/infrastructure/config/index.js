const transformToArray = value => value.split(',');

module.exports = {
  server: {
    port: process.env.PORT,
  },
  kafka: {
    hosts: transformToArray(process.env.KAFKA_HOSTS),
    topics: {
      logAnalytics: 'catalog-log-analytics',
      logs: 'catalog-log',
    },
  },
};
