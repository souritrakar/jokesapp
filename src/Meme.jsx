import React from "react"

export default function Meme(props){
    return(
        <div className="memecard">
       
           <a href={props.hrefsrc} target="_blank"> <img  onMouseEnter={props.enter}
    onMouseLeave={props.exit}className="memeimg"src={props.imgsrc} alt="img"/>
    </a>
  
    <br></br>
    <br></br>

        </div>
    )
}