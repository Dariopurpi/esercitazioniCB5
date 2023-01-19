import NavBar from "./components/navabar/NavBar";
import MessageList from "./components/messageList/MessageList";
import NewMessage from "./components/newMessage/searchMessage/newMessage";
import FriendList from "./components/friendList/friendList";
import Filter from "./components/filter/filter";
import Modal from "./components/modal/Modal";
import FriendContent from "./components/friendContent/friendContent";
import Button from "./components/button/Button";
import { useState } from "react";
import "./App.css";

function App() {
  const [titleFilter, setTitleFilter] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [modalContent, setModalContent] = useState("filter");

  const onHandleModal = () => {
    setModalEnabled((prev) => !prev);
    setModalContent("filter");
  };
  console.log(modalContent);
  return (
    <div className="App">
      <NavBar
        onHandleModal={onHandleModal}
        isModalEnabled={isModalEnabled}
        func={onHandleModal}
      />
      <div className="modal">
        {isModalEnabled && (
          <Modal setModalEnabled={setModalEnabled}>
            {modalContent === "filter" ? (
              <Filter
                onHandleModal={onHandleModal}
                setTitleFilter={setTitleFilter}
              />
            ) : (
              <FriendContent friendId={modalContent} />
            )}
          </Modal>
        )}
      </div>
      <header className="post">
        <NewMessage />
      </header>
      <main>
        <div className="friendsSection">
          <FriendList
            setModalContent={setModalContent}
            setModalEnabled={setModalEnabled}
          />
        </div>
        <div className="mainSection">
          <MessageList titleFilter={titleFilter} />
        </div>
      </main>
    </div>
  );
}

export default App;
