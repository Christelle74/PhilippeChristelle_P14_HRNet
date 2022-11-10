const express = require('express')//import du paquet express
require('./models/dbConfig')
const employeesRoutes = require('./routes/employeesController')
const bodyParser = require('body-parser')
const cors = require('cors')


//create express application
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())// give external access
app.use('/employees', employeesRoutes)// '/' = url/employees


//start the server and listen the given port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




