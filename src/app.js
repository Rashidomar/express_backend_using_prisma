const express =  require("express")
const {PrismaClient} = require("@prisma/client")
const app = express()
const cors = require("cors")
const cookie = require("cookie-parser")
const userRoutes = require("./routes/userRoutes")

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// app.use()

app.use(userRoutes)

module.exports = app