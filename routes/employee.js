
const express = require("express");
const router = express.Router();
const emp = require('../controller/empController');
// router.get("/allemployee", (req, res) => {
   
// });
router.route('/')
    .get(emp.getAllEmployee)
    .post(emp.addEmployee)
    .put(emp.editEmployee)
    .delete(emp.delEmployee);

router.route('/:id')
    .get(emp.getEmployee);

module.exports = router;