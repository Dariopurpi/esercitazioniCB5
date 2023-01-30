import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const User = () => {
  let { userNumber } = useParams();
  const navigate = useNavigate();
  const [userList, setUserList] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userNumber}`)
      .then((response) => response.json())
      .then((data) => setUserList(data))
      .then(console.log(userList));
  }, []);

  const onClickPrevBtn = () => navigate(`/users/${userNumber + 1}`);
  const onClickNextBtn = () => navigate(`/users/${userNumber - 1}`);

  return (
    <div className={styles.Quote}>
      <div className={styles.content}>
        <h3>{userList?.firstName}</h3>
      </div>
      <div className={styles.buttons}>
        <button onClick={onClickPrevBtn}>Prev</button>
        <button onClick={() => navigate("/")}>To Homepage</button>
        <button onClick={onClickNextBtn}>Next</button>
      </div>
    </div>
  );
};
export default User;
