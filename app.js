// Importing Modules
const express = require('express')
const path = require('path');
const app = express();
const moment = require('moment'); 
const mongoose = require('mongoose');
const db= require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 5000

moment().format(); 

app.use('/public', express.static(path.join(__dirname, 'public')));

// ------Statics files ------ //
app.use(express.static(path.join(__dirname,'./assets')))
app.use(express.urlencoded());

// ----------EJS-----------//
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

// ------ EJS layouts ------//
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// ------Router------------//
app.use('/',require('./routers/index'))


app.listen(PORT, () => {
  console.log("Server started at PORT: ",PORT);
})