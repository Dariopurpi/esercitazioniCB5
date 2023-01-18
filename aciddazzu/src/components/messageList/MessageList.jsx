import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../message/Message";
import "./index.css";

const MessagesList = ({ titleFilter }) => {
  const [msgList, setMsgList] = useState([]);

  console.log(msgList);

  useEffect(() => {
    GET("posts").then((res) =>
      setMsgList(res.posts.filter((post) => post.title.includes(titleFilter)))
    );
  }, [titleFilter]);

  console.log(titleFilter);

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
