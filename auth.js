const User = require("./database/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

async function loginWithEmailAndPassword(email_address, password) {
    const user = await User.findOne({ where: { email_address: email_address } });
    if (!user) {
        return { status: 401 };
      }
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
        return { status: 401 }
    }
    
    const token = jwt.sign(
        { user_id: user.id, email_address },
        JWT_PRIVATE_KEY,
        {
            expiresIn: "1h",
        }
    );
    return { token, user }

}

async function loginWithToken (token) {
    if(!token) {
        return {status: 401}
    }
            try {
                const data  = (token, process.env.JWT_PRIVATE_KEY);
                const user = await User.findByPk(data.user_id)
                if(!user) {
                    return { status: 401}
                };
              return user
            } catch (error) {
                return { Status: 401 }
            }
        }

       async function loginWithApiKey (apikey) {
        try {
            const userApiKey = await User.findOne( {where: {api_key: apikey} })
            if(!userApiKey) 
                return { status: 401}
            
            return userApiKey
        } catch (err) {
            return { status: 401 }
        }
        }
module.exports = { loginWithEmailAndPassword, loginWithToken, loginWithApiKey }