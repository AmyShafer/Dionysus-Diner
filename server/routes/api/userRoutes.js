const router = require('express').Router();
const {
  getEmployees,
  getRoles,
  getDepartments,
  getMenuOptions,
  getMenuItem,
  removeEntry,
  addEmployee,
  updateEmployee,
  updateDepartment,
  updateRole,
  updateMenu,
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
router.route('/delete').delete(removeEntry)
// /api/diner/addEmployee
router.route('/employees').post(addEmployee);
// /api/diner/updateEmployee
router.route('/employees').put(updateEmployee);

// // /api/diner/MenuItemSubtract
// router.route('/menuItemSubtract').put(updateStock);

// /api/diner/departments
router.route('/departments').put(updateDepartment);
// /api/diner/roles
router.route('/roles').put(updateRole);
// /api/diner/menu
router.route('/menu').put(updateMenu);

module.exports = router;
