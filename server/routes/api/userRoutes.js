const router = require('express').Router();
const {
  getEmployees,
  getRoles,
  getDepartments
} = require('../../controllers/userControllers');

// /api/diner/employees
router.route('/employees').get(getEmployees);
// /api/diner/roles
router.route('/roles').get(getRoles);
// /api/diner/departments
router.route('/departments').get(getDepartments);


module.exports = router;
