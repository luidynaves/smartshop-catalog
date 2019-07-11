require('dotenv').config();
const { server } = require('./app/infrastructure/config');
const app = require('./app');

app.listen(server.port, () => {

});
