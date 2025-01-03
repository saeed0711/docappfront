import React ,{useState,useEffect} from 'react'

import { useNavigate } from "react-router-dom";
import folder from "../assets/SVG.png"
import delet from "../assets/delete.png"
import {createfolder,getfolders,deletefolder} from "../services/server.js"
import "../css/dashboared.css";
import { use } from 'react';


export default function Dashboard() {
  const naviget=useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [actionType, setActionType] = useState("");
  const [name, setName] = useState("");
  const [cards, setCards] = useState("");  //for folder
  const [fcards, setFcards] = useState([]);  // for file
  // const [bg, setbg] = useState("#121212");
  

  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {

    setIsToggled((prevState) => !prevState);
    // if(!isToggled){
    //   setbg("#fff")
    // }
    // setbg("#121212")
  };
  const uname=localStorage.getItem("user");
  // console.log(uname);
  const openPopup = (type) => {
    setActionType(type);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim()) {
      if(actionType==="File"){
        setFcards([...fcards, name.trim()]);

         setName('');
      }

      if(actionType==="Folder"){
           const res= await createfolder({foldername:name.trim()});
        // setCards([...cards, name.trim()]);
        const data = await res.json()
        if(res.status===200){
          console.log(data);
          closePopup();
          alert(data.message)
          // fetchFolders();
          // setCards([...cards, data.foldername]);
          
        //  fetchFolders();
          setName('');
        }else{
          alert(data.message)
          console.log(res);
      }
    }
    closePopup();
  };}
 

  // const fetchFolders = async () => {  
  //       const res = await getfolders(); 
  //       if (res.status === 200) {
  //         const data = await res.json()
  //        console.log(data);
  //         setCards(data);
  //     }else{
  //       console.log(res)
  //     }  
  //   };  


  useEffect(() => { 
    const fetchFolders = async () => {  
      const res = await getfolders(); 
      if (res.status === 200) {
        const data = await res.json()

        setCards(data);
    }else{
      console.log(res)
    }  
  };  
  fetchFolders();
  },[cards]);






 async function handledelet(fn){
    console.log(fn);
   const res=await deletefolder(fn);
   if(res.status===200){ 
    const data = await res.json()
    console.log(data);
  }
  else{
    console.log(res)  
  }
  // fetchFolders();
  }

  function handlefdelet(index){
    console.log(index);
    const updatedItems = [...fcards];
    updatedItems.splice(index, 1);
     setFcards(updatedItems);
  }


  

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <div>
<div style={{ height: "100vh", backgroundColor: isToggled?"#121212":"#fff", color:isToggled?"#fff":"#000000", padding: "20px" }}>
      {/* Header */}
      <header
        style={{
          // display: "flex",
          display: "grid",
          // justifyContent: "space-between",
          gridTemplateColumns:"1.5fr 1fr 1fr 1fr",
          // gridTemplateColumns:
          alignItems: "center",
          marginBottom: "20px",
          justifyContent:"end"
        }}

      >
        <div></div>
        {/* Dropdown Menu */}
        <div style={{ position: "relative" }}>
          <button 
            onClick={toggleDropdown}
            style={{
              background: "none",
              color: isToggled?"#fff":"#000000",
              height:"40px",
              border: "1px solid #636364",
              fontSize: "18px",
              borderRadius:"10px",
              cursor: "pointer",
              //  paddingLeft:"30vw"
            }}
          >
            {uname}'s Workspace ▼
          </button>
          {isDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "30px",
                right: 0,
                backgroundColor: "#1e1e1e",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                zIndex: 1,
              }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: "10px" }}>
                <li
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #333",
                  }}
                >
                  Settings
                </li>
                <li
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    color: "orange",
                  }}
                onClick={()=>{localStorage.clear(); naviget("/")}}
        
                >
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Toggle Light/Dark Mode */}
        <div  style={{marginLeft:"100px"}}>
          <label style={{ marginRight: "10px" }}>Light</label>
          <div 
      onClick={handleToggle} 
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: isToggled ? 'flex-end' : 'flex-start',
        width: '50px',
        height: '20px',
        backgroundColor: isToggled ? '#1A5FFF' : '#ccc',
        borderRadius: '30px',
     
        padding: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, justify-content 0.3s',
      }}
    >
      <div 
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s',
        }}
      />
    
    </div>
          <label style={{ marginLeft: "5px" }}>Dark</label>
        </div>

        {/* Share Button */}
        <button
          style={{
            background: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
           marginLeft:"200px"
            // paddingLeft:"5vw"
           
          }}
        >
          Share
        </button>
      </header>

      {/* Main Section */}
      <main>
        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" ,  overflowX:"scroll",
          overflowY:"hidden",
          scrollbarColor: "transparent  transparent ",}}>
          <button
            style={{
              background: " #636364",
              color: "#fff",
              padding: "10px 20px",
              margin: "10px",
              border: "1px solid #333",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={() => openPopup("Folder")}
          ><img src={folder} alt=""  />&nbsp;
            Create a folder
          </button>
          {popupVisible && (
        <div style={popupStyles.overlay}>
          <div style={popupStyles.popup}>
            <h2 style={{
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  // fontWeight: "600",
                  color: "#fff",
            }}>Create a {actionType}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                {/* {actionType} Name: */}
                <input 
                  className='input'
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder={`Enter ${actionType} Name`}
                />
              </label>
              <div className="btns"  >
                <button className='Done' type="submit">Submit</button>
                <button className='cancel' type="button" onClick={closePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
       {cards && (
        <>
      {cards.map((cardName, index) => (
        <div
          key={index}
          style={{

            background: " #636364",
            color: "#fff",
            padding: "10px 20px",
            margin: "10px",
            border: "1px solid #333",
            cursor: "pointer",
            borderRadius: "5px", }}
        >
          {cardName.foldername }
          <img style={{paddingLeft:"5px"}} onClick={()=>handledelet(cardName.foldername)} src={delet} alt="" />
        </div>
      ))}
      </>
      )}
          {/* <button
            style={{
              background: "#1e1e1e",
              color: "#fff",
              padding: "10px 20px",
              border: "1px solid #333",
              cursor: "pointer",
              borderRadius: "5px",
              justifyContent:"left"
            }}
          >
            Computer Networks
          </button>
          <button
            style={{
              background: "#1e1e1e",
              color: "#fff",
              padding: "10px 20px",
              border: "1px solid #333",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Computer Networks
          </button> */}
        </div>

        {/* Card */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr",
          columnGap:"15px",
          // height:"40%",
          // backdgroundColor:"red"
        }}>
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            alignContent:"center",
            // justifyContent:"center",
            height: "200px",
            width: "150px",
            margin: "10px",
            backgroundColor: "#007BFF",
            borderRadius: "10px",
            color: "#fff",
            cursor: "pointer",
            paddingLeft:"20px"
          }
        }
        onClick={() => openPopup("File")} 
        ><div style={{fontSize:"30px" ,paddingLeft:"50px" }}>+</div> 
        <div > Create a typebot</div> 
       
          
        </div>
        {/* fromhere */}
        {fcards.map((fcardName, index) => (
        <div
          key={index}
          style={{

            background: " #636364",
            color: "#fff",
            paddingLeft: "20px",
            margin: "10px",
            border: "1px solid #333",
            cursor: "pointer",
            borderRadius: "10px",
            height: "200px",
            width: "150px",
          alignContent:"center",
            }}
        >
          <img style={{
            position:"absolute",
            top:"180px",
        //  width: "1.5rem",
        paddingLeft:"133px",
        
        }} onClick={()=>handlefdelet(index)} src={delet} alt="" />
          <p style={{
           paddingLeft: "50px",
          //  paddingTop: "10px",
          }}>{fcardName}</p>
          
        </div>
      ))}

        </div>
      </main>
    </div>
    </div>
  )
}
const popupStyles = {
  overlay: {
    display: "flex",
        flexDirection: "column",
        width: "20rem",
        height: "8rem",
        border: "solid 2px #282c34",
        borderRadius: ".4rem",
        padding: "1rem",
        position: "absolute",
        backgroundColor: "#000",
       zIndex: "1",

  },
  popup: {
    background: "#000",
    // padding: "20px",
    borderRadius: "5px",
    width: "300px",
    // textAlign: "center",
  },
};