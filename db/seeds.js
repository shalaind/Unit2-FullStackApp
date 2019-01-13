const Users = require('../models/User')
const Locations = require('../models/Location')
const Comment = require('../models/Comment')

let newUsers = [
    {
        username: "Shalain",
        email: "sderamus21@gmail.com",
        image: "https://static1.squarespace.com/static/549dd0cee4b029881efa814b/5b101ad2758d46ee70365c19/5b101b0588251bbe83b3ee2b/1543878073891/dc-headshot-photographer-68.JPG"
    }, 
    {
        username: "Destin",
        email: "destinf@gmail.com",
        image: "https://static1.squarespace.com/static/549dd0cee4b029881efa814b/5b101ad2758d46ee70365c19/5b101b0588251bbe83b3ee2b/1543878073891/dc-headshot-photographer-68.JPG"
    },
    {
        username: "Karelys",
        email: "karelyss@gmail.com",
        image: "https://static1.squarespace.com/static/549dd0cee4b029881efa814b/5b101ad2758d46ee70365c19/5b101b0588251bbe83b3ee2b/1543878073891/dc-headshot-photographer-68.JPG"
    }
]

Users.create(newUsers).then(users => {
    console.log("Your users are seeded", users)
})


Locations.deleteMany({})
    .then(() => {
        return Locations.create({
            
                username: "ShalainD",
                title: "Moda Art Center",
                caption: "There is no free parking here, check the surrounding neighborhoods and parallel park on the streets.",
                address: "1234 Atlanta St, Atlanta, GA, 30309",
                image: "https://media.glassdoor.com/l/152817/walden-security-office.jpg",
                comments: []
            }
        ).then((newLocation) => {
            const Comment1 = Comment.create({
                username: "ShalainD",
                comment: "Oh wow! That place is awesome"
            }).then((comment1) => {
                newLocation.comments.push(comment1)
                console.log(comment1)

            })

            const Comment2 = Comment.create({
                username: "KSouto",
                comment: "I've been here before. It's best to go after 5 when the sun sets!"
            }).then((comment) => {
                newLocation.comments.push(comment)
                console.log(comment)

            })

            Promise.all([Comment1, Comment2])
            .then(()=>{
                newLocation.save()

            })
        })
    })