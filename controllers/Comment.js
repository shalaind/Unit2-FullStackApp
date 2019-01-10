Comments = require("../models/Comment")
Comments = require("../models/Location")


const commentController = {
    new: (req, res) => {
        const commentLocId = req.params.id
        
        
        res.render("comments/create", {commentLocId})
    },
    create: (req, res) => {
        Comments.create({
            username: req.body.username,
            comment: req.body.comment,
        }).then(newComment => {
            res.redirect('/all-locations')
        })
    }
}


module.exports = commentController