import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const User = () => {
  let { user } = useParams();
  const navigate = useNavigate();
  const [userList, setUserList] = useState({});
  console.log(user);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setUserList(data))
      .then(console.log(userList));
  }, [user]);

  const onClickPrevBtn = () => navigate(`/users/${parseInt(--user)}`);
  const onClickNextBtn = () => navigate(`/users/${parseInt(++user)}`);

  return (
    <div className={styles.Quote}>
      <p>{userList.id}</p>
      <h3>{userList.firstName}</h3>
      <img src={userList.image} alt="" />

      <div className={styles.buttons}>
        <button onClick={onClickPrevBtn}>Prev</button>
        <button onClick={() => navigate("/")}>To Homepage</button>
        <button onClick={onClickNextBtn}>Next</button>
      </div>
    </div>
  );
};
export default User;
