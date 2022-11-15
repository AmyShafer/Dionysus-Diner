import React from "react";

function TableData(data) {
    let dataType = data.type
    if (dataType === "departments") {
        return (
            <>
                <tr>
                    <td >{data.row.id}</td>
                    <td >{data.row.name}</td>
                </tr>
            </>
        )
    }
    else if (dataType === "employees") {
        return (
            <>
                <tr>
                    <td >{data.row.first_name}</td>
                    <td >{data.row.last_name}</td>
                    <td >{data.row.title}</td>
                    <td >{data.row.manager_id}</td>
                </tr>
            </>
        )
    }
    else if (dataType === "roles"){
        return(
            <>
                <tr>
                    <td >{data.row.title}</td>
                    <td >{data.row.salary}</td>
                    <td >{data.row.name}</td>
                </tr>
            </>
        )
    }

}

export default TableData;