
const express = require("express");
const router = express.Router();
const emp = require('../controller/empController.js');
// router.get("/allemployee", (req, res) => {
   
// });
router.route('/')
    .get(emp.getEmployee)
    .post(emp.addEmployee)
    .put(emp.editEmployee)
    .delete(emp.delEmployee);

module.exports = router;