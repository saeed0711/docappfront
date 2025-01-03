import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/L2.css";
import grp2 from "../assets/tri.png"
import grp3 from "../assets/tri2.png"
import circle from "../assets/Ellipse2.svg"
import circle2 from "../assets/Ellipse.png"
import {login} from "../services/server.js"



const Login = () => {
  //to naviget from one page to nother
  const naviget=useNavigate()

  //use state to handel data from input

  const[data,setdata]=useState({
    email:"",
    password:""
  })

  const handeldata=async()=>{
    console.log(data.email);
    // alert("from data")
    const res=await login(data)
    // console.log(resdata);
    console.log(res.status);
    const resdata=await res.json()
    if(res.status===200){
          localStorage.setItem("token",resdata.token)
          // console.log(resdata.user.Username)
          localStorage.setItem("user",resdata.user.Username)
          // console.log("below naviget");
          // console.log(localStorage.getItem("user"));
          alert("logged in")
          naviget("/Dashboard")
    }
    else{
          // console.log(resdata);
          alert(resdata.message)
         }
  }


  
  return (
     <div>
      <div className="back-arrow">
      <span onClick={()=>naviget("/signup")}>&larr;</span>
      {/* <button style={{backgroundColor:"transparent" ,color:"white", height:"30px",width:"30px"}}>&larr;</button> */}
       </div>     
       <div className="main">
       <div className="left">
      <img src={grp2} alt="" style={{display:"block" }} />
    
      {/* <img  src={grp3} alt="" style={{position:"absolute" ,top:"-25px",
      left:"30%",transform:"translate(-50%)",zIndex:"10"}}/> */}
    </div>
      
    

      <div className="login-form">
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={(e)=>{setdata({...data,[e.target.name]:e.target.value})}} />
        </div>                                                                     
        <div className="form-group">                                      
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="********" onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}/>
        </div>
        <button className="btn btn-primary" onClick={handeldata}>Log In</button>
    
        <div className="register">
          Don't have an account? <a onClick={()=>naviget("/signup")}>Register now</a>
        </div>
      </div>
      <div className="right">
        <img src={circle} alt="" />
      </div>
       </div>
       <footer className="footer">
       <img src={circle2} alt="" />
       </footer>
   
     </div>
  );
};

export default Login;
