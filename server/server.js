const express = require('express');
const cors = require('cors');
const app = express();

const dbConfig = require('./db');
const userRoute = require('../routes/userRoute');
const postRoute = require('../routes/postRoute');

app.use(cors());
app.use(express.json());
app.use('/api/user',userRoute);
app.use('/api/post',postRoute);

const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Server is running on port: ${port}`));