import React, { useState } from "react";
import MenuTableData from "./menuTableData";
import Table from "react-bootstrap/Table"
import "bootstrap/dist/css/bootstrap.min.css"


function TableData(data) {
    let dataType = data.type
    const [menuData, setMenuData] = useState()
    function getMenuData(category) {
        let category_id = {
            "Appetizers": 1,
            "Main Courses": 2,
            "Dessert": 3,
            "Alcohol": 4
        }
        async function fetchMenuData() {
            try {
                let data = await fetch(`http://localhost:3001/api/diner/menuItem/${category_id[category]}`,);
                return data
            } catch {
                console.log("data failed to load")
            }
        }
        fetchMenuData()
            .then((res) => res.json())
            .then((data) => setMenuData(data))
            .catch((err) => console.log(err));
    }
    function deleteEntry(id, table) {
        async function deleteEntryData(id, table) {
            try {
                let data = await fetch(`http://localhost:3001/api/diner/delete`, {
                    method: "DELETE",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ id: id, table: table })
                }
                )
                return data.json()
            } catch {
                console.log("data failed to delete")
            }
        }
        deleteEntryData(id, table)
            .catch((err) => console.log(err));
        window.location.assign('/')
    }
    if (dataType === "departments") {
        return (
            <div className="table-row">
                <tr>
                    <td >{data.row.id}</td>
                    <td >{data.row.name}</td>
                </tr>
            </div>
        )
    }
    else if (dataType === "employees") {
        return (
            <>
                <div className="table-row">
                    <tr>
                        <td>{data.row.id}</td>
                        <td >{data.row.first_name}</td>
                        <td >{data.row.last_name}</td>
                        <td >{data.row.title}</td>
                        <td >{data.row.manager_id}</td>
                        <td><button type="submit" onClick={() => { deleteEntry(data.row.id, dataType) }} className="delete delete-button">x</button> </td>
                    </tr>
                </div>

            </>
        )
    }
    else if (dataType === "roles") {
        return (
            <div className="table-row">
                <tr>
                    <td>{data.row.id}</td>
                    <td >{data.row.title}</td>
                    <td >${data.row.salary}</td>
                    <td >{data.row.name}</td>
                </tr>
            </div>
        )
    }
    else if (dataType === "menu") {
        return (
            <>
                <div className="table-buttons">
                    <tr >
                        <td ><button className="menu-buttons" onClick={() => getMenuData(data.row.food_item)}>{data.row.food_item}</button></td>
                    </tr>
                </div>
                {menuData ?
                    <>
                        <Table className='table table-striped-columns'>
                            <div className="table-row">
                                <tr>
                                    <td>id</td>
                                    <td>Name </td>
                                    <td>Stock </td>
                                    <td>Price</td>
                                    <td>Delete</td>
                                </tr>
                            </div>
                        <>
                            {menuData.map((row) => (
                                <MenuTableData row={row} key={Math.random() + 1} />
                            ))}
                        </>
                        </Table>
                    </>
                    : ''}
            </>
        )
    }

}

export default TableData;