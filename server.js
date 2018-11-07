// =================================================================
// get the packages we need ========================================
// =================================================================
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const cors       = require('cors')

// =======================
// configuration =========
// =======================
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3003;

app.use(cors())
//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  


// use morgan to log requests to the console
app.use(morgan('dev'));

// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
const apiRoutes = express.Router(); 

apiRoutes.use('/task', require('./app/route/task'));;

app.use(apiRoutes);

// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);

module.exports = app; // for testing