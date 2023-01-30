import { useState, useEffect } from "react";

import styles from "./styles.module.scss";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsersList(data.users))
      .then(console.log(usersList));
  }, []);
  return usersList.map((user) => (
    <div className={styles.user}>
      <p>{user.id}</p>
      <h3>{user.firstName}</h3>
      <img src={user.image} alt="" />
    </div>
  ));
};

export default Users;
