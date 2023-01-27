import "./index.css";

const Friend = ({ data, setModalContent, setModalEnabled }) => {
  const { image, firstName, lastName, id } = data;
  const onHandleClick = () => {
    setModalContent(id);
    setModalEnabled(true);
  };
  const background = `https://picsum.photos/92/162?${id}`;

  return (
    <div className="Friend" onClick={onHandleClick}>
      <img className="FriendBackground" src={background} alt="" />

      <div className="Friend___Img">
        <img id="profile" src={image} alt={lastName} />
      </div>
      <div className="Friend__text">
        <p>{firstName}</p> <p>{lastName}</p>
      </div>
    </div>
  );
};

export default Friend;
