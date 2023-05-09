const express = require("express");
const sequelize = require('./db')
const cors = require('cors');
const mainRouter = require('./routes/index')
const models = require('./models/models.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const dotenv = require("dotenv");
dotenv.config()

const PORT = process.env.PORT || 3005

const app = express()
app.use(cors({}));
app.use(express.json())
app.use('/api', mainRouter)

//Обработчик ошибок
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}...`)
        })
    }
    catch (e) {
        console.log(e)
    }
}

start()