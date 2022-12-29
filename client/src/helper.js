

class APIHealper {
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
                        console.log("data failed to update employees")
                    }
                }
                editEmployeeData(id, first, last, roleId, managerId)
                    .catch((err) => console.log(err));
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
export default new APIHealper();
