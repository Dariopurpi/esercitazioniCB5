import { title } from "./components/title.jsx";
import "./App.css";
import { button } from "./components/button.jsx";
import { carousel } from "./components/carousel.jsx";
function App() {
  return (
    <>
      <div className="App">
        {title()}
        {button()}
      </div>
      <div className="images">{carousel()}</div>
    </>
  );
}

export default App;
