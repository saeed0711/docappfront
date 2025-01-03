import React, { useState } from "react";

import "../css/Login.css";
import grp2 from "../assets/tri.png"
import grp3 from "../assets/tri2.png"
import circle from "../assets/second.jpg"
import circle2 from "../assets/Ellipse.png"

const Login = () => {
  const naviget=useNavigate()

  const [data,setdata]=useState({
    email:"",
    password:""
  })

//passing data to services 
function handeldata(data){
  
}



  return (
    <div className="login-container">
       <div className="back-arrow">
        <span>&larr;</span>
      </div>
   
      
     <div className="main">
    <div className="left">
      <img src={grp2} alt="" />
    </div>
    

      <div className="login-form">
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="********" onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})} />
        </div>
        <button className="btn btn-primary" onClick={handeldata}>Log In</button>
    
        <div className="register">
          Don't have an account? <a href="#" >Register now</a>
        </div>
      </div>
      <div className="right">
        <img src={circle} alt="" />
      </div>
      </div>
      <br/>
      <br/>
      <div className="upper">
      <div className="elips">
        <img src={circle2} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Login;
