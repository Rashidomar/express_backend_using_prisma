const express =  require("express")
const {PrismaClient} = require("@prisma/client")
const app = express()
const cors = require("cors")
const cookie = require("cookie-parser")
const userRoutes = require("./routes/userRoutes")
const {verifyToken} = require("./middleware/auth")


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// app.use()
app.get("/", verifyToken, async (req, res)=>{

    res.json("Welcome")

})

app.use(userRoutes)

module.exports = app