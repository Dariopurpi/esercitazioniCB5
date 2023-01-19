import { useState } from "react";

import "./index.css";

const Filter = ({ setTitleFilter }) => {
  const [titleSearch, setTitleSearch] = useState("");

  const onHandleChange = (e) => {
    e.preventDefault();
    setTitleSearch(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setTitleFilter(titleSearch);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Cerca per titolo..."
        onChange={onHandleChange}
      />
      <input type="submit" onSubmit={onHandleChange} value="show all" />
    </form>
  );
};

export default Filter;
