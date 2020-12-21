
import './App.css';
import React from "react"
import jokepic from "./logopic.png"
import Joke from "./Joke"
import {BrowserRouter,Link,Route,Switch} from "react-router-dom"

class Home extends React.Component {
  constructor(){
    super()
    this.state={
      joke:"",
      memepic:"",
      meme:"",
      isMemeMode:false,
      isjokeMode:true,
      hasLoadedJoke:false,
      hasLoadedMeme:false,
      hasPressedButton:false,
      mode:"Joke"
      
    }
  }

fetchApi = async () =>{

  // var randomnumber= Math.floor(Math.random()*10)
  // console.log(randomnumber)
  this.setState({hasPressedButton:true})
  console.log("inside func")

  await fetch("https://icanhazdadjoke.com",{
    headers:{
      'Accept':'application/json'
    }
  }).then(res=>res.json()).then(response=>{
    console.log(response)
  console.log(response.joke)
   this.setState({joke:response.joke})
 this.setState({hasLoadedJoke:true})
 
 
  })


  




 
}

  render(){
var loaded;
if(this.state.hasLoadedJoke===false && this.state.hasPressedButton===true){
  loaded=<h2 style={{color:"green"}}>Loading...</h2>
}
  return (
    <BrowserRouter>
    <div className="App">
        <header className="App-header">
      <h1 className="randomgen">Random Joke/Roast/Humour/Meme Templates!</h1>
      <img className="jokepic" src={jokepic} alt="jokepic"/>
      <h2 style={{color:"lightseagreen"}}>Get your jokes and random humour!</h2>
 
    <h3 style={{color:"red"}}>Mode: {this.state.mode}</h3>
    <br></br>
    <div class="button_cont" align="center"><Link to="/meme-templates" target="_blank" ><a class="example_a" rel="nofollow noopener">MEME TEMPLATES</a></Link></div>
<br></br>

    <div  onClick={()=>{this.fetchApi()}}class="button_cont" align="center"><a class="example_a" rel="nofollow noopener">GENERATE JOKE</a></div>
{loaded}
    {
      this.state.mode==="Joke" && this.state.hasLoadedJoke===true && this.state.hasPressedButton &&
      (
        <Joke joke={this.state.joke}/>
      )
    }
    <h1 style={{color:"#F37335"}}>© Souritra Kar 2020</h1>
    <h2 style={{color:"green"}}> Check out my Quotes App: <a href="http://souritrakar.github.io/quotesapp">Quotes App</a></h2>
    <h2 style={{color:"#544a7d"}}> Check out my Movie Search App: <a href="https://souritrakar.github.io/movieappfinal/">Movie App</a></h2>
        </header>
    </div>
    </BrowserRouter>
  );
}
}

export default Home;
