import React from "react"
 
export default function Joke(props){
    return(
        <div className="jokescard">
            <h2>{props.joke}</h2>
        </div>
    )
}