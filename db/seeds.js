const Users = require('../models/User')
const Locations = require('../models/Location')
const Comment = require('../models/Comment')

let newUsers = [{
        username: "Shalain",
        email: "shalaind@gmail.com",
        image: "images/uploads/IMG_5817.jpeg"
    },
    {
        username: "Kenya",
        email: "kenyaj@gmail.com",
        image: "images/uploads/IMG_5812.JPG.jpeg"
    },
    {
        username: "Karelys",
        email: "karelyss@gmail.com",
        image: "images/uploads/IMG_5813.JPG.jpeg"
    }
]

Users.create(newUsers).then(users => {
    console.log("Your users are seeded", users)
})


Locations.deleteMany({})
    .then(() => {
        return Locations.create({

            username: "MaiahB",
            title: "High Museum of Art",
            caption: "There is no free parking here, check the surrounding neighborhoods and parallel park on the streets.",
            address: "1234 Atlanta St, Atlanta, GA, 30309",
            image: "images/uploads/IMG_5815.jpeg",
            comments: []
        }).then((newLocation) => {
            const Comment1 = Comment.create({
                username: "Kenya",
                comment: "Oh wow! That place is awesome"
            }).then((comment1) => {
                newLocation.comments.push(comment1)
                console.log(comment1)

            })

            const Comment2 = Comment.create({
                username: "Karelys",
                comment: "I've been here before. It's best to go after 5 when the sun sets!"
            }).then((comment) => {
                newLocation.comments.push(comment)
                console.log(comment)

            })

            Promise.all([Comment1, Comment2])
                .then(() => {
                    newLocation.save()

                })
        })
    })