const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const { createToken } = require("../middleware/auth")


const login  = async (req, res) =>{
    const {email, password} = req.body
    try{
        if(!(email && password)){
            res.status(400).json("All fields are required!!")
        }

        foundEmail = await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        console.log(foundEmail)

        if(foundEmail && (await bcrypt.compare(password, foundEmail.password))){
            const token = createToken(foundEmail.id)
            return res.json({
                "Message":"Successful",
                "newUser": foundEmail,
                "token": token

            })

        }else{
            res.status(400).json("Wrong credentials!!")

        }

    }catch(e){
        console.log(e)
    }

}

const signup = async (req, res) =>{
    const {username, email, password} = req.body
     try{
        if(!(username && email && password)){
            res.status(400).json("All fields are required!!")
        }

        foundEmail = await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        console.log(foundEmail)

        if(foundEmail){
            res.status(400).json("Email already exists..!!")

        }
        
        encryptedPassword = await bcrypt.hash(password, 10)
        console.log(encryptedPassword)
        const newUser = await prisma.user.create({
            data: {
                username: username,
                email:email,
                password:encryptedPassword
            }
        })

        if(newUser){
            return res.json({
                "Message":"Successful",
                "newUser": newUser,
            })
        }else{
            res.status(400).json("Error occured.. Try again")

        }

     }catch(e){
        console.log(e)
     }
}

const userController = {login, signup}

module.exports = userController

