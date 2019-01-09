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
            username: "ShalainD",
            title: "MODA",
            caption: "There's no parking. Take the train",
            address: "3344 Broadway St., New York City, NY",
            image: "https://manepedia.files.wordpress.com/2012/04/museo-de-la-moda.jpg"
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

    }
}

module.exports = locationController