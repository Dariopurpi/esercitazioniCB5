import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend/friend";

import "./index.css";

const FriendList = () => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setFriendList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      {friendList.map((friend) => (
        <Friend data={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendList;
