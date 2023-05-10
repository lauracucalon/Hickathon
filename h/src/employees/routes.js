const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getEmployees);
router.post("/", controller.addEmployee);
router.get("/:id", controller.getEmployeesById);

module.exports = router;