import { useState } from "react";
import users from "../../utils/userAccess";
import "./index.css";

const Login = () => {
  const [loginState, setLoginState] = useState({});

  const submitSend = (e) => {
    // e.preventDefault();
    if (users) {
      users.map((user) => {
        if (
          user.username === loginState.username &&
          user.password === loginState.password
        ) {
          localStorage.setItem(
            "username",
            JSON.stringify({ ...loginState, imgProfile: user.imgProfile })
          );
        }
      });
    }
    console.log(loginState);
  };

  return (
    <div className="Login">
      <form className="LoginForm">
        <h1>Log in</h1>
        <p>username: Dario pass:Purpi</p>
        <h3>Inserisci Username e Password corretti</h3>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <input type="submit" value="Send" onClick={submitSend} />
      </form>
    </div>
  );
};

export default Login;
