import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend/friend";

import "./index.css";

const FriendList = ({ setModalEnabled, setModalContent }) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setFriendList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      {friendList.map((friend) => (
        <Friend
          setModalContent={setModalContent}
          setModalEnabled={setModalEnabled}
          data={friend}
          key={friend.id}
        />
      ))}
    </div>
  );
};

export default FriendList;
