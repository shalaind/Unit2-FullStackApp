const Users = require('../models/User')

let newUsers = [
    {
        name: "Shalain"
    }, 
    {
        name: "Destin"
    },
    {
        name: "Karelys"
    }
]

Users.create(newUsers).then(users => {
    console.log("Your file is seeded", users)
})

