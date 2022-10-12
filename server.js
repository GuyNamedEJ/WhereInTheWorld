const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', require('./routes/country'))
const PORT = 8000

app.listen(PORT, console.log(`WE live on port ${PORT}`))