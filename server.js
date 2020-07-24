const express = require('express');
const router = require('./router');
require('dotenv').config();
require('./config/dbconnection');
const app = express();

// Middlewares
app.use(express.json())

app.use("/api", router);

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log(`App listening on port ${process.env.PORT || '4000'}`));
