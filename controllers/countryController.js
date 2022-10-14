const fetch = require('node-fetch')

// Display All Countries
const countriesView = (req,res) => {
    res.render("index", {})
}

// Display single page with country info
const countryInfoView = (req,res) => {
    res.render("country", {})
}



module.exports = {
    countriesView,
    countryInfoView,
}
