const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id){
    const payload = {
        user: user_id
    }
    
    return jwt.sign(payload, 'cat1234', { expiresIn: "1h" });
}

module.exports =jwtGenerator;