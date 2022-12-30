import React from "react";

function MenuTableData(data) {
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
    return (
        <div className="table-row">
            <tr>
                <td>{data.row.id}</td>
                <td >{data.row.name}</td>
                <td >{data.row.stock}</td>
                <td >${data.row.price}</td>
                <td><button onClick={() => { deleteEntry(data.row.id, "item") }} className="delete delete-button">x</button> </td>
            </tr>
        </div>
    )
}

export default MenuTableData;