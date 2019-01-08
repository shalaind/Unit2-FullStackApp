Locations = require("../models/Location")

const locationController = {

    index: (req, res) => {
        Locations.find({}).then(locations => {
            res.send(locations)
        })
    },

    create: (req, res) => {
        Locations.create({
            username: "ShalainD",
            title: "MODA",
            caption: "There's no parking. Take the train",
            address: "3344 Broadway St., New York City, NY",
            image: "https://manepedia.files.wordpress.com/2012/04/museo-de-la-moda.jpg"
        }).then(newLocation => {
            res.redirect('/')
        })
    },
    // {
    // edit: (res, req) => {
    // const locationId = req.params.id
    //     // console.log(newslinkId)
    // res.render'app/edit', {locationId})
    // }
}

module.exports = locationController