const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app=express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection

connection.once('open',()=>{
    console.log('Mongo DB database connection established successfully');

})
const exercisesRouter = require('./routes/exercises');
const usersRouter =  require('./routes/users.js');

const logConnection = (req, res, next) => {
    const clientIP = req.socket.remoteAddress;
    console.log(`Client connected from ${clientIP}`);
    next();
  };

  app.get('/test', (req, res) => {
    res.send('Test endpoint reached!');
  });
  

app.use(logConnection);

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port,'192.168.0.104',()=>{
    console.log(`Server is lisening on port:${port}`)
});