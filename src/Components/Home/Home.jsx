import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../ContextAPI/UserContext';
import { actionTypes } from '../ContextAPI/UserReducer';

const Home = () => {
    const navigate = useNavigate()
    // const [,dispatch] = useContext(UserContext);
    // const [{ userData }] = useContext(UserContext);
    // const user =  {useremail,username}
    // dispatch(user)
    // dispatch({ type: actionTypes.SET_USER, value: value.user });
    const d = localStorage.getItem("useremail", );
    const d1 =    localStorage.getItem("username", );
    // localStorage.getItem("user", JSON.stringify(user));
    // const d1 = localStorage.getItem("user",(user))
    // const d2 = localStorage.getItem("user")
  
    const delData = () => {
        localStorage.removeItem("useremail")
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        navigate("/")
    }
  return (
    <>
        <h1>User Info</h1>
       <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
       <p> user-email:{" "} {d}</p>
        <p> user-name:{" "} {d1}</p>
        <button onClick={delData}>Logout</button>
       </div>
        {/* <h1>User Email {d2}</h1> */}
      
    </>
  )
}

export default Home