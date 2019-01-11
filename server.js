const express = require('express')
const app = express()
const router = require('./routes/index')
var path = require('path');
const methodOverride = require('method-override')


// this is where we use our middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))
app.use('/', router)

// var publicDir = require('path').join(__dirname,'/public');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/images')); 

// app.use(express.static(__dirname + '/public'));

app.set("view engine", "hbs")
// process.env.PORT is necessary for deployment to Heroku
// If environment variable is not provided, default to 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})