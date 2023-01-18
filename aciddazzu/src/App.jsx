import MessageList from "./components/messageList/MessageList";
import NewMessage from "./components/newMessage/searchMessage/newMessage";
import FriendList from "./components/friendList/friendList";
import Filter from "./components/filter/filter";
import { useState } from "react";
import "./App.css";

function App() {
  const [titleFilter, setTitleFilter] = useState("");

  return (
    <div className="App">
      <div className="friendsSection">
        <FriendList />
      </div>
      <div className="mainSection">
        <Filter setTitleFilter={setTitleFilter} />
        <NewMessage />
        <MessageList titleFilter={titleFilter} />
      </div>
    </div>
  );
}

export default App;
