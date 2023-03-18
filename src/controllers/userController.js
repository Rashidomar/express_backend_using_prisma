
const login  = async (req, res) =>{
    res.json("This is the login page")
}

const signup = async (req, res) =>{
    res.json("This is the sign page")

}

const userController = {login}

module.exports = userController

