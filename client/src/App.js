import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import TableData from './components/tableData'

function App() {
  const [data, setData] = useState('')
  const [type, setType] = useState('')
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
  }
  
  function tableHeader(){
    if(type === "departments"){
      return(
        <tr>
          <td>Id</td>
          <td>Department</td>
        </tr>
      )
    }
    else if(type === "employees"){
      return(
        <tr>
          <td>First Name </td>
          <td>Last Name </td>
          <td>Title</td>
          <td>Manager id</td>
        </tr>
      )
    }
    else if(type === "roles"){
      return(
        <tr>
          <td>Title</td>
          <td>Salary</td>
          <td>Department</td>
        </tr>
      )
    }
  }

  return (
    <div>
      <h1>Select Data to View</h1>
      <button onClick={() => getData("departments")}>Departments</button>
      <button onClick={() => getData("employees")}>Employees</button>
      <button onClick={() => getData("roles")}>Roles</button>
      {data !== '' ?
        <>
          {tableHeader()}
          {data.map((row) => (
            <TableData row={row} key={Math.random() + 1} type={type} />
          ))}
        </>
        : ''}
    </div>
  );
}

export default App;
