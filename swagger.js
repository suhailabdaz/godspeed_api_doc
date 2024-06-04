const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'GODSPEED',
    version: '1.0.0',
    description: 'My API Description',
  },
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './routes/search.js'],
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
