const express = require('express')
const bodyParser = require('body-parser')
const routeur = require('./routeur/user_routeur')
const cors = require('cors')

let app = new express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/user', routeur)

app.listen(8080)