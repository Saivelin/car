const express = require("express");
const userRouter = require("./routes/user.routes")
const adsController = require("./routes/ads.routes")
const authRouter = require('./routes/authRouter.routes')
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3005

app.use(cors({
}));
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', adsController)
app.use('/api/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})