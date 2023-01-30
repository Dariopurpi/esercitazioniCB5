import { Link } from "react-router-dom";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>eccolo</h1>

      <Link to={"users"}></Link>
    </div>
  );
}

export default App;
