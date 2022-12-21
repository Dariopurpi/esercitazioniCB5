import { title } from "./components/title.jsx";

import "./App.css";
import { Button } from "./components/button";
function App() {
  return (
    <div className="App">
      <h1>Benvenuto</h1>
      <Button onClick={() => console.log("sono il rosso")} variant="red">
        button 1
      </Button>
      <Button onClick={() => console.log("sono il nero")} variant="black">
        button 2
      </Button>
      <Button onClick={() => console.log("sono il verde")} variant="green">
        button 3
      </Button>
    </div>
  );
}

export default App;
