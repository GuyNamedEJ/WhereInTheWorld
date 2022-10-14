const express = require('express')
const app = express()
const cors = require('cors')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', require('./routes/country'))
const PORT = 8000

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The Server is live on ${PORT}`)
})