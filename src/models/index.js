const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = {
    Topic: require('./Topic'),
    Question: require('./Question'),
    dbString: require('../config/app.config').Url,
    Port: require('../config/app.config').Port,
    mongoose: mongoose
}