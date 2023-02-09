import { initialState, listContext } from "@/store";
import { useContext } from "react";
import { Content } from "@next/font/google";
import NoteItem from "../noteItem";
import styles from "./index.module.scss";

const ItemList = () => {
  const { state } = useContext(listContext);
  console.log(state);
  return (
    <div className={styles.NoteList}>
      {state.noteList.map((note) => (
        <NoteItem data={note} key={note.id} />
      ))}
    </div>
  );
};

export default ItemList;
