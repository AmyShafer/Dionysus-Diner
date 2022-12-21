const sql = require('../connection/config')

module.exports = {
  // Get all employees
  getEmployees(req, res) {
    return new Promise((resolve, reject) => {
      sql.query("SELECT employees.id, first_name, last_name, title, manager_id FROM employees INNER JOIN roles ON employees.role_id = roles.id ORDER BY first_name", (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
  },
  //get all roles
  getRoles(req, res) {
    return new Promise((resolve, reject) => {
      sql.query("SELECT roles.id, title, salary, name FROM roles INNER JOIN departments ON roles.department_id =departments.id", (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
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
          resolve(res.json(results))
        }
      })
    })
  },
  getMenuOptions(req, res) {
    return new Promise((resolve, reject) => {
      sql.query("SELECT * FROM menu", (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
  },
  getMenuItem(req,res) {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM item WHERE item_id=${req.params.id}`, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
  },
  removeEntry(req,res) {
    return new Promise((resolve, reject) => {
      sql.query(`DELETE FROM ${req.body.table} WHERE id=${req.body.id}`, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
  },
  addEmployee(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (${req.body.first_name}, ${req.body.last_name}, ${req.body.role_id}, ${req.body.manager_id})`, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
  },
  updateEmployee(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`UPDATE employees SET WHERE employee_id=${req.params.id}`, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
  },
  updateDepartment(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`UPDATE departments SET name="${req.body.dept}" WHERE id=${req.body.id} `, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
  },
}
  // update stock
  // removeEmployee(req, res) {
  //   return new Promise((resolve, reject) => {
  //     sql.query(`DELETE FROM employees WHERE employee_id=${req.params.id}`, (err, results) => {
  //       if (err) {
  //         reject(res.status(500).json(err))
  //       } else {
  //         resolve(res.json(results))
  //       }
  //     })
  //   })
  // }


