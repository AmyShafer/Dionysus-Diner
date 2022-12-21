const router = require('express').Router();
const {
  getEmployees,
  getRoles,
  getDepartments,
  getMenuOptions,
  getMenuItem,
  deleteEntry,
} = require('../../controllers/userControllers');

// /api/diner/employees
router.route('/employees').get(getEmployees);
// /api/diner/roles
router.route('/roles').get(getRoles);
// /api/diner/departments
router.route('/departments').get(getDepartments);
// /api/diner/menu
router.route('/menu').get(getMenuOptions)
// /api/diner/delete
router.route('/delete').delete(deleteEntry)
// /api/diner/menuItem
router.route('/menuItem/:id').get(getMenuItem)



module.exports = router;
