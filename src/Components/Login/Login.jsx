import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../ContextAPI/UserContext";
import { actionTypes } from "../ContextAPI/UserReducer";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [ischecked, setIsChecked] = useState(false);
  const [,dispatch] = useContext(UserContext);
  // const [login,setLogin] = useState
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { useremail, password };

    if (ischecked) {
      dispatch({ type: actionTypes.SET_USER, value: user });
    //   localStorage.getItem("user", JSON.stringify(user));
      localStorage.getItem("useremail", useremail);
      localStorage.getItem("password", password);
      navigate("/dashboard");
    }

    // localStorage.getItem("useremail",useremail)
    // localStorage.getItem("password",password)
    //    const user =  localStorage.getItem("useremail",useremail)
    //    const user1 =  localStorage.getItem("password",password)

    //    const user = JSON.parse(localStorage.getItem("user"))
    //    if (user.useremail === useremail && user.password === password) {
    //     navigate("/dashboard")
    //   }
    //    console.log("user",user,user1)

    // if (!useremail || !password) {
    //   localStorage.getItem("useremail", useremail);
    //   localStorage.getItem("password", password);

    // }
    // else if(password !== user1 || useremail !== user){
    //     navigate("/dashboard");
    // }

    // if(user && user.length){
    //     const userData = JSON.parse(user)
    //     const userLogin = userData.filter((e,l)=>{
    //         return e.useremail === useremail && e.password === password

    //     })
    //     if(userLogin.length === 0){
    //         navigate("/register")
    //     }
    //     else{
    //         localStorage.setItem("userLogin",JSON.stringify(userLogin))
    //         navigate("/home")
    //     }
    // }
  };
  return (
    <>
      <h1>Auth Login And Register With Local Storage</h1>
      <form onSubmit={handleSubmit} method="POST">
        <div class="imgcontainer"></div>

        <div class="container">
          <label for="email">
            <b>Please enter the email</b>
          </label>
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            required
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={ischecked}
              onChange={(e) => setIsChecked(e.target.value)}
              name="remember"
            />{" "}
            Remember me
          </label>
          <span class="psw">
            Forgot <a href="#">password?</a>
          </span>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;

// import React,{useState,useEffect} from 'react'
// import { Navigate, useNavigate } from 'react-router-dom';

// const Logins = () => {
//     // const [name,setName] = useState();
//     // const [email,setEmail] = useState();
//     // const [ischecked,setIsChecked] = useState(false)
//     // const [isLoggedin,setIsLoggedin] = useState(false)

//     // function handleSubmit(e){
//     //     e.preventDefault();
//     //     if(ischecked){
//     //         localStorage.setItem("name",name)
//     //         localStorage.setItem("email",email)
//     //     }
//     // }
//     // useEffect(() => {
//     //     const storename = localStorage.getItem("name",name)
//     //     const storeemail = localStorage.getItem("email",email)
//     //   if(storename && storeemail){
//     //     setName(storename);
//     //     setEmail(storeemail);
//     //     setIsChecked(true)
//     //   }
//     // }, [])

// //     const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [saveDetails, setSaveDetails] = useState(false);

// //   const handleNameChange = (e) => {
// //     setName(e.target.value);
// //   };

// //   const handleEmailChange = (e) => {
// //     setEmail(e.target.value);
// //   };

// //   const handleSaveDetailsChange = (e) => {
// //     setSaveDetails(e.target.checked);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle submission logic here
// //     if (saveDetails) {
// //       localStorage.setItem("name", name);
// //       localStorage.setItem("email", email);

// //     } else {
// //       localStorage.removeItem("name");
// //       localStorage.removeItem("email");
// //     }

// //   };
// //   const navigate = useNavigate()
// //     useEffect(() => {
// //         if(name && email){
// //             navigate("/user-portal")
// //         }
// //     }, [])

// const [name,setName] = useState();
// const [email,setEmail] = useState();
// const [ischecked,setIsChecked] = useState(false)
// const [isLoggedin,setIsLoggedin] = useState(false)

//  function handleSubmit(e){
//         e.preventDefault();
//         if(ischecked){
//             localStorage.setItem("name",name)
//             localStorage.setItem("email",email)
//         }
//     }
//     useEffect(() => {
//         const storename = localStorage.getItem("name",name)
//         const storeemail = localStorage.getItem("email",email)
//       if(storename && storeemail){
//         setName(storename);
//         setEmail(storeemail);
//         setIsChecked(true)
//       }
//     }, [])

//     const logout = ()=>{
//         localStorage.removeItem("name",name)
//         localStorage.removeItem("email",email)
//     }
//   return (

//     <>
//         <form action="" onSubmit={handleSubmit}>
//         {/* <form action="" onChange={handleSubmit}> */}
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             <input type="checkbox" name="" id="" required checked={ischecked}   onChange={(e) => setIsChecked(e.target.value)} />
//             <button type='submit'>Submit</button>
//         </form>
//         <button onClick={logout} type="submit">Logout</button>
//         {/* <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={handleNameChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={saveDetails}
//           onChange={handleSaveDetailsChange}
//           required
//         />
//        check
//       </label>
//       <button type="submit">Submit</button>
//     </form> */}
//     </>
//   )
// }

// export default Logins
