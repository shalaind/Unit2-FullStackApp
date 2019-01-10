const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: String,
        email: String,
        image: String
    }
)

module.exports = mongoose.model("User", User)