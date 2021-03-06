const mongoose = require('mongoose');

/*
* Here we find an appropriate database to connect to, defaulting to
* localhost if we don't find one.
*/

const uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://mongo:27017/todoDB";

/*
* Makes connection asynchronously.  Mongoose will queue up database
* operations and release them when the connection is complete.
*/

mongoose.connect(uristring, { useNewUrlParser: true })
    .then(()=> console.log ('Succeeded connected to: ' + uristring))
    .catch((err) => console.log(err));

module.exports = mongoose;