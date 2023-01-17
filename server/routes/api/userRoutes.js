const router = require('express').Router();
const {
  getEmployees,
  getRoles,
  getDepartments,
  getMenuOptions,
  getMenuItem,
  removeEntry,
  addEmployee,
  addDepartment,
  addRole,
  addItem,
  updateEmployee,
  updateDepartment,
  updateRole,
  updateMenu
  // updateStock
} = require('../../controllers/userControllers');

// /api/diner/employees
router.route('/employees').get(getEmployees);
// /api/diner/roles
router.route('/roles').get(getRoles);
// /api/diner/departments
router.route('/departments').get(getDepartments);
// /api/diner/menu
router.route('/menu').get(getMenuOptions)
// /api/diner/menuItem
router.route('/menuItem/:id').get(getMenuItem);
// /api/diner/delete
router.route('/delete').delete(removeEntry);
// /api/diner/addEmployee
router.route('/AddEmployees').post(addEmployee);
// /api/diner/addDepartment
router.route('/AddDepartments').post(addDepartment);
// /api/diner/addRole
router.route('/AddRoles').post(addRole);
// /api/diner/addItem
router.route('/AddItems').post(addItem);
// /api/diner/updateEmployee
router.route('/employees').put(updateEmployee);
// /api/diner/departments
router.route('/departments').put(updateDepartment);
// /api/diner/roles
router.route('/roles').put(updateRole);
// /api/diner/menu
router.route('/menu').put(updateMenu);

module.exports = router;
