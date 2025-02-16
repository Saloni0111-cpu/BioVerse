require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./Routers/userRouter');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('https');
const {dbConnection} = require('./Database/dbConnection');

const PORT =process.env.PORT || 3000;

dbConnection();

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
