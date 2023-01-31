import './App.css';
import { useState } from 'react';
import TableData from './components/tableData'
import APIHelper from './helper'
import Table from "react-bootstrap/Table"
import Select from "react-bootstrap/FormSelect"
import Nav from "react-bootstrap/Nav"
import Accordion from "react-bootstrap/Accordion"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [departmentFormState, setDepartmentFormState] = useState({ id: '', department: '' });
  const [employeeFormState, setEmployeeFormState] = useState({ id: '', firstName: '', lastName: '', roleId: '', managerId: '' });
  const [roleFormState, setRoleFormState] = useState({ id: '', title: '', salary: '', deptId: '' })
  const [menuFormState, setMenuFormState] = useState({ id: '', name: '', stock: '', price: '' })
  const [data, setData] = useState('')
  const [type, setType] = useState('')
  const [inputStyle, setInputStyle] = useState({ display: 'none' })
  const [inverseInputStyle, setInverseInputStyle] = useState({ display: 'unset' })
  const [optionSelect, setOptionSelect] = useState('')
  const [tabTitle, setTabTitle] = useState('')

  // html for edit forms
  function editFieldData(table) {
    if (table === "departments") {
      return (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Department ID</label>
              <input className="form-control" onChange={handleDepartmentChange} id="id" type="number" name="id" placeholder='id' />
              <label className="form-label">Department Name</label>
              <input className="form-control" onChange={handleDepartmentChange} id="department" type="text" name="department" placeholder="Department Name" />
              <button className='menu-buttons submit-btn' type='submit' onClick={(e) => APIHelper.editFormSubmit(e, "dept", departmentFormState, "", "", "")}>Submit Edit</button>
            </div>
          </form>
        </div>
      )
    }
    if (table === "employees") {
      return (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Employee ID</label>
              <input className="form-control" onChange={handleEmployeeChange} id="id" type="number" name="id" placeholder="ID" />
              <label className="form-label">First Name</label>
              <input className="form-control" onChange={handleEmployeeChange} id="firstName" type="text" name="firstName" placeholder="First name" />
              <label className="form-label">Last Name</label>
              <input className="form-control" onChange={handleEmployeeChange} id="lastName" type="text" name="lastName" placeholder="Last name" />
              <label className="form-label">Role ID</label>
              <input className="form-control" onChange={handleEmployeeChange} id="roleId" type="number" name="roleId" placeholder="Role ID" />
              <label className="form-label">Manager ID</label>
              <input className="form-control" onChange={handleEmployeeChange} id="managerId" type="number" name="managerId" placeholder="Manager ID" />
              <button className='menu-buttons submit-btn' type='button' onClick={(e) => APIHelper.editFormSubmit(e, "employee", "", employeeFormState, "", "")}>Submit Edit</button>
            </div>
          </form>
        </div>
      )
    }
    if (table === "roles") {
      return (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Role ID</label>
              <input className="form-control" onChange={handleRoleChange} id="id" type="number" name="id" placeholder="ID"></input>
              <label className="form-label">Title</label>
              <input className="form-control" onChange={handleRoleChange} id="title" type="text" name="title" placeholder="Title"></input>
              <label className="form-label">Salary</label>
              <input className="form-control" onChange={handleRoleChange} id="salary" type="number" name="salary" placeholder="Salary (number only)"></input>
              <label className="form-label">Department ID</label>
              <input className="form-control" onChange={handleRoleChange} id="deptId" type="number" name="deptId" placeholder="Department ID"></input>
              <button className='menu-buttons submit-btn' type='submit' onClick={(e) => APIHelper.editFormSubmit(e, "role", "", "", roleFormState, "")}>Submit Edit</button>
            </div>
          </form>
        </div>
      )
    }
    if (table === "item") {
      return (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Menu Item ID</label>
              <input className="form-control" onChange={handleMenuChange} id="id" type="number" name="id" placeholder="ID" />
              <label className="form-label">Item Name</label>
              <input className="form-control" onChange={handleMenuChange} id="name" type="text" name="name" placeholder="Name" />
              <label className="form-label">Stock Count</label>
              <input className="form-control" onChange={handleMenuChange} id="stock" type="number" name="stock" placeholder="Stock" />
              <label className="form-label">Item Price</label>
              <input className="form-control" onChange={handleMenuChange} id="price" type="number" name="price" placeholder="Price" />
              <button className='menu-buttons submit-btn' type='button' onClick={(e) => APIHelper.editFormSubmit(e, "item", "", "", "", menuFormState)}>Submit Edit</button>
            </div>
          </form>
        </div>
      )
    }
  }

  // sets field data from user input
  const handleDepartmentChange = (event) => {
    const { name, value } = event.target;
    setDepartmentFormState({
      ...departmentFormState,
      [name]: value,
    });
  };
  // sets field data from user input
  const handleEmployeeChange = (event) => {
    const { name, value } = event.target;
    setEmployeeFormState({
      ...employeeFormState,
      [name]: value,
    });
  };
  // sets field data from user input
  const handleRoleChange = (event) => {
    const { name, value } = event.target;
    setRoleFormState({
      ...roleFormState,
      [name]: value,
    });
  };
  // sets field data from user input
  const handleMenuChange = (event) => {
    const { name, value } = event.target;
    setMenuFormState({
      ...menuFormState,
      [name]: value,
    });
  };

  // html for adding data
  function addNewData(table) {
    if (table === "departments") {
      return (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Department Name</label>
              <input className="form-control" onChange={addNewDepartment} id="department" type="text" name="department" placeholder="Department Name" />
              <button className='menu-buttons submit-btn' type='submit' onClick={(e) => APIHelper.addNew(e, "dept", departmentFormState, "", "", "")}>Add Item</button>
            </div>
          </form>
        </div>
      )
    }
    if (table === "employees") {
      return (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input className="form-control" onChange={addNewEmployee} id="firstName" type="text" name="firstName" placeholder="First name" />
              <label className="form-label">Last Name</label>
              <input className="form-control" onChange={addNewEmployee} id="lastName" type="text" name="lastName" placeholder="Last name" />
              <label className="form-label">Role ID</label>
              <input className="form-control" onChange={addNewEmployee} id="roleId" type="number" min="1" max="15" name="roleId" placeholder="Role ID" />
              <label className="form-label">Manager ID</label>
              <input className="form-control" onChange={addNewEmployee} id="managerId" type="number" min="1" max="30" name="managerId" placeholder="Manager ID" />
              <button className='menu-buttons submit-btn' type='button' onClick={(e) => APIHelper.addNew(e, "employee", "", employeeFormState, "", "")}>Add Item</button>
            </div>
          </form>
        </div>
      )
    }
    if (table === "roles") {
      return (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input className="form-control" onChange={addNewRole} id="title" type="text" name="title" placeholder="Title"></input>
              <label className="form-label">Salary</label>
              <input className="form-control" onChange={addNewRole} id="salary" type="number" name="salary" placeholder="Salary (number only)"></input>
              <label className="form-label">Department ID</label>
              <input className="form-control" onChange={addNewRole} id="deptId" type="number" min="1" max="3" name="deptId" placeholder="Department ID"></input>
              <button className='menu-buttons submit-btn' type='submit' onClick={(e) => APIHelper.addNew(e, "role", "", "", roleFormState, "")}>Add Item</button>
            </div>
          </form>
        </div>
      )
    }
    if (table === "menu") {
      return (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Food Item Name</label>
              <input className="form-control" onChange={addNewMenuItem} id="name" type="text" name="name" placeholder="Name" />
              <label className="form-label">Stock Count</label>
              <input className="form-control" onChange={addNewMenuItem} id="stock" type="number" name="stock" placeholder="Stock" />
              <label className="form-label">Item Price</label>
              <input className="form-control" onChange={addNewMenuItem} id="price" type="number" name="price" placeholder="Price" />
              <label className="form-label">Menu Item ID Category</label>
              <input className="form-control" onChange={addNewMenuItem} id="id" type="number" min="1" max="4" name="id" placeholder="1 : Appetizers, 2 : Main Course, 3 : Dessert, 4 : Alcohol" />
              <button className='menu-buttons submit-btn' type='button' onClick={(e) => APIHelper.addNew(e, "item", "", "", "", menuFormState)}>Add Item</button>
            </div>
          </form>
        </div>
      )
    }
  }
  
  // creates a new department
  const addNewDepartment = (event) => {
    const { name, value } = event.target;
    setDepartmentFormState({
      ...departmentFormState,
      [name]: value,
    });
  };
  // creates a new Employee
  const addNewEmployee = (event) => {
    const { name, value } = event.target;
    setEmployeeFormState({
      ...employeeFormState,
      [name]: value,
    });
  };
  // creates a new role
  const addNewRole = (event) => {
    const { name, value } = event.target;
    setRoleFormState({
      ...roleFormState,
      [name]: value,
    });
  };
  // creates a new menu item
  const addNewMenuItem = (event) => {
    const { name, value } = event.target;
    setMenuFormState({
      ...menuFormState,
      [name]: value,
    });
  };

  // creates a new employee
  function readSelect(e) {
    setOptionSelect(e.target.value)
  }

  // hides tables or option menu
  function editVisibility(dataType) {
    if ((dataType !== "departments" && dataType !== "roles" && dataType !== "employees" && dataType !== "menu") && inputStyle["display"] === 'none') {
      setInputStyle({ display: 'unset' })
      setTabTitle('Edit Items')
    } else {
      setInputStyle({ display: 'none' })
    }
    if (inverseInputStyle["display"] === 'none') {
      setInverseInputStyle({ display: 'unset' })
    } else if ((dataType !== "departments" && dataType !== "roles" && dataType !== "employees" && dataType !== "menu") && inverseInputStyle["display"] === 'unset') {
      setInverseInputStyle({ display: 'none' })
    }
  }

  //gets table data
  const getData = (dataType) => {
    setType(dataType)
    async function fetchData() {
      try {
        let data = await fetch(`http://localhost:3001/api/diner/${dataType}`);
        return data
      } catch {
        console.log("data failed to load")
      }
    }
    fetchData()
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
    console.log(data)

    editVisibility(dataType)
    switch (dataType) {
      case ("departments"):
        setTabTitle("Departments");
        break;
      case ("employees"):
        setTabTitle("Employees");
        break;
      case ("roles"):
        setTabTitle("Roles");
        break;
      case ("menu"):
        setTabTitle("Menu Items");
        break;
      default:
        setType('');
        break;
    }
  }

  return (
    <>
      <div>
        <h1>Dionysus Diner DB</h1>
        <h2>Select Data to View</h2>
        <Nav className="navbar  bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="navBar container-fluid">
            <ul className="navBar navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#departments" className="nav-link text-white" onClick={() => getData("departments")}>Departments</a>
              </li>
              <li className="nav-item">
                <a href="#employees" className="nav-link text-white" onClick={() => getData("employees")}>Employees</a>
              </li>
              <li className="nav-item">
                <a href="#roles" className="nav-link text-white" onClick={() => getData("roles")}>Roles</a>
              </li>
              <li className="nav-item">
                <a href="#menu" className="nav-link text-white" onClick={() => getData("menu")}>Menu</a>
              </li>
              <li className="nav-item">
                <a href="#edit" className="nav-link text-white" onClick={() => editVisibility("editMenu")}>Edit Items</a>
              </li>
            </ul>
          </div>
        </Nav>
        {/* table display */}
        {data !== '' ?
          <div className='table-container'>
            <h2>{tabTitle}</h2>
            <Table className='table table-striped-columns' style={inverseInputStyle}>
              {APIHelper.tableHeader(type)}
              {data.map((row) => (
                <TableData row={row} key={Math.random() + 1} type={type} />
              ))}
              {/* add item form display with accordion styling */}
              <Accordion className="accordion-style accordion-header">
                <Accordion.Item className="accordion-header" eventKey="0">
                  <Accordion.Header className="accordion-header">Add Item to Table</Accordion.Header>
                  <Accordion.Body className="accordion-header">
                    {addNewData(type)}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Table>
          </div>
          : ''}
      </div>
      {/* edit option dropdown menu */}
      <div style={inputStyle}>

        <Select className="select form-select" onChange={readSelect} id="db" name="db-tables">
          <option value="">--select option--</option>
          <option value="departments">departments</option>
          <option value="employees">employees</option>
          <option value="roles">roles</option>
          <option value="item">menu</option>
        </Select>
        <div className="edit-form-container">
          {editFieldData(optionSelect)}
        </div>
      </div>
    </>
  );
}

export default App;
