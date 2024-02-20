const router = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")


router.post("/register", async (req, res) => {
    const { username, password, name } = req.body
    const errors = {}



    if (!username) {
        errors.username = "username is required"
    }else{
        if(username.length < 4){
            errors.username = "must be at least 3 characters"
        }
    }
    if(!password){
        errors.password = "password is required"
    }else{     
        if(password.length < 8){
            errors.password = "password must be more 8 characters"
        }
    }
    if(!name){
        errors.name = "name is required"
    }



    const user_by_username  = await User.findOne({username: username}) 

    if (user_by_username != null) {
        errors.password = "the username already exists"
    }


    if(Object.keys(errors).length >= 1){
        return res.status(422).json({errors: errors})
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

