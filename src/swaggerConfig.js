const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Node.js API', 
      version: '1.0.0',
      description: 'Documentation of the Node.js API using Swagger',
    },
  },
  apis: ['src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
