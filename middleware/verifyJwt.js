const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Employedb = require('../model/empModel');
const verifyJwt = (req, res, next) => {
    const authheader = req.headers['authorization'];
    const access_token = authheader.split(' ')[1];
    console.log(access_token);
    jwt.verify(
        access_token,
        process.env.ACCESS_TOKEN,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.username;
             next();
        }
    );

}


module.exports = verifyJwt