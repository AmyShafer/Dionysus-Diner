import './App.css';
import { useState } from 'react';
import TableData from './components/tableData'
import APIHelper from './helper'

function App() {
  const [departmentFormState, setDepartmentFormState] = useState({ id: '', department: '' });
  const [employeeFormState, setEmployeeFormState] = useState({ id: '', firstName: '', lastName:'',roleId:'',managerId:'' });
  const [roleFormState, setRoleFormState]=useState({id:'', title:'',salary:'',deptId:''})
  const [menuFormState, setMenuFormState]=useState({id:'', name:'', stock:'',price:''})
  const [data, setData] = useState('')
  const [type, setType] = useState('')
  const [inputStyle, setInputStyle] = useState({ display: 'none' })
  const [inverseInputStyle, setInverseInputStyle] = useState({ display: 'unset' })
  const [optionSelect, setOptionSelect] = useState('')

  // html for edit forms
  function editFieldData(table) {
    if (table === "departments") {
      return (
        <div>
          <form>
            <input onChange={handleDepartmentChange} id="id" type="number" name="id" placeholder='id' />
            <input onChange={handleDepartmentChange} id="department" type="text" name="department" placeholder="Department Name" />
            <button type='button' onClick={(e)=>APIHelper.editFormSubmit(e,"dept",departmentFormState,"","","")}>Submit Edit</button>
          </form>
        </div>
      )
    }
    if (table === "employees") {
      return (
        <div>
          <form>
            <input onChange={handleEmployeeChange} id="id" type="number" name="id" placeholder="ID"/>
            <input onChange={handleEmployeeChange} id="firstName" type="text" name="firstName" placeholder="First name"/>
            <input onChange={handleEmployeeChange} id="lastName" type="text" name="lastName" placeholder="Last name"/>
            <input onChange={handleEmployeeChange} id="roleId" type="number" name="roleId" placeholder="Role ID"/>
            <input onChange={handleEmployeeChange} id="managerId" type="number" name="managerId" placeholder="Manager ID"/>
            <button type='button' onClick={(e)=>APIHelper.editFormSubmit(e,"employee","",employeeFormState,"","")}>Submit Edit</button>
          </form>
        </div>
      )
    }
    if (table === "roles") {
      return (
        <div>
          <form>
            <input onChange={handleRoleChange} id="id" type="number" name="id" placeholder="ID"></input>
            <input onChange={handleRoleChange} id="title" type="text" name="title" placeholder="Title"></input>
            <input onChange={handleRoleChange} id="salary" type="number" name="salary" placeholder="Salary (number only)"></input>
            <input onChange={handleRoleChange} id="deptId" type="number" name="deptId" placeholder="Department ID"></input>
            <button type='submit' onClick={(e) => APIHelper.editFormSubmit(e,"role","","",roleFormState,"")}>Submit Edit</button>
          </form>
        </div>
      )
    }
    if (table === "item") {
      return (
        <div>
          <form>
            <input onChange={handleMenuChange} id="id" type="number" name="id" placeholder="ID"/>
            <input onChange={handleMenuChange} id="name" type="text" name="name" placeholder="Name"/>
            <input onChange={handleMenuChange} id="stock" type="number" name="stock" placeholder="Stock"/>
            <input onChange={handleMenuChange} id="price" type="number" name="price" placeholder="Price"/>
            <button type='button' onClick={(e) => APIHelper.editFormSubmit(e,"item","","","",menuFormState) }>Submit Edit</button>
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
  const handleRoleChange = (event)=>{
    const { name, value } = event.target;
    setRoleFormState({
      ...roleFormState,
      [name]: value,
    });
  };
  // sets field data from user input
  const handleMenuChange = (event)=>{
    const { name, value } = event.target;
    setMenuFormState({
      ...menuFormState,
      [name]: value,
    });
  };

  //reads current selection from option menu
  function readSelect(e) {
    setOptionSelect(e.target.value)
  }

  // hides tables or option menu
  function editVisibility(dataType) {
    if ((dataType !== "departments" && dataType !== "roles" && dataType !== "employees" && dataType !== "menu") && inputStyle["display"] === 'none') {
      setInputStyle({ display: 'unset' })
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
    async function fetchData() {
      try {
        setType(dataType)
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

    editVisibility(dataType)
  }

  return (
    <>
      <div>
        <h1>Dionysus Diner DB</h1>
        <h2>Select Data to View</h2>
        <button onClick={() => getData("departments")}>Departments</button>
        <button onClick={() => getData("employees")}>Employees</button>
        <button onClick={() => getData("roles")}>Roles</button>
        <button onClick={() => getData("menu")}>Menu</button>
        <button onClick={() => editVisibility("editMenu")}>Edit Food Items</button>
        {/* table display */}
        {data !== '' ?
          <div style={inverseInputStyle}>
            {APIHelper.tableHeader(type)}
            {data.map((row) => (
              <TableData row={row} key={Math.random() + 1} type={type} />
            ))}
          </div>
          : ''}
      </div>
      {/* edit option dropdown menu */}
      <div style={inputStyle}>
        <select onChange={readSelect} id="db" name="db-tables">
          <option value="">--select option--</option>
          <option value="departments">departments</option>
          <option value="employees">employees</option>
          <option value="roles">roles</option>
          <option value="item">menu</option>
        </select>
        {editFieldData(optionSelect)}

      </div>
    </>
  );
}

export default App;
