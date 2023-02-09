import { listContext } from "@/store";
import { useState, useContext } from "react";

import styles from "./index.module.scss";

const AddNote = () => {
  const { dispatch } = useContext(listContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      payload: {
        id: Math.floor(Math.random() * 100),
        title,
        content,
      },
    });
    setTitle(() => "");
    setContent(() => "");
  };

  return (
    <div className={styles.main}>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Titolo..."
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contenuto..."
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddNote;
