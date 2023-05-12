const express = require("express");
const sequelize = require('./db')
const cors = require('cors');
const mainRouter = require('./routes/index')
const models = require('./models/models.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload');

const dotenv = require("dotenv");
dotenv.config()

const PORT = process.env.PORT || 3005

const app = express()
app.use(cors({}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/api', mainRouter)
app.use(express.static('uploads'));
app.use(fileUpload());

//Обработчик ошибок
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}...`)
        })
        app.post('/upload', (req, res) => {
            const { image } = req.files;
            if (!image) return res.sendStatus(400);
            console.log(req.files)
            image.mv(__dirname + '/uploads/' + image.name);
            res.sendStatus(200);
        });
    }
    catch (e) {
        console.log(e)
    }
}

start()