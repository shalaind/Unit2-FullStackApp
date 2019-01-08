const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Location = new Schema(
    {
        username: String,
        title: String,
        caption: String,
        address: String,
        image: String
    }
)

module.exports = mongoose.model("Location", Location)