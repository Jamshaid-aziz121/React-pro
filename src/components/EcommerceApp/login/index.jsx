import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Card, Form } from "react-bootstrap";

export default function EcommerLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const login = () => {
    if (form.userName === "jams" && form.password === "12345") {
      navigate("/eCommerceApp/homepage");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="userName"
                value={form.userName}
                placeholder="Enter User Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <button type="button" className="btn btn-primary" onClick={login}>
              Login
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
