import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function StateHandling() {
  let templete = "";

  let [pshow, setPshow] = useState(false);

  if (pshow) {
    templete = <CardName pshow={pshow} setPshow={setPshow} />;
  } else {
    templete = (
      <>
        <h3> name </h3>
        <Button onClick={() => setPshow(!pshow)}>show</Button>
      </>
    );
  }

  return (
    <div>
      <h1>State Handling </h1>
      <pre>
        In this lecture - we Handle the state and if else statement/condition
        above the return jsx and use a variable like "Templete" for storing any
        HTML element/ component to render the jsx
      </pre>

      <div>{templete}</div>
    </div>
  );
}

let CardName = ({ pshow, setPshow }) => {
  return (
    <>
      <h3> Welcome !! Jamshaid </h3>
      <Button onClick={() => setPshow(!pshow)}>Hide</Button>
    </>
  );
};
