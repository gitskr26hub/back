const mongoose = require("mongoose")
require('dotenv').config()

const connection = mongoose.connect(mongoDB_url)


module.exports = {
    connection
}