const Users = require('../models/User')
const Locations = require('../models/Location')
const Comments = require('../models/Comment')


let newUsers = [
    {
        name: "Shalain",
        email: "sderamus21@gmail.com"
    }, 
    {
        name: "Destin",
        email: "destinf@gmail.com"
    },
    {
        name: "Karelys",
        email: "karelyss@gmail.com"
    }
]

Users.create(newUsers).then(users => {
    console.log("Your users are seeded", users)
})

let newLocations = [
    {
        username: "ShalainD",
        title: "Moda Art Center",
        caption: "There is no free parking here, check the surrounding neighborhoods and parallel park on the streets.",
        address: "1234 Atlanta St, Atlanta, GA, 30309",
        image: "https://media.glassdoor.com/l/152817/walden-security-office.jpg"
    },
    {
        username: "KSouto",
        title: "Sunflower Farm",
        caption: "The farm is only available for 2 weeks during the summer. The parking is $10. Get there early to avoid heavy foot traffic.",
        address: "3948 SunFlowers Rd, Conyers, GA, 30091",
        image: "https://www.narcity.com/u/2018/06/07/61bb4fa21ddc8db3afc3df2ba8f2fb4d83689be2.png_1200x630.png"
    },
    {
        username: "KSouto",
        title: "Dfloyd",
        caption: "It is slightly difficult to find this place. Once you reach the park you will take a right and follow the path until you see a bridge. You have to search through the trees to find the graffiti towers.",
        address: "6685 Old Water Works Ln, Decatur, GA, 30308",
        image: "https://c1.staticflickr.com/4/3770/12508992324_319157b0a1_b.jpg"
    }
]

Locations.create(newLocations).then(locations => {
    console.log("Your locations are seeded", locations)
})



let newComments = [
    {
        username: "ShalainD",
        comment: "Oh wow! That place is awesome"
       
    },
    {
        username: "KSouto",
        comment: "I've been here before. It's best to go after 5 when the sun sets!"
    
    },
    {
        username: "Dfloyd",
        comment: "Hey what's your instagram? I'd love to see more of your images"
    }
  
]

Comments.create(newComments).then(comments => {
    console.log("Your commnets are seeded", comments)
})