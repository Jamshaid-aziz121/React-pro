import React, { useState } from "react";
import "../Modal/modal.css";
import { Button } from "react-bootstrap";

export default function Modal() {
  let [modalStatus, setModalStatus] = useState(false);
  return (
    <div className="modalApp">
      <h2 id="heading2">Show Modal</h2>
      <div>
        <div className={`overLay ${modalStatus ? "showModal" : ""}`}></div>
        <div className={`enquiryModal ${modalStatus ? "showModal" : ""}`}>
          <h2 id="heading2">Inquiry Now</h2>
          <Button className="btnModal" onClick={() => setModalStatus(false)}>
            &times;
          </Button>
        </div>
      </div>
      <Button
        className={` ${modalStatus ? "btnHide" : ""}`}
        onClick={() => setModalStatus(true)}
      >
        Show Modal
      </Button>
    </div>
  );
}
