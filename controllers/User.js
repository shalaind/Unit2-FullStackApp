Users = require("../models/User")


const userController = {
    index: (req, res) => {
        Users.find({}).then((users) => {
            res.render("users/index", {
                users
            })
        })
    },
    delete: (req, res) => {
        const userId = req.params.id
        Users.findByIdAndRemove(userId).then(() => {
            console.log("user deleted")
            res.redirect('/users')
        })
    },

    new: (req, res) => {
        res.render("users/create")
    },

    create: (req, res) => {
        Users.create({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        }).then(newUser => {
            res.redirect('/users')
        })
    },

    show: (req, res) => {
    
        const userId = req.params.id
        Users.findById(userId).then((userId) => {

        res.render("users/userProfile", {userId})
        })
    }

}

module.exports = userController

// delete: (req, res) => {
//     const locationId = req.params.id
//     Locations.findByIdAndRemove(locationId).then(() => {
//         res.redirect('/all-locations')
//     })