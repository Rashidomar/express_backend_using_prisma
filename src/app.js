const express =  require("express")
const {PrismaClient} = require("@prisma/client")
const app = express()
const prisma = new PrismaClient()
const userRoutes = require("./routes/userRoutes")

app.use(express.json())

// app.get("/", async (req, res)=>{
//     res.json("hello")
// })

app.use(userRoutes)

module.exports = app