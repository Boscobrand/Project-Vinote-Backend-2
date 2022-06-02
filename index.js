//SET UP - CONFIG
// ----------------------------------

const express = require('express');
const app = express();
app.set('port', process.env.PORT || 5002);
const cors = require('cors');


// MIDDLEWARE
// ------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors());


// REDIRECT
// --------------------------------------
app.get('/', (req,res) =>{
        res.redirect('/entry')
});

// CONTROLLERS
// -----------------------------------------

const wineController = require('./controllers/wineController');
app.use('/entry', wineController);


// ERROR HANDLING
// ------------------------------------------
app.use((err,req,res,next) =>{
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Server Error';
    res.status(statusCode).send(message);
});

//SERVER
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
});