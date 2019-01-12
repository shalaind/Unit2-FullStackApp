Locations = require("../models/Location")
Comments = require("../models/Comment")


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
        Locations.create({
            username: req.body.username,
            title: req.body.title,
            caption: req.body.caption,
            address: req.body.address,
            image: req.body.image,
            comments: []
        }).then(newLocation => {
            res.redirect('/all-locations')
        })
    },

    edit: (req, res) => {
        const locationId = req.params.id
        res.render('locations/edit-location', {locationId})
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