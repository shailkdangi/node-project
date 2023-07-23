const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Employedb = require('../model/empModel');
const handleLogin = async (req, res) => {

    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'empty username or password' });
    const founduser = await Employedb.findOne({ 'username': username }).exec();
    if (!founduser) return res.status(401).json({ 'message': 'user not found' });
    const pass = await bcrypt.compare(password, founduser.password);
    if (!pass) return res.status(401).json({ 'message': 'wrong login credentials.' });

    const access_token = await jwt.sign(
        { 'username': username },
        process.env.ACCESS_TOKEN,
        { 'expiresIn': '30s' }
    );
    const refresh_token = await jwt.sign(
        { 'username': username },
        process.env.REFRESH_TOKEN,
        { 'expiresIn': '1d' }
    );

    founduser.jwttoken = refresh_token;
    founduser.save();
    res.cookie('jwt', access_token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    res.status(200).json({ 'message': `user ${access_token} login successfull.` });

}


module.exports = handleLogin