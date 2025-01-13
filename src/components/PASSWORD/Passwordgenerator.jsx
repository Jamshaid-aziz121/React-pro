import "../PASSWORD/PasswordGenerator.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./dfile";
import { Button, Container } from "react-bootstrap";

function Passwordgenerator() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbercase, setNumbercase] = useState(false);
  let [symbolscase, setSymbolscase] = useState(false);
  let [passwordlength, setPasswordlength] = useState(10);
  let [fpass, setFpass] = useState("");

  let generatePassword = () => {
    let finalPass = "";
    let charSet = "";

    if (uppercase || lowercase || numbercase || symbolscase) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbercase) charSet += NC;
      if (symbolscase) charSet += SC;

      for (let i = 0; i < passwordlength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      console.log(finalPass);
      setFpass(finalPass);
      // console.log(charSet, charSet.length)
    } else {
      alert("select atleast a check box ....!!");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fpass);
  };

  return (
    <div className="passGen">
      <Container fluid>
        <Container>
          <div className="passwordBox">
            <h2>Password Generator</h2>
            <div className="passwordScreen">
              <input type="text" value={fpass} readOnly />{" "}
              <Button btn btn-primary onClick={copyPass}>
                Copy
              </Button>
            </div>
            <div className="passlength">
              <label>Password length</label>
              <input
                type="number"
                max={20}
                min={10}
                value={passwordlength}
                onChange={(e) => setPasswordlength(e.target.value)}
              />
            </div>

            <div className="passlength">
              <label>Include upper case letter </label>
              <input
                type="checkBox"
                checked={uppercase}
                onChange={() => setUppercase(!uppercase)}
              />
            </div>
            <div className="passlength">
              <label>Include lower case letter</label>
              <input
                type="checkBox"
                checked={lowercase}
                onChange={() => setLowercase(!lowercase)}
              />
            </div>
            <div className="passlength">
              <label>Include Numbers</label>
              <input
                type="checkBox"
                checked={numbercase}
                onChange={() => setNumbercase(!numbercase)}
              />
            </div>
            <div className="passlength">
              <label>Include symbols</label>
              <input
                type="checkBox"
                checked={symbolscase}
                onChange={() => setSymbolscase(!symbolscase)}
              />
            </div>
            <button className="bttn-pw" onClick={generatePassword}>
              Generate Password{" "}
            </button>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Passwordgenerator;
