const sql = require('./connection/config')
const cTable = require('console.table');


sql.query("SELECT first_name, last_name, title, manager_id FROM employees INNER JOIN roles ON employees.role_id = roles.id", (err, results) => { console.log(cTable.getTable(results)) })
sql.query("SELECT title, salary, name FROM roles INNER JOIN departments ON roles.department_id =departments.id", (err, results) => { console.log(cTable.getTable(results)) })
sql.query("SELECT * FROM departments", (err, results) => { console.log(cTable.getTable(results)) })
setTimeout(()=>{
    process.exit()
},1000)

