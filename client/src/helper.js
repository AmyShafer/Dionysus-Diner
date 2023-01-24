

class APIHelper {
    // api calls for all post methods
    addNew(e, table, departmentFormState, employeeFormState, roleFormState, menuFormState) {
        if (table === "dept") {
            e.preventDefault()
            let dept = departmentFormState.department
            console.log(dept)
            addDepartmentTable(dept)
            function addDepartmentTable(dept) {
                async function addDeptData(dept) {
                    try {
                        let data = await fetch(`http://localhost:3001/api/diner/AddDepartments`, {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ dept: dept })
                        }
                        )
                        return data.json()
                    } catch {
                        console.log("data failed to update department")
                    }
                }
                addDeptData(dept)
                    .catch((err) => console.log(err));
                window.location.assign('/')
            }
        }
        else if (table === "employee") {
            e.preventDefault()
            let first = employeeFormState.firstName
            let last = employeeFormState.lastName
            let roleId = employeeFormState.roleId
            let managerId = employeeFormState.managerId
            addEmployeeTable(first, last, roleId, managerId)
            function addEmployeeTable(first, last, roleId, managerId) {
                async function addEmployeeData(first, last, roleId, managerId) {
                    try {
                        let data = await fetch(`http://localhost:3001/api/diner/AddEmployees`, {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ first: first, last: last, roleId: roleId, managerId: managerId })
                        }
                        )
                        return data.json()
                    } catch {
                        console.log("data failed to update employees")
                    }
                }
                addEmployeeData(first, last, roleId, managerId)
                    .catch((err) => console.log(err));
                window.location.assign('/')
            }
        }
        else if (table === "role") {
            e.preventDefault()
            let title = roleFormState.title
            let salary = roleFormState.salary
            let deptId = roleFormState.deptId
            addRoleTable(title, salary, deptId)
            function addRoleTable(title, salary, deptId) {
                async function addRoleData(title, salary, deptId) {
                    try {
                        let data = await fetch(`http://localhost:3001/api/diner/AddRoles`, {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ title: title, salary: salary, deptId: deptId })
                        }
                        )
                        return data.json()
                    } catch {
                        console.log("data failed to update roles")
                    }
                }
                addRoleData(title, salary, deptId)
                    .catch((err) => console.log(err));
                window.location.assign('/')
            }
        }
        else if (table === "item") {
            e.preventDefault()
            let id = menuFormState.id
            let name = menuFormState.name
            let stock = menuFormState.stock
            let price = menuFormState.price
            addMenuTable(name, stock, price, id)
            function addMenuTable(name, stock, price, id) {
                async function addMenuData(name, stock, price, id) {
                    try {
                        let data = await fetch(`http://localhost:3001/api/diner/AddItems`, {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ name: name, stock: stock, price: price, id: id })
                        }
                        )
                        return data.json()
                    } catch {
                        console.log("data failed to update menu")
                    }
                }
                addMenuData(name, stock, price, id)
                    .catch((err) => console.log(err));
                window.location.assign('/')
            }
        }
    }
    // api calls for all update methods
    editFormSubmit(e, table, departmentFormState, employeeFormState, roleFormState, menuFormState) {
        if (table === "dept") {
            e.preventDefault()
            let id = departmentFormState.id
            let dept = departmentFormState.department
            editDepartmentTable(id, dept)
            function editDepartmentTable(id, dept) {
                async function editDeptData(id, dept) {
                    try {
                        let data = await fetch(`http://localhost:3001/api/diner/departments`, {
                            method: "PUT",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ id: id, dept: dept })
                        }
                        )
                        return data.json()
                    } catch {
                        console.log("data failed to update department")
                    }
                }
                editDeptData(id, dept)
                    .catch((err) => console.log(err));
                alert(`The selected department has been updated to ${dept}.`)
                window.location.assign('/')
            }
        }
        else if (table === "employee") {
            e.preventDefault()
            let id = employeeFormState.id
            let first = employeeFormState.firstName
            let last = employeeFormState.lastName
            let roleId = employeeFormState.roleId
            let managerId = employeeFormState.managerId
            editEmployeeTable(id, first, last, roleId, managerId) 
            function editEmployeeTable(id, first, last, roleId, managerId) {
                async function editEmployeeData(id, first, last, roleId, managerId) {
                    try {
                        let data = await fetch(`http://localhost:3001/api/diner/employees`, {
                            method: "PUT",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ id: id, first: first, last: last, roleId: roleId, managerId: managerId })
                        }
                        )
                        return data.json()
                    } catch {
                        console.log("data failed to update employee");
                    }
                }
                editEmployeeData(id, first, last, roleId, managerId)
                    .catch((err) => console.log(err));
                alert('The selected employee has been updated.')    
                window.location.assign('/')
            }
        }
        else if (table === "role") {
            e.preventDefault()
            let id = roleFormState.id
            let title = roleFormState.title
            let salary = roleFormState.salary
            let deptId = roleFormState.deptId
            editRoleTable(id, title, salary, deptId)
            function editRoleTable(id, title, salary, deptId) {
                async function editRoleData(id, title, salary, deptId) {
                    try {
                        let data = await fetch(`http://localhost:3001/api/diner/roles`, {
                            method: "PUT",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ id: id, title: title, salary: salary, deptId: deptId })
                        }
                        )
                        return data.json()
                    } catch {
                        console.log("data failed to update roles")
                    }
                }
                editRoleData(id, title, salary, deptId)
                    .catch((err) => console.log(err));
                alert(`The selected role has been updated.`)
                window.location.assign('/')
            }
        }
        else if (table === "item") {
            e.preventDefault()
            let id = menuFormState.id
            let name = menuFormState.name
            let stock = menuFormState.stock
            let price = menuFormState.price
            editMenuTable(id, name, stock, price)
            function editMenuTable(id, name, stock, price) {
                async function editMenuData(id, name, stock, price) {
                    try {
                        let data = await fetch(`http://localhost:3001/api/diner/menu`, {
                            method: "PUT",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ id: id, name: name, stock: stock, price: price })
                        }
                        )
                        return data.json()
                    } catch {
                        console.log("data failed to update menu")
                    }
                }
                editMenuData(id, name, stock, price)
                    .catch((err) => console.log(err));
                alert(`The selected menu item has been updated.`)
                window.location.assign('/')
            }
        }
    }

    // sets table headers
    tableHeader(type) {
        if (type === "departments") {
            return (
                <div className='table-row'>
                    <tr>
                        <td>Id</td>
                        <td>Department</td>
                    </tr>
                </div>
            )
        }
        else if (type === "employees") {
            return (
                <div className='table-row'>
                    <tr>
                        <td>id</td>
                        <td>First Name </td>
                        <td>Last Name </td>
                        <td>Title</td>
                        <td>Manager id</td>
                        <td>Delete</td>
                    </tr>
                </div>
            )
        }
        else if (type === "roles") {
            return (
                <div className='table-row'>
                    <tr>
                        <td>id</td>
                        <td>Title</td>
                        <td>Salary</td>
                        <td>Department</td>
                    </tr>
                </div>
            )
        }
    }
}

export default new APIHelper();
