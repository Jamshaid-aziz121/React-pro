import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import Grid from "./Grid";

export default function CRUD() {
  const [formData, setFormData] = useState({
    uname: "",
    uphone: "",
    uemail: "",
    upassword: "",
    umessage: "",
    index: "",
  });

  const [userData, setUserData] = useState([]);
  const [deletedRecords, setDeletedRecords] = useState([]);

  const updatedRow = (indexNumber) => {
    // alert(indexNumber);
    let editRow = userData[indexNumber];
    // console.log("Update Row", editRow);
    debugger;
    editRow["index"] = indexNumber;
    // const updateData = { ...userData[indexNumber], index: indexNumber };
    // console.log(editRow);
    setFormData(editRow);
  };

  const redoRow = (index) => {
    alert(index);
    const reverseRow = deletedRecords.splice(index, 1);
    console.log(reverseRow);
    const oldRedoRows = [...userData, ...reverseRow];
    setUserData(oldRedoRows);
    setDeletedRecords(deletedRecords);
  };

  const deleteRow = (indexNumber) => {
    alert(indexNumber);
    const oldRecords = [...userData];
    const currentDeletedRow = oldRecords.splice(indexNumber, 1); // splice return the Deleted elements/ items
    // console.log(afterDeletedRow);
    setUserData(oldRecords);

    // show the delelted Data into the Table
    console.log(currentDeletedRow); // deleted rows
    const oldDeletedRows = [...deletedRecords, ...currentDeletedRow];
    console.log(oldDeletedRows);
    setDeletedRecords(oldDeletedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      upassword: formData.upassword,
      umessage: formData.umessage,
    };

    if (formData.index === "") {
      const checkFilter = userData.filter(
        (v, i) => v.uemail == formData.uemail || v.uphone == formData.uphone
      );

      if (checkFilter.length == 0) {
        const oldUserData = [...userData, currentUserFormData];

        console.log("current form Data", oldUserData);
        setUserData(oldUserData);
        setFormData({
          uname: "",
          uphone: "",
          uemail: "",
          upassword: "",
          umessage: "",
          index: "",
        });
      } else {
        alert("User email OR fone number is already exist");
        // console.log("User email OR fone number is already exist");
      }
    } else {
      // alert(formData.index);

      const checkFilter = userData.filter(
        (v, i) =>
          (v.uemail == formData.uemail || v.uphone == formData.uphone) &&
          formData.index !== i // leave the current form index
      );
      if (checkFilter.length === 0) {
        // I need to get data from formData
        // I need index of that row which need to udpate
        // set userData

        let editIndex = formData.index;
        let editOldRow = [...userData];
        editOldRow[editIndex] = { ...formData };
        setUserData(editOldRow);

        setFormData({
          uname: "",
          uphone: "",
          uemail: "",
          upassword: "",
          umessage: "",
          index: "",
        });
      } else {
        alert("email OR phone number already exist");
      }
    }
  };

  const getValue = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputValue = e.target.value;
    // console.log(inputValue);
    const oldData = { ...formData };
    oldData[inputName] = inputValue;
    // console.log(oldData);
    setFormData(oldData);
  };

  return (
    <div className="formHandling">
      <h2>CRUD-form Handling </h2>

      <Container fluid>
        <Container>
          <Row>
            <Form onSubmit={handleSubmit}>
              <div class="mb-3">
                <input
                  type="text"
                  name="uname"
                  onChange={getValue}
                  value={formData.uname}
                  class="form-control"
                  placeholder="name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  name="uemail"
                  onChange={getValue}
                  value={formData.uemail}
                  class="form-control"
                  placeholder="email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="uphone"
                  onChange={getValue}
                  value={formData.uphone}
                  class="form-control"
                  placeholder="phone number"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  name="upassword"
                  onChange={getValue}
                  value={formData.upassword}
                  class="form-control"
                  placeholder="password"
                />
              </div>
              <div class="mb-3">
                <textarea
                  name="umessage"
                  onChange={getValue}
                  value={formData.umessage}
                  class="form-control"
                  placeholder="Text Area"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                {formData.index === "" ? "save" : "update"}
              </button>
            </Form>
          </Row>

          <Row>
            <h3> Received form Data</h3>
            <Table striped bordered hover size="sm">
              <thead>
                {userData.length}
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone # </th>
                  <th>password</th>
                  <th>Message </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <Grid
                  records={userData}
                  showBtn={true}
                  deleteRow={deleteRow}
                  updatedRow={updatedRow}
                />
              </tbody>
            </Table>
          </Row>

          <Row>
            <h3>Deleted Records</h3>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone # </th>
                  <th>password</th>
                  <th>Message </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <Grid
                  records={deletedRecords}
                  showBtn={false}
                  redoRow={redoRow}
                />
              </tbody>
            </Table>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
