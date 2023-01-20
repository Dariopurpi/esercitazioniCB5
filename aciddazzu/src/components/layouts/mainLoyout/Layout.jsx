import NavBar from "../../navbar/NavBar";
import "./index.css";

const Layout = ({ children, isModalEnabled, onHandleModal, logged }) => {
  return (
    <div className="Layout">
      <NavBar
        onHandleModal={onHandleModal}
        isModalEnabled={isModalEnabled}
        logged
      />
      {children}
    </div>
  );
};

export default Layout;
