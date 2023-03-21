const jwt = require("jsonwebtoken")

const createToken = (user_id)=>{
    const token = jwt.sign(
        { user_id: user_id},
        'supersecret',
        {
          expiresIn: "2h",
        }
    );

    return token
};

const verifyToken = (req, res, next)=>{

    const authHeader = req.headers['authorization'];

    const token = authHeader.split(" ")[1]

    if(!token){
       return res.json({ auth: false, message: 'No token provided.' })
    }
    try{
        jwt.verify(token, 'supersecret', (error, decoded)=>{
            if(error){
                return res.json({ auth: false, message: 'Failed to authenticate token.' })
            }else{
                return res.json({ auth: true, message: 'Authenticated Successfilly.', data: decoded })
            }

        })
    }catch(e){
        console.log(e)
        return res.json({ auth: false, message: 'No token provided.' })

    }

}

module.exports = {createToken , verifyToken}
