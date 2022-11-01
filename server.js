const express = require('express')
const dotenv = require('dotenv')
const bootcampRoutes = require('./routes/bootcampRoutes.js')
const userRoutes = require('./routes/userRoutes')
const connection =  require('./config/db')
const listEndPoints = require('express-list-endpoints')


const app = express();

dotenv.config({
    path: './config_env/config.env'
})

app.use(express.json())

connection()

app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users', userRoutes)

console.log(listEndPoints(app));

app.listen( process.env.PORT , () => {
    console.log(`The Server listen in port ${process.env.PORT}`);
})