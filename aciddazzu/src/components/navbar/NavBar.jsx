import Button from "../button/Button";
import ButtonPost from "../buttonPost/ButtonPost";

import "./index.css";

const NavBar = ({ isModalEnabled, onHandleModal, logged }) => {
  if (localStorage.getItem("username") == null) {
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
  } else {
    const name = JSON.parse(localStorage.getItem("username")).username;
    const imgProfile = JSON.parse(localStorage.getItem("username")).imgProfile;
    const profileImage = JSON.parse(
      localStorage.getItem("username")
    ).imgprofile;
    return (
      <>
        <div className="NavBar">
          <div className="NavBarLogo">
            <h1>Facepurp</h1>
          </div>
          <div className="NavBarElement">
            <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
            <ButtonPost />
            <div className="profile">
              <img src={imgProfile} alt="" />
              <div className="NavBarProfile">
                <p>{name}</p>
                <form action="/">
                  <input
                    type="submit"
                    value="log out"
                    onClick={() => localStorage.clear()}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default NavBar;
