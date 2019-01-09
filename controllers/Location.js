Locations = require("../models/Location")

const locationController = {

    index: (req, res) => {
        res.render("index/splash")
    },

    show: (req, res) => {
        Locations.find({}).then((allLocations) => {
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
            image: req.body.image
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
        // console.log(req.body)
        Locations.findByIdAndUpdate(locationId, req.body, {new: true}).then((location) => {
            res.redirect('/all-locations')
        })
    },

    delete: (req, res) => {
        const locationId = req.params.id
        Locations.findByIdAndRemove(locationId).then(() => {
            res.redirect('/all-locations')
        })
    }
}

module.exports = locationController