const express = require('express')
const app = express()
const router = require('./routes/index')
var path = require('path');
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload');
var hbs = require('hbs');
require('handlebars-form-helpers').register(hbs.handlebars);


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'))
app.use(fileUpload());
app.use('/', router)

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/images/'));


app.set("view engine", "hbs")

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})