import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
 import { loginRequest } from "../../features/auth/authslice"
import "./login.css";
export default function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const { User } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(loginRequest({ username, password }));
  };

  useEffect(() => 
    {
      console.log("i am called")
    console.log("User", User);  
    if (User!==null) {
      localStorage.setItem('User', JSON.stringify(User));    
navigate('/chat')
    }
  }, [User]);
  return (
   <div class="login-container">
  <form onSubmit={handleSubmit} class="login-form">
    <h2>Login to ChatApp</h2>
    <div class="input-container">
    <input type="email" placeholder="Email ID" required  onChange={(e)=>{setUserName(e.target.value)}}/>
    </div>
    <div class="input-container">
    <input type="password" placeholder="Password" required  onChange={(e)=>{setPassword(e.target.value)}} />
    </div> 
    <div class="input-submit">
     <button type="submit">Login</button>
    </div>   

    <div className="input-submit">
      <button type="button" onClick={()=> navigate('/register')} className="register-button"> 
        Register
      </button>
    </div>
  </form>

</div>

  );
}
