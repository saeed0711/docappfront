import React from "react";
import{useNavigate} from "react-router-dom"
import "../css/LandingPage.css"; // Add your styles here or use inline/TailwindCSS
import hero from "../assets/Figure.jpg"
import formbot from "../assets/formbotlogo.png"
import left from "../assets/left.png"
import right from "../assets/right.png"

const LandingPage = () => {
  const navigate = useNavigate();
  function handleclick(){
    navigate("/signup")
  }
  return (
    <div className="landing-page" style={{ backgroundColor: "#101010", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <header className="header" style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div className="logo" style={{ fontSize: "24px", fontWeight: "bold" }}>
          <span style={{ backgroundColor: "transparent", color: "#fff", padding: "5px 10px", borderRadius: "5px"}}>
            <img src={formbot} alt="" />
          </span>
        </div>
        <nav className="nav">
          <button style={{ margin: "0 10px", background: "transparent", border: "1px solid #007BFF", color: "#007BFF", padding: "8px 16px", borderRadius: "5px" }} onClick={handleclick}>Sign In</button>
          <button style={{ backgroundColor: "#007BFF", border: "none", color: "#fff", padding: "8px 16px", borderRadius: "5px" }} onClick={handleclick}>Create a FormBot</button>
        </nav>
      </header>
      <main style={{ textAlign: "center", padding: "50px 20px"}}>
        
     <div className='grid-container'style={{display:"grid", grid:"1fr 1fr 1fr"}} >
     <div><img src={left} alt="" /></div>
       <div> <h1 style={{ fontSize: "48px", marginBottom: "20px",color:"#B794F4" }}>Build advanced chatbots <br/>visually</h1>
        <p style={{ fontSize: "18px", marginBottom: "40px" }}>
          Typebot gives you powerful blocks to create unique chat experiences. Embed them <br/>anywhere on your web/mobile apps and start collecting results like magic.
        </p></div>
       <div><img src={right} alt="" /></div>
     </div>

        <button style={{ backgroundColor: "#007BFF", border: "none", color: "#fff", padding: "15px 30px", borderRadius: "5px", fontSize: "16px" }} onClick={handleclick}>
          Create a FormBot for free
        </button><br/>
        &nbsp;
        <div className="hero">
              <img style={{height:"95vh",width:"90%"}} src={hero}alt="" />
        </div>
      </main>
      <footer>
      <div className="foot-pannel2">
        <ul>
         <span style={{ backgroundColor: "transparent", color: "#fff", borderRadius: "5px"}}>
            <img src={formbot} alt="" />
          </span>
            <a>Made with ❤️ by</a>
            <a>@cuvette</a>
          </ul>
        {/* FormBot
Made with ❤️ by
@cuvette */}
        <ul>
            <p>Product</p>
           
            <a>Status</a>
            <a>Documentation</a>
            <a>Roadmap</a>
            <a>Pricing</a>
            
        </ul>
      
        <ul>
            <p> Community</p>
            <a>Discord</a>
            <a>GitHub repository</a>
            <a>Twitter</a>
            <a>LinkedIn</a>
            <a>OSS Friends</a>
            
        </ul>

        <ul>
            <p>Company</p>
            <a>About</a>
            <a>Contact</a>
            <a>Terms of Service</a>
            <a>Privicy Policy</a>
        </ul>
    </div>
      </footer>
     
    </div>
  );
};

export default LandingPage;
