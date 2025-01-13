import "./show.css";

import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

export default function ShowHidePassword() {
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  return (
    <Container fluid>
      <Container>
        <h1>Show and Hide Passwords</h1>
        <div className="showHide">
          <input
            className=" py-2 px-5 m-3"
            type={pstatus ? "text" : "password"}
          />

          <Button onClick={() => setPstatus(!pstatus)}>
            {pstatus ? "hide" : "show"}
          </Button>
        </div>
        <Container>
          <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Our Courses</li>
              <li>Gallery</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="bttn">
            <Button onClick={() => setMenuStatus(!menuStatus)}>
              {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
            </Button>
          </div>
        </Container>
      </Container>
    </Container>
  );
}
