import React from "react";

function MenuTableData(data) {
    return (
        <div className="table">
            <tr>
                <td >{data.row.name}</td>
                <td >{data.row.stock}</td>
                <td >${data.row.price}</td>
            </tr>
        </div>
    )
}

export default MenuTableData;