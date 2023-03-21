import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../ContextAPI/UserContext";
import { actionTypes } from "../ContextAPI/UserReducer";
import "./Register.css";
const Register = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState()
    const [useremail,setUseremail] = useState()
    const [password,setPassword] = useState()
    const [ischecked,setIsChecked] = useState(false)
    const [,dispatch] = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username,useremail,password}
        if(ischecked){
        
            dispatch({ type: actionTypes.SET_USER, value: user });
            // localStorage.setItem("user",JSON.stringify(user))
            localStorage.setItem("useremail",useremail)
            localStorage.setItem("password",password)
            localStorage.setItem("username",username)
            navigate("/login")
          
        }
    }
  return (
    <>
      <h1>Auth Login And Register With Local Storage</h1>
      <form method="POST" onSubmit={handleSubmit} style={{ border: "1px solid #ccc" }}>
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="psw-repeat">
            <b>Please enter the name</b>
          </label>
          <input
            type="name"
            placeholder="Enter your name"
            name="name"
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <label for="email">
            <b>Please enter the email</b>
          </label>
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            required
            value={useremail}
            onChange={(e)=>setUseremail(e.target.value)}
          />

          <label for="psw">
            <b>Please enter the password</b>
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="psw"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <label>
            <input
              type="checkbox"
              name="remember"
              style={{ marginBottom: "15px" }}
              checked={ischecked}
              onChange={(e) => setIsChecked(e.target.value)}
            />{" "}
            Remember me
          </label>

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div class="clearfix">
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;