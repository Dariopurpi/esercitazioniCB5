import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../message/Message";
import "./index.css";

const MessagesList = () => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then((res) => setMsgList(res.posts));
  }, []);

  return (
    <div className="MessagesList">
      {msgList.map((item) => (
        <Message data={item} key={item.id} />
      ))}
    </div>
  );
};

export default MessagesList;
/*<Message data={msgList} />;*/
