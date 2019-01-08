Comments = require("../models/Comment")

const commentController = {
    index: (req, res) => {
         Comments.find({}).then(comments => {
            res.send(comments)
         })
    }
 }
 
 module.exports = commentController