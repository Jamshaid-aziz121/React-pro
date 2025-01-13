import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function TernaryOperator() {
  let [status, setStatus] = useState(false);
  return (
    <div>
      <h2>Ternary Operator</h2>

      {status ? (
        <>
          <h4>We use Ternary Operator in the keyword return(jsx) </h4>
          <Button onClick={() => setStatus(!status)}>Hide</Button>
        </>
      ) : (
        <Button onClick={() => setStatus(!status)}>Show</Button>
      )}
    </div>
  );
}
