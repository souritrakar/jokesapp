import React from "react"
import jokepic from "./logopic.png"
import "./App.css"
import {BrowserRouter,Link,Route,Switch} from "react-router-dom"
import Meme from "./Meme"
export default class Memepage extends React.Component{
    constructor(){
        super()
        this.state={
            mode:"Meme",
            memes:[],
            hovertime:0
        }
    }
    async componentDidMount(){
      await fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(response=>{
        console.log(response.data.memes)
        this.setState({memes:response.data.memes})
      })
    }

   

    render(){
      var hovertimes=0
        return(
          <BrowserRouter>
            <header className="darkmode">
     <h1 className="randomgen"> Meme Templates!</h1>
     <img className="jokepic" src={jokepic} alt="jokepic"/>
     <h2 style={{color:"lightseagreen"}}>Choose from the most popular Meme Templates and make memes!</h2>
     <h3 style={{color:"lightblue"}}>ONLY TEMPLATES AVAILABLE NOW. CLICK/SAVE IMAGE AND MAKE YOUR OWN MEME INSTEAD OF HAVING TO SEARCH.GENERATOR UNDER PROGRESS</h3>
     <br></br>
  <h3 style={{color:"red"}}>Mode: {this.state.mode}</h3>
  <br></br>
  
{
  this.state.memes &&
  this.state.memes.map(meme=>{
    return(
    <Meme   hrefsrc={meme.url} imgsrc={meme.url} topcaption="TOP TEXT HERE" downcaption="BOTTOM TEXT HERE" />
    )
  })
}
  <br></br>

  <h1 style={{color:"#F37335"}}>© Souritra Kar 2020</h1>
      </header>
      </BrowserRouter>
        )
    }
}