require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGO_URL, 
    {useNewUrlParser: true}
)
.then(() => {
    console.log("Connected to mongodb atlas")
})
.catch(error => {
    console.log("Something wrong happened",error)
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database Connected !!!");
});

module.exports= db;