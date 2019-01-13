Locations = require("../models/Location")
Comments = require("../models/Comment")
ExpressUpload = require('express-fileupload')

const locationController = {

    index: (req, res) => {
        res.render("splash")
    },

    show: (req, res) => {
        Locations.find({}).populate('comments').then((allLocations) => { 
            res.render("index/locations", {allLocations})
        })
    },

    new: (req, res) => {
        res.render("locations/new-location")
    },

    create: (req, res) => {
      
        let images = req.files.image;

        images.mv(`public/images/uploads/${req.files.image.name}`, function(err) {
          if (err)
            return res.status(500).send(err);
              });

        const imageUpload = `images/uploads/${req.files.image.name}`

        Locations.create({
            username: req.body.username,
            title: req.body.title,
            caption: req.body.caption,
            address: req.body.address,
            image: imageUpload,
            comments: []
        }).then((newLocation) => { 
            res.redirect('/all-locations')
        })
    },

    edit: (req, res) => {
        const locationId = req.params.id
        Locations.findOne({_id:locationId}).then((populateInfo) => {
            res.render('locations/edit-location', {populateInfo} )
        })
    },

    update: (req, res) => {
        const locationId = req.params.id
        Locations.findByIdAndUpdate(locationId, req.body, {new: true}).then((location) => {
            res.redirect('/all-locations')
        })
    },

    delete: (req, res) => {
        const locationId = req.params.id
        Locations.findByIdAndDelete(locationId).then(() => {
            console.log('deleted')
            res.redirect('/all-locations')
        })
    }
}

module.exports = locationController