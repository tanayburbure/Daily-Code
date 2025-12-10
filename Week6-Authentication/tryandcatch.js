const jwt = require("jsonwebtoken");
const jwt_password = "secret";
const zod = require("zod")

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username
    },jwt_password)

    return signature
}

// const ans = signJwt("tanayburbure@gmail.com","@Iamtanay1")
// console.log(ans)

function verifyJwt(token){
    let ans = true;
    try {
        jwt.verify(token , jwt_password)
    }
    catch(e){
        ans = false;
    }
    return ans;
}



function decodeJwt(token){
    const decoded = jwt.decode(token);
    if (decoded){
        return true;
    }
    else{
        return false;
    }
}

console.log(decodeJwt("ghsusghs"))