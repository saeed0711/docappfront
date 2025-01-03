import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/L2.css";
import grp2 from "../assets/tri.png"
import grp3 from "../assets/tri2.png"
import circle from "../assets/Ellipse2.svg"
import circle2 from "../assets/Ellipse.png"
import { signup } from '../services/server';

export default function Signup() {
  const naviget=useNavigate()
  const [flag,setflag]=useState(false)
  const [fdata,setfdata]=useState({
    Username:"",
    email:"",
    password:"",
    confirm:""
  })
  function back(){
    naviget("/")
  }

  const handleChange = (e) => {
    setfdata({...fdata,[e.target.name]: e.target.value });
  };
  // 
//handling form

const handelform=async()=>{
  setflag(false)
  console.log(fdata);
  if(fdata.password===fdata.confirm){
 
    console.log('check');
      const res= await signup(fdata)
      const jsondata=await res.json()
      if(res.status===200){
        alert("user created please login")
        naviget("/Login")
        console.log("below naviget");
      }else{
        alert(jsondata.message)
      }
      // console.log(fdata);
    }else{
      console.log("erore");
      setflag(true)
     
  }
    
  

   
}



  // function handellogin(){
  //   naviget("/Login")
  // }
  return (
    
    <div>
    <div className="back-arrow">
    <span onClick={back}>&larr;</span>
     </div>     
     <div className="main">
     <div className="left">
    <img src={grp2} alt="" style={{display:"block"}} />
    {/* <img  src={grp3} alt="" style={{position:"absolute" ,top:"-25px",
    left:"30%",transform:"translate(-50%)",zIndex:"10"}}/> */}
  </div>
    
  

    <div className="login-form">
    <div className="form-group">
        <label htmlFor="Username">Username</label>
        <input type="text" name="Username" placeholder="Enter your Username" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="********" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="confirm">Confirm password</label>
        <input type="password" name="confirm" placeholder="********"  onChange={handleChange} />
      </div>
      {flag && <span style={{color:"red"}}> enter same password in both feild </span>}
      <button className="btn btn-primary" onClick={handelform}>Sign Up</button>
  
      <div className="register">
        Allredy have an account? <a  onClick={()=>naviget("/Login")}>Login</a>
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

  )
}
