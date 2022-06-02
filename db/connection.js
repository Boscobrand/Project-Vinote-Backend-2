//SETUP
//----------------------------------------------
require('dotenv').config('./.env');
const mongoose = require("mongoose");
const db = mongoose.connection;

//CONNECTING WITH MONGODB
//------------------------------------------------

mongoose.Promise = Promise;
let mongoURI = process.env.MONGODB_URI || 5002;

// if (process.env.NODE_ENV === "production") {
//     mongoURI = process.env.MONGODB_URI;
//   } 
//   else {
//     mongoURI = "mongodb://localhost:5000";
//   }

mongoose
  .connect(mongoURI, { useNewUrlParser: true },{ useUnifiedTopology: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

  //CONFIRMMATION MESSAGING
  //---------------------------------------------
  db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
  db.on('connected', () => console.log('mongo connected at: ', mongoURI));
  db.on('disconnected', () => console.log('mongo disconnected'));
  
  db.on('open', () => {
    console.log('✅ mongo connection made!');
  });


module.exports = mongoose;