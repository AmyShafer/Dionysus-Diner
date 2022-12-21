import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import TableData from './components/tableData'

function App() {
  const [data, setData] = useState('')
  const [type, setType] = useState('')
  const [inputStyle, setInputStyle] = useState({ display: 'none' })
  const [inverseInputStyle, setInverseInputStyle] = useState({ display: 'unset' })
  const [optionSelect, setOptionSelect] = useState('')

  function editFieldData(table){
    if(table==="departments"){
      return(
        <div>
        <form>
          <input defaultValue="ID"></input>
          <input defaultValue="Department Name"></input>
          <button type='submit'>Submit Edit</button>
        </form>
        </div>
      )
    }
    if(table==="employees"){
      return(
        <div>
        <form>
          <input defaultValue="ID"></input>
          <input defaultValue="First name"></input>
          <input defaultValue="Last name"></input>
          <input defaultValue="Roll ID"></input>
          <input defaultValue="Manager ID"></input>
          <button type='submit' onSubmit={()=>{console.log("")}}>Submit Edit</button>
        </form>
        </div>
      )
    }
    if(table==="roles"){
      return(
        <div>
        <form>
          <input defaultValue="ID"></input>
          <input defaultValue="Title"></input>
          <input defaultValue="Salary (number only)"></input>
          <input defaultValue="Department ID"></input>
          <button type='submit' onSubmit={()=>{console.log("")}}>Submit Edit</button>
        </form>
        </div>
      )
    }
    if(table==="menu"){
      return(
        <div>
        <form>
          <input defaultValue="ID"></input>
          <input defaultValue="Name"></input>
          <input defaultValue="Stock"></input>
          <input defaultValue="Price"></input>
          <button type='submit' onSubmit={()=>{console.log("")}}>Submit Edit</button>
        </form>
        </div>
      )
    }
  }
  function readSelect(e){
    setOptionSelect(e.target.value)
  }

  function editVisibility(dataType) {
    if ((dataType!=="departments"&& dataType!=="roles" && dataType!=="employees" && dataType!=="menu") &&inputStyle["display"] === 'none') {
        setInputStyle({ display: 'unset' })
    } else {
        setInputStyle({ display: 'none' })
    }
    if (inverseInputStyle["display"] === 'none') {
      setInverseInputStyle({ display: 'unset' })
  } else if((dataType!=="departments"&& dataType!=="roles" && dataType!=="employees" && dataType!=="menu") &&inverseInputStyle["display"] === 'unset') {
      setInverseInputStyle({ display: 'none' })
  }
}
function editData(){
  editVisibility()
}
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
    
    console.log(data)
    editVisibility(dataType)
  }

  function tableHeader() {
    if (type === "departments") {
      return (
        <div className='table'>
          <tr>
            <td>Id</td>
            <td>Department</td>
          </tr>
        </div>
      )
    }
    else if (type === "employees") {
      return (
        <div className='table'>
          <tr>
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
        <div className='table'>
          <tr>
            <td>Title</td>
            <td>Salary</td>
            <td>Department</td>
          </tr>
        </div>
      )
    }
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
      <button onClick={() => editData()}>Edit Food Items</button>
      
      {data !== '' ?
        <div style={inverseInputStyle}>
          {tableHeader()}
          {data.map((row) => (
            <TableData row={row} key={Math.random() + 1} type={type} />
            ))}
        </div>
        : ''}
    </div>
      {/* editmenu */}
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
