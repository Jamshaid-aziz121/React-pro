import { Button } from "react-bootstrap";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export function Login() {
  const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [password, setPassword] = useState("");
  const [showEye, setShowEye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uname === "admin" && password === "admin") {
      console.log("login success");
      navigate("/dashboard");
    } else {
      console.log("login failed");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto my-3">
            <form onSubmit={handleSubmit}>
              <div className="text-start my-3">
                <h2>login / register</h2>
                <label>UserName</label>
                <input
                  type="text"
                  onChange={(event) => setUname(event.target.value)}
                  className="form-control"
                  value={uname}
                />
              </div>

              <div className="text-start my-3">
                <label>Password</label>
                <div className="password">
                  <input
                    type={showEye ? "text" : "password"}
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-control"
                    value={password}
                  />
                  <span>
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => setShowEye(!showEye)}
                    />
                  </span>
                </div>
              </div>
              <div className="text-start my-3">
                <Button type="submit" variant="primary">
                  login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
