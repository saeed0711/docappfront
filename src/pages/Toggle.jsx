import React, { useState } from 'react';
import "../css/toggle.css"
import t from "../assets/formelement/tt.png"
import txt from "../assets/formelement/txt.png"
import hash from "../assets/formelement/hash.png"
import at from "../assets/formelement/at.png"
import phn from "../assets/formelement/phn.png"
import str from "../assets/formelement/str.png"
import btn from "../assets/formelement/btn.png"
import im from "../assets/formelement/im.png"
import date from "../assets/formelement/date.png"
import vector from "../assets/formelement/vector.png"
import delet from "../assets/delete.png"


const Toggle = () => {

  const [cards, setCards] = useState([]);

  const handleButtonClick = (type) => {
    // Dynamically set content based on button type
    setCards([...cards, type]);
  };

  function handledelet(index){
      console.log(index);
      const updatedItems = [...cards];
      updatedItems.splice(index, 1);
       setCards(updatedItems);
    };
  return (
    <div className="container">
      <header className="header">
        <input
          type="text"
          placeholder="Enter Form Name"
          className="form-name-input"
        />
        <div className="two-button">
        <button className="button first">FLOW</button>
        <button className="button">Responce</button>
        </div>
        <div className="header-buttons">
          {/* <button className="theme-button">Light</button>
          <button className="theme-button active">Dark</button> */}
          <button className="share-button">Share</button>
          <button className="save-button">Save</button>
        </div>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <h3>Bubbles</h3>
          <button className="sidebar-button"  onClick={() => handleButtonClick("Text Bubble")}> <img src={txt} alt=""/> Text</button>
          <button className="sidebar-button" onClick={() => handleButtonClick("image Bubble")}><img src={im} alt=""/>Image</button>
          {/* <button className="sidebar-button">Video</button>
          <button className="sidebar-button">GIF</button> */}
          <h3>Inputs</h3>
          <button className="sidebar-button" onClick={() => handleButtonClick("Text Input")}> <img src={t} alt=""/> Text</button>
          <button className="sidebar-button" onClick={() => handleButtonClick("Number Input")} ><img src={hash} alt=""/>Number</button>
          <button className="sidebar-button" onClick={() => handleButtonClick("Email Input")}><img src={at} alt=""/>Email</button>
          <button className="sidebar-button" onClick={() => handleButtonClick("Phone Input")}><img src={phn} alt=""/>Phone</button>
          <button className="sidebar-button" onClick={() => handleButtonClick("Date Input")}><img src={date} alt=""/>Date</button>
          <button className="sidebar-button" onClick={() => handleButtonClick("Rating Input")}><img src={str} alt=""/>Rating</button>
          <button className="sidebar-button" onClick={() => handleButtonClick("Buttons Input")}><img src={btn} alt=""/>Buttons</button>
        </aside>

        <div className="flow-area">
          <div className="start-block"><img src={vector} alt=""/><span>Start</span></div>
          {cards.map((cardName, index) => (
        <div
          key={index}
        //   style={{

        //     background: " #636364",
        //     color: "#fff",
        //     padding: "10px 20px",
        //     margin: "10px",
        //     border: "1px solid #333",
        //     cursor: "pointer",
        //     borderRadius: "5px", 
        // }}
        className='overlay'
        >
          
         <h2  style={{
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  // fontWeight: "600",
                  color: "#fff",
            }}> {cardName }</h2> 
          <label>
                {/* {actionType} Name: */}
                <input 
                  className='input'
                  type="text"
                  required
                  placeholder={`Hint : User will input ${cardName} on his form `}
                />
              </label>
          <img style={{
           position:"relative",
        //   top:"180px",
        bottom:"105px",
        left:"290px",
         width: "1.5rem",
        //   paddingLeft:"290px",
        }} onClick={()=>handledelet(index)} src={delet} alt="" />
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Toggle;
