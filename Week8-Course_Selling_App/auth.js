const jwt = require("jsonwebtoken");
const JWT_SECRET = "qwertyuioplkjhgfdsa";

function userAuth(req,res,next){

};

function adminAuth(req,res,next){

}

module.exports = {
    userAuth,
    adminAuth,
    JWT_SECRET
} 