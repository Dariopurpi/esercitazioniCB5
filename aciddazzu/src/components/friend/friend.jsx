import "./index.css";

const Friend = ({ data, setModalContent, setModalEnabled }) => {
  const { image, firstName, lastName, id } = data;
  const onHandleClick = () => {
    setModalContent(id);
    setModalEnabled(true);
  };

  return (
    <div className="Friend" onClick={onHandleClick}>
      <img src={image} alt={lastName} />
      <div className="Friend__text">
        <h4>{`${firstName} ${lastName}`}</h4>
      </div>
    </div>
  );
};

export default Friend;
