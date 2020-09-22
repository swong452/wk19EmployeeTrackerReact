import React from "react";
import "./style.css";
import terminal from "./terminal.jpg"

function Header() {
    return (
<div className = "wrapper">
    <div className = "title">
Employee Directory
<img className = "terminal" src={terminal} alt="terminal" width="100" height="100"></img>
    </div>
    <br></br>
    <div className = "tagline">
Detailed Employee info
    </div>
</div>

    );
}

export default Header;