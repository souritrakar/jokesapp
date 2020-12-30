import Memepage from "./Memepage"
import './App.css';
import React from "react"
import jokepic from "./logopic.png"
import Joke from "./Joke"
import {BrowserRouter,Link,Route,Switch,Redirect} from "react-router-dom"
import Home from "./Home"


class App extends React.Component {
  

  render(){



  return (
    
 
    <div className="App">
      
      <BrowserRouter>
<Switch >

    <Route exact path="/jokesapp" component={Home}/>
   
  
      <Route   path="/memetemplates" component={Memepage}/>
      </Switch>


    


      </BrowserRouter>

    </div>

     
    
 
  );
}
}

export default App;
