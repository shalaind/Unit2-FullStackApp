Comments = require("../models/Comment")
Locations = require("../models/Location")


const commentController = {
    new: (req, res) => {
        const commentLocId = req.params.id
        res.render("comments/create", {commentLocId:commentLocId})
    },
    create: (req, res) => {
        const commentLocId = req.params.id
        Locations.findById(commentLocId).then(
         (LocationArray) => {
         Comments.create({
             username: req.body.username,
             comment: req.body.comment,
            }).then((newComment) => {
                LocationArray.comments.push(newComment)
                LocationArray.save()
                res.redirect('/all-locations')
            })
        })
    },
    edit: (req, res) => { 
        const commentId = req.params.id
        console.log(commentId)
        Comments.findById(commentId).then(comment => {
            res.render('comments/delete', { comment })
        })

    },
    delete: (req, res) => {console.log("sssss",req.params)
        const commentId = req.params.id
        Comments.findByIdAndRemove(commentId).then(() => {
            console.log("comment is deleted")
            res.redirect('/all-locations')
        })
    }
}


module.exports = commentController