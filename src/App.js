import Memepage from "./Memepage"
import './App.css';
import React from "react"
import jokepic from "./logopic.png"
import Joke from "./Joke"
import {BrowserRouter as Router,Link,Route,Switch,Redirect, BrowserRouter} from "react-router-dom"
import Home from "./Home"


class App extends React.Component {
  

  render(){



  return (
    
 
    <div className="App">
      
      <BrowserRouter>


    <Route exact path="/jokesapp" component={Home}>
   
    </Route>
      <Route path="/meme-templates" component={Memepage}/>


    


      </BrowserRouter>

    </div>

     
    
 
  );
}
}

export default App;
