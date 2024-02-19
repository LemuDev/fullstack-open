const router = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")


router.post("/register", async (req, res) => {
    const { username, password, name } = req.body
    
    if (!(username && password && name)) {
        return res.status(422).json({
            error: "all fields are required"
        })
    }

    if(password.length < 8){
        return res.json({
            "error": "password must be more 8 characters"
        })
    }

    const user_by_username = await User.findOne({username: username}) 

    if (user_by_username != null) {
        return res.json({
            "error": "the username already exists"
        })
    }

    try {
        var salt = bcrypt.genSaltSync(10)
        const pwdHash = bcrypt.hashSync(password, salt)

        const createUser = new User({
            name: name,
            username: username,
            password: pwdHash
        })
    
        createUser.save()
    } catch (error) {
        return res.json({
            "error": "Error creating the User"
        })
    }



    return res.json(
        {
            "access_token":"exmale"
        }
    )
})




module.exports = router

