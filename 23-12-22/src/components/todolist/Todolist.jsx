import "./Todolist.css";
import { Button } from "../../atoms/button/Button.jsx";
import { Fragment } from "react";
import React from "react";
import { useState } from "react";

function Item(text) {
  const [isDone, setIsDone] = useState(true);
  const handleClick = () => {
    setIsDone(!isDone);
  };
  return (
    <Fragment>
      <h1>{text}</h1>
      <Button onClick={handleClick}>X</Button>
      <p style={{ display: isDone ? "block" : "none" }}>Fatto</p>
    </Fragment>
  );
}

export function Todolist() {
  const array = [
    { label: "Fare la spesa", id: 1 },
    { label: "Comprare regali", id: 2 },
    { label: "Andare dal barbiere", id: 3 },
    { label: "Andare al parco", id: 4 },
    { label: "Studiare", id: 5 },
  ];
  return (
    <Fragment>
      <ul className="Container">
        {array.map(function (item) {
          return Item(item.label);
        })}
      </ul>
    </Fragment>
  );
}
