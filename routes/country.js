// Require express
const express = require('express')
// const {countriesView, countryInfoView} = require('../controllers/countryController');
const router = express.Router()
const fetch = require('node-fetch')
const { africaView } = require('../controllers/countryController')
const bodyParser = require('body-parser')

router.use(express.urlencoded({extended: true}))
router.use(express.json())


// router.get('/', countriesView)

router.get('/', async(req, res) => {
    const api_url = 'https://restcountries.com/v3.1/all'
    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json()
    //console.log(json)
    res.render('index.ejs',{info:json})
})


router.get('/filter', async(req,res) => {
    const region = req.query.region
    console.log(region)
    const api_url = 'https://restcountries.com/v3.1/region/'+ region
    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json()
    res.render('index.ejs',{info:json})
})

router.get('/search', async(req,res) => {
    const name = req.query.name
    console.log(name)
    const api_url = 'https://restcountries.com/v3.1/name/'+ name
    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json()
    res.render('index.ejs',{info:json})
})

router.get('/countryData', async(req, res) => {
    const country = req.query.country;
    const api_url = 'https://restcountries.com/v3.1/name/'+ country + '?fullText=true'
    const fetch_response = await fetch(api_url)
    const countryData = await fetch_response.json()
   
    const nativeName = Object.values(countryData[0].name.nativeName)
    const languages = Object.values(countryData[0].languages)
    const currency = Object.values(countryData[0].currencies)
    //const borders = Object.values(countryData[0].borders)
    let borderData = null
    //console.log(countryData[0].borders) 
    if(countryData[0].borders != undefined)
    {
        borderData = await getBorderCountries(countryData[0].borders)
    }
    
    // console.log(countryData[0].borders)     
    //console.log(borderData)
    // console.log(countryData[0].name.nativeName.language.official)
    // const nativeName = JSON.parse(countryData[0].name.nativeName)
    res.render('country.ejs', {
        data: countryData,
        nativeName:nativeName,
        languages: languages,
        currency: currency,
        borderData: borderData
    })
})

async function getBorderCountries(borderCountries)
{
    let borders = []
    for(let i = 0; i < borderCountries.length; i++)
    {
        const api_url = 'https://restcountries.com/v3.1/alpha?codes='+ borderCountries[i]
        const fetch_response = await fetch(api_url)
        const country = await fetch_response.json()
        //console.log(country[0].name.common)
        borders.push(country[0].name.common)
    }

    // console.log(borders)
    return borders
}



module.exports = router;