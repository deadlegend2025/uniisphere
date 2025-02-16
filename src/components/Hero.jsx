import React from 'react'
import logo from '../assets/logo.png';
function Hero() {
  return (
    <div>
       <nav style={{ 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: "12px 20px", 
    backgroundColor: "white", 
    position: "relative", 
    boxSizing: "border-box",
    zIndex: 100, 
    width: "100%"
}}>
 <img src={logo} alt="UNIISPHERE_LOGO" className="h-10 w-auto" style={{ height: "100px", width: "auto" }}/>
<button style={{
padding: "12px 15px",
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "none",
        cursor: "pointer",
         whiteSpace: "nowrap", 
        maxWidth: "100%",

    }}>
            PRE - REGISTER
        </button>
</nav> 
    </div>
  )
}

export default Hero
