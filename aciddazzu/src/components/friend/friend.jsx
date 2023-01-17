import "./index.css";

const Friend = ({ data }) => {
  const { image, firstName, lastName } = data;

  return (
    <div className="friend">
      <img src={image} alt={lastName} />
      <div className="friend__text">
        <h4>{`${firstName} ${lastName}`}</h4>
      </div>
    </div>
  );
};

export default Friend;
