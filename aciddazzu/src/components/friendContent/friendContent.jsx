import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const FriendContent = ({ friendId }) => {
  const [friendData, setFriendData] = useState({});

  useEffect(() => {
    GET(`users/${friendId}`).then((friend) => setFriendData(friend));
  }, []);

  const { image, username, firstName, lastName, address } = friendData;

  return (
    <div className="FriendContent">
      <img src={image} alt={username} />
      <h3>{`${firstName} ${lastName}`}</h3>
      {/* {address ? <p>{`${address.city} ${address.state}`}</p> : <p>Not found</p>} */}
      <p>{`${address?.city} ${address?.state}`}</p>
      <h5>{username}</h5>
    </div>
  );
};

export default FriendContent;
