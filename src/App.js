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
    <BrowserRouter>
 
    <div className="App">
      
     
<Switch >

    <Route exact path="/jokesapp" component={Home}/>
   
  
      <Route path="/jokesapp/memetemplates/" component={Memepage}/>
      </Switch>


    


   

    </div>
    </BrowserRouter>

     
    
 
  );
}
}

export default App;
