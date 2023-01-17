import MessageList from "./components/messageList/MessageList";
import NewMessage from "./components/newMessage/searchMessage/newMessage";
import FriendList from "./components/friendList/friendList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NewMessage />

      <div className="friend">
        <FriendList />
        <MessageList></MessageList>
      </div>
    </div>
  );
}

export default App;
