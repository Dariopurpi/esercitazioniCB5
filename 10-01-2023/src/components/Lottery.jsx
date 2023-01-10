import { useState } from "react";
import React from "react";
import "./Lottery.css";

export const Lottery = () => {
  const [numbers, setNumbers] = useState([]);

  const random = () => {
    const num = Math.round(Math.random() * 90);
    setNumbers((element) => [...element, num]);
  };

  return (
    <div>
      <h1>Random Generate</h1>
      <button disabled={numbers.length == 6} onClick={random}>
        Generate number
      </button>
      <p>
        <p>Lista Numeri Estratti:</p>
      </p>
      {numbers.map((element) => {
        return <p>{element}</p>;
      })}
    </div>
  );
};
export default Lottery;
