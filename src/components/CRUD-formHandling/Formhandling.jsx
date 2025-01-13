import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

export default function Formhandling() {
  const [deletedRecords, setDeletedRedords] = useState([]);

  const [formData, setFormData] = useState({
    uname: "",
    uphone: "",
    uemail: "",
    upassword: "",
    umessage: "",
    index: "",
  });

  const [userData, setUserData] = useState([]);

  const deleteRow = (indexNumber) => {
    alert(indexNumber);
    const oldRecords = [...userData];
    const currentDeletedRow = oldRecords.splice(indexNumber, 1); // splice return the Deleted elements/ items
    // console.log(afterDeletedRow);
    setUserData(oldRecords);

    // show the delelted Data into the Table
    console.log(currentDeletedRow); // deleted rows
    const oldDeletedRows = [...deletedRecords, ...currentDeletedRow ];
    console.log(oldDeletedRows);
    setDeletedRedords(oldDeletedRows);
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
    const checkFilter = userData.filter(
      (v, i) => v.uemail == formData.uemail || v.uphone == formData.uphone
    );

    if (checkFilter.length == "") {
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
      <h2>CRUD- form Handling </h2>

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
                {formData.index == "" ? "save" : "update"}
              </button>
            </Form>
          </Row>

          <Row>
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
                {userData.map((v, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{v.uname}</td>
                      <td>{v.uemail}</td>
                      <td>{v.uphone}</td>
                      <td>{v.upassword}</td>
                      <td>{v.umessage}</td>
                      <td>
                        <button
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            padding: "3px",
                            margin: "5px",

                            borderRadius: "5px",
                          }}
                          onClick={() => deleteRow(index)}
                        >
                          delete
                        </button>
                        <button
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
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>

          <Row>
            <h5>Deleted Records</h5>
            <Table className="striped bordered hover" size="sm">
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
                {deletedRecords.map((del, indx) => {
                  return (
                    <tr key={indx}>
                      <td>{indx + 1}</td>
                      <td>{del.uname}</td>
                      <td>{del.uemail}</td>
                      <td>{del.uphone}</td>
                      <td>{del.upassword}</td>
                      <td>{del.umessage}</td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
