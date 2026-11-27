import "./Signup.css"
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    console.log(username, password);

    // Send credentials to backend
  }
  return (
    <>
    <div id="box" >
       <h1 style={{ textAlign:"center"}}>Sign Up</h1>

      <form onSubmit={handleLogin} id="form-box">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  )
}

export default Signup;