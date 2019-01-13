Users = require("../models/User")
ExpressUpload = require('express-fileupload')



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
        let images = req.files.image;

        images.mv(`public/images/uploads/${req.files.image.name}`, function(err) {
          if (err)
            return res.status(500).send(err);
              });

        const imageUpload = `images/uploads/${req.files.image.name}`

        Users.create({
            username: req.body.username,
            email: req.body.email,
            image: imageUpload
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
