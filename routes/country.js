// Require express
const express = require('express')
// const {countriesView, countryInfoView} = require('../controllers/countryController');
const router = express.Router()
const { countriesView, countryInfoView} = require('../controllers/countryController')

router.use(express.urlencoded({extended: true}))
router.use(express.json())

router.get('/', countriesView)

router.get('/countryData', countryInfoView)





module.exports = router;