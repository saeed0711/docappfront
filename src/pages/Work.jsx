

import React  from 'react'
import { useState } from "react"
import delet from "../assets/delete.png"
import"../css/work.css"
export default function Work() {

    // const [content, setContent] = useState(null); // State to track dynamic content
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
      <div className="header-buttons">
        <button className="theme-button">Light</button>
        <button className="theme-button active">Dark</button>
        <button className="save-button">Save</button>
      </div>
    </header>

    <div className="main-content">
      <aside className="sidebar">
        <h3>Bubbles</h3>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Text Bubble")}
        >
          Text
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Image Bubble")}
        >
          Image
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Video Bubble")}
        >
          Video
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("GIF Bubble")}
        >
          GIF
        </button>
        <h3>Inputs</h3>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Text Input")}
        >
          Text
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Number Input")}
        >
          Number
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Email Input")}
        >
          Email
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Phone Input")}
        >
          Phone
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Date Input")}
        >
          Date
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Rating Input")}
        >
          Rating
        </button>
        <button
          className="sidebar-button"
          onClick={() => handleButtonClick("Buttons Input")}
        >
          Buttons
        </button>
      </aside>

      <div className="flow-area" style={{display:"block"}} >
      <div className="start-block" style={{marginLeft: "200px"}}>Start</div>
        {/* {content && (
          <div className="dynamic-content"  >
            <h2>{content}</h2>
            <p>This is a {content} component dynamically added.</p>
          </div>
       
        )} */}
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
  
}
