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
        <input
          type="text"
          placeholder="Nome utente..."
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
        <p>
          per la correzione dell'esercitazione: username:Dario password:Purpi
        </p>
        <p>
          so che saresti entrato lo stesso ma l'ho scritto per velocizzarti il
          tutto
        </p>
      </form>
    </div>
  );
};

export default Login;
