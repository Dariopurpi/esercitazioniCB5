import { useState, useEffect, Fragment } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const Message = ({ data, key }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <Fragment>
      <div className="element">
        <div className="elementUser">
          <img src={user.image} alt={user.firstName} />
          <p>{user.username}</p>
        </div>
        <div className="elementText">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Message;
