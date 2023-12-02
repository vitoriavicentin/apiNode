const express = require('express');
const userRoutes = require('./routes/userRoutes');
const database = require('./database/userDatabase');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
