import React from "react";

export default function Grid({
  records,
  showBtn,
  deleteRow,
  redoRow,
  updatedRow,
}) {
  // const rowReverse = (index) => {
  //   alert(index);
  //   const redoRow = records.filter((i) => i == index);
  //   console.log(redoRow);
  //   setUserData(redoRow);
  // };
  return records.map((user, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{user.uname}</td>
        <td>{user.uemail}</td>
        <td>{user.uphone}</td>
        <td>{user.upassword}</td>
        <td>{user.umessage}</td>
        <td>
          {showBtn ? (
            <>
              <button
                onClick={() => deleteRow(index)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "3px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
              >
                delete
              </button>
              <button
                onClick={() => updatedRow(index)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "3px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
              >
                update
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => redoRow(index)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "3px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
              >
                redo
              </button>
            </>
          )}
        </td>
      </tr>
    );
  });
}
