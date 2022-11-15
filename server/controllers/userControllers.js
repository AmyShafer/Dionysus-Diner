const sql = require('../connection/config')
const cTable = require('console.table');

module.exports = {
  // Get all employees
  getEmployees(req, res) {
    return new Promise((resolve, reject) => {
      sql.query("SELECT first_name, last_name, title, manager_id FROM employees INNER JOIN roles ON employees.role_id = roles.id", (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          console.log(cTable.getTable(results))
          resolve(res.json(results))
        }
      })
    })
  },
  //get all roles
  getRoles(req, res) {
    return new Promise((resolve, reject) => {
      sql.query("SELECT title, salary, name FROM roles INNER JOIN departments ON roles.department_id =departments.id", (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          console.log(cTable.getTable(results))
          resolve(res.json(results))
        }
      })
    })
  },
  //get all departments
  getDepartments(req, res) {
    return new Promise((resolve, reject) => {
      sql.query("SELECT * FROM departments", (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          console.log(cTable.getTable(results))
          resolve(res.json(results))
        }
      })
    })
  },

}
