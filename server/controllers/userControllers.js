

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
      sql.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${req.body.first}", "${req.body.last}", "${req.body.roleId}", "${req.body.managerId}")`, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
    .then(()=>{console.log("Success adding to employees")})
    .catch(()=>{console.error("number range out of bounds")})
  },
  addDepartment(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`INSERT INTO departments (name) VALUES ("${req.body.dept}")`, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
  },
  addRole(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${req.body.title}", "${req.body.salary}", "${req.body.deptId}")`, (err, results) => {
        if (err) {
          reject(res.json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
    .then(()=>{console.log("Success adding to role")})
    .catch(()=>{console.error("number range out of bounds")})
  },
  addItem(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`INSERT INTO item (name, stock, price, item_id) VALUES ("${req.body.name}", "${req.body.stock}", "${req.body.price}", "${req.body.id}")`, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
    .then(()=>{console.log("Success adding to items")})
    .catch(()=>{console.error("number range out of bounds")})
  },
  updateEmployee(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`UPDATE employees SET first_name="${req.body.first}", last_name="${req.body.last}", role_id="${req.body.roleId}", manager_id="${req.body.managerId}" WHERE id=${req.body.id}`, (err, results) => {
        if (err) {
          console.error(err)
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
    .then(()=>{console.log("Success editing to employees")})
    .catch(()=>{console.error("number range out of bounds")})
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
    .then(()=>{console.log("Success editing to employees")})
    .catch(()=>{console.error("number range out of bounds")})
  },
  removeEmployee(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`DELETE FROM employees WHERE employee_id=${req.params.id}`, (err, results) => {
        if (err) {
           reject(res.status(500).json(err))
          } else {
             resolve(res.json(results))
          }
      })
    })
  },
  updateRole(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`UPDATE roles SET title="${req.body.title}", salary="${req.body.salary}", department_id="${req.body.deptId}" WHERE id=${req.body.id} `, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
    .then(()=>{console.log("Success editing to role")})
    .catch(()=>{console.error("number range out of bounds")})
  },
  updateMenu(req, res) {
    return new Promise((resolve, reject) => {
      sql.query(`UPDATE item SET name="${req.body.name}", stock="${req.body.stock}", price="${req.body.price}" WHERE id=${req.body.id}`, (err, results) => {
        if (err) {
          reject(res.status(500).json(err))
        } else {
          resolve(res.json(results))
        }
      })
    })
    .then(()=>{console.log("Success editing to menu")})
    .catch(()=>{console.error("number range out of bounds")})
  }
}
