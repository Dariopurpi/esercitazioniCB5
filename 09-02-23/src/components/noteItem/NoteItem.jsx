import { listContext } from "@/store";
import { useContext } from "react";
import styles from "./index.module.scss";

const NoteItem = ({ data }) => {
  const { state, dispatch } = useContext(listContext);

  const onHandleDelete = () => {
    dispatch({
      type: "DELETE_ITEM",
      payload: data.id,
    });
  };

  console.log(data.done);
  return (
    <div className={styles.note}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <button onClick={onHandleDelete}>delete</button>
    </div>
  );
};
export default NoteItem;
