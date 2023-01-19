import Button from "../button/Button";
import ButtonPost from "../buttonPost/ButtonPost";

import "./index.css";

const NavBar = ({ isModalEnabled, onHandleModal }) => {
  return (
    <>
      <div className="NavBar">
        <div className="NavBarLogo">
          <h1>Facepurp</h1>
        </div>
        <div className="NavBarElement">
          <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
          <ButtonPost />
        </div>
      </div>
    </>
  );
};

export default NavBar;
