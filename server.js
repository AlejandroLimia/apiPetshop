const express = require('express');
const router = require('./router');
require('dotenv').config();
require('./config/dbconnection');
const cors = require('cors');
const app = express();

// Middlewares
app.use(express.json())
app.use(cors())

app.use("/api", router);

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log(`App listening on port ${process.env.PORT || '4000'}`));
