import { useState } from "react";
import { listContext } from "@/store";
import { useContext } from "react";

const Searchbar = () => {
  const { dispatch } = useContext(listContext);
  // const [searchTitle, setSearchTitle] = useState("");

  const onHandleChange = (e) => {
    //setSearchTitle(e.target.value);
    dispatch({ type: "SEARCH_TITLE", payload: e.target.value });
  };

  return (
    <input type="text" placeholder="Search..." onChange={onHandleChange} />
  );
};

export default Searchbar;
