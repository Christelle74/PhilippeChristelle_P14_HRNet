const express = require('express')//import du paquet express
require('./models/dbConfig')
const employeesRoutes = require('./routes/employeesController')
const bodyParser = require('body-parser')
const cors = require('cors')


//crée l'application express
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())// donne l'accès à l'extérieur
app.use('/employees', employeesRoutes)// '/' = url/employees


//démarrer le serveur et écouter un port donné
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




