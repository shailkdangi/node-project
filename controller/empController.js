const path = require("path");
const employeedata = require('../model/empModel');
const data = {};
data.employee = require("../files/employee.json");

const getEmployee = async (req, res) => {
    console.log(req.url);
    // await employeedata.create({
    //     firstname: 'test',
    //     lastname: 'fff'
    // })
    const data2 = await employeedata.find();
    res.json(data2);
};
const addEmployee = (req, res) => {
    console.log(req.url);
    res.json(data.employee);
};
const editEmployee = (req, res) => {
    console.log(req.url);
    res.json(data.employee);
};
const delEmployee = (req, res) => {
    console.log(req.url);
    res.json(data.employee);
};



module.exports = { getEmployee, addEmployee, editEmployee, delEmployee }