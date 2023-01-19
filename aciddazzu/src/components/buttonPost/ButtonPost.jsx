import "./index.css";

const ButtonPost = ({ isModalEnabled }) => {
  return (
    <button className={`Button ${isModalEnabled ? "active" : "passive"}  `}>
      {isModalEnabled ? "❌" : "➕"}
    </button>
  );
};

export default ButtonPost;
