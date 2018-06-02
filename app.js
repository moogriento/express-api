const express = require('express');
const expressConfig = require('./src/config/express');
const userRoutes = require('./src/api/user');

const app = express();
const port = 3000;

expressConfig(app);
userRoutes(express, app);

app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
});
