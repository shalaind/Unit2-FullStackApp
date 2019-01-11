const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        username: String,
        comment: String
    }
)

module.exports = mongoose.model("Comment", Comment)