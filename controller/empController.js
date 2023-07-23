const path = require("path");
const employeedata = require('../model/empModel');
const data = {};
data.employee = require("../files/employee.json");
const bcrypt = require('bcrypt');

const getAllEmployee = async (req, res) => {
    const data2 = await employeedata.find();
    res.json(data2);
};
const getEmployee = async (req, res) => {
    console.log(req.url);
    const { id } = req.params;
    console.log(id);
    const employeenew = await employeedata.findOne({ '_id': id }).exec();
    res.json(employeenew);
};
const addEmployee = async (req, res) => {
    console.log(req.url);
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
    const hashed = await bcrypt.hash(password, 10);
    await employeedata.create({
        username: username,
        password: hashed,
        jwttoken: ''
    });
    res.json(data.employee);
};
const editEmployee = async (req, res) => {
    console.log(req.url);
    const { username, id } = req.body;
    console.log(id);
    const employeenew = await employeedata.findOne({ '_id': id }).exec();
    employeenew.username = username;
    employeenew.save();
    res.json(employeenew);
};
const delEmployee = async (req, res) => {
    console.log(req.url);
    const { id } = req.body;
    console.log(id);
    //const employeenew = await employeedata.findOne({ '_id': id }).exec();
    await employeenew.deleteOne({ '_id': id }).exec();
    res.json(employeenew);
};



module.exports = { getAllEmployee, getEmployee, addEmployee, editEmployee, delEmployee }