import "./index.css";

const Friend = ({ data }) => {
  const { image, firstName, lastName } = data;

  return (
    <div className="Friend">
      <img src={image} alt={lastName} />
      <div className="Friend__text">
        <h4>{`${firstName} ${lastName}`}</h4>
      </div>
    </div>
  );
};

export default Friend;
