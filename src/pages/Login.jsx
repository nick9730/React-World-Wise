import { useNavigate } from "react-router-dom";
import PageNav from "../compomens/PageNav";
import {  useAuth } from "../contexts/FakeLoginContexts";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";


export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
   
const navigate = useNavigate();
const { login, isAuthenticated } = useAuth();
  
   
  function handleSubmit(e){
   e.preventDefault()
    if(email && password){
      login(email,password)
    }

  }



useEffect(
 function(){
  login()
     if(isAuthenticated===true){
   navigate("/app",{replace:true});
     }
  },[isAuthenticated]
)


  return (
    <main className={styles.login}>
      <PageNav/>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </main>
  );
}
