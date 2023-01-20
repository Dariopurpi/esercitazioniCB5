import MessageList from "./components/messageList/MessageList";
import NewMessage from "./components/newMessage/newMessage";
import FriendList from "./components/friendList/friendList";
import Filter from "./components/filter/filter";
import Modal from "./components/modal/Modal";
import FriendContent from "./components/friendContent/friendContent";
import Layout from "./components/layouts/mainLoyout/Layout";
import Login from "./components/login/Login";

import { useState, useEffect } from "react";
import "./App.css";

function App({}) {
  const [titleFilter, setTitleFilter] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [modalContent, setModalContent] = useState("filter");
  const [logged, setLogged] = useState(false);

  const onHandleModal = () => {
    setModalEnabled((prev) => !prev);
    setModalContent("filter");
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setLogged(true);
    }
  }, []);

  if (logged == true) {
    return (
      <Layout onHandleModal={onHandleModal} isModalEnabled={isModalEnabled}>
        <div className="App">
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
      </Layout>
    );
  }
  return (
    <>
      <Layout logged={logged}>
        <Login />
      </Layout>
    </>
  );
}

export default App;
