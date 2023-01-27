import { useState, useEffect } from "react";
import { POST } from "../../utils/http";
import "./index.css";

const NewMessage = () => {
  const [authorMessage, setAuthorMessage] = useState("");
  const [postMessage, setPostMessageText] = useState("");
  const [titleMessage, setTitleMessage] = useState("");
  const [urlMessage, setUrlMessage] = useState("");

  const [messagePost, setMessagePost] = useState({});

  const onHandleAuthor = (e) => {
    setAuthorMessage(e.target.value);
  };
  const onHandlePostMessage = (e) => {
    setPostMessageText(e.target.value);
  };
  const onHandleTitleMessage = (e) => {
    setTitleMessage(e.target.value);
  };
  const onHandleURLMessage = (e) => {
    setUrlMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 9,
      image: urlMessage,
      firstName: authorMessage,
      title: titleMessage,
      body: postMessage,
    });
  };

  useEffect(() => {
    POST("posts/add", messagePost);
  }, [messagePost]);
  return (
    <div className="NewMessage">
      <form onSubmit={onSubmit}>
        {/* <input
          value={authorMessage}
          type="text"
          onChange={onHandleAuthor}
          placeholder="Inserisci Autore"
        /> */}
        <input
          value={postMessage}
          type="text"
          onChange={onHandlePostMessage}
          placeholder="A cosa stai pensando?"
        />
        {/* <input
          value={titleMessage}
          type="text"
          onChange={onHandleTitleMessage}
          placeholder="Inserisci Titolo"
        />
        <input
          value={urlMessage}
          type="text"
          onChange={onHandleURLMessage}
          placeholder="Inserisci url foto"
        /> */}
        <input type="submit" value="Pubblica" />
      </form>
    </div>
  );
};

export default NewMessage;
