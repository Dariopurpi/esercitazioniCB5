import { useState, useEffect, Fragment } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const Message = ({ data }) => {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(false);

  const onLike = () => {
    setLike((prev) => !prev);
  };

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, [data.userId]);
  const imagePost = "https://picsum.photos/373?";
  const comment = "Commenta";

  return (
    <>
      <div className="element">
        <div className="elementUser">
          <img src={user.image} alt={user.firstName} />
          <p>{user.username}</p>
        </div>
        <div className="elementText">
          <h4>{data.title}</h4>
        </div>
        <div className="elementImg">
          <img src={`${imagePost}+ ${user.id}`} alt={user.firstName} />
        </div>
        <div className="reaction">
          <span
            onClick={onLike}
            className={
              like
                ? "material-symbols-outlined like"
                : "material-symbols-outlined"
            }
          >
            {like ? "thumb_up" : "thumb_up"}
          </span>
          <span className="material-symbols-outlined">chat </span>
          <span className="material-symbols-outlined">send </span>
        </div>
      </div>
    </>
  );
};

export default Message;
