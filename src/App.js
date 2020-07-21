import React,{Component} from 'react';

import './App.css';

class App extends Component {

  state={
    breakLength:5,
    sessionLength:25
  }

  handleClick=(event)=>{
    if(this.state.breakLength<1 || this.state.sessionLength<1){
      return
    }

    else if(event.target.id ==="break-increment"){
      this.setState((prevState)=> {return{breakLength: prevState.breakLength + 1}})
    }

    else if(event.target.id ==="break-decrement"){
      if(this.state.breakLength>1){
        this.setState((prevState)=> {return{breakLength: prevState.breakLength - 1}})
      }
    }

    else if(event.target.id ==="session-increment"){
      this.setState((prevState)=> {return{sessionLength: prevState.sessionLength + 1}})
    }

    else if(event.target.id ==="session-decrement"){
      if(this.state.sessionLength>1){
        this.setState((prevState)=> {return{sessionLength: prevState.sessionLength - 1}})
      }
    }
    


  }

render(){
    return (
    <div className="App">
      <div className="break">
        <h3 id="break-label">Break length</h3>
        <h3>{this.state.breakLength}</h3>
        <button onClick={this.handleClick} id="break-increment">+</button>
        <button onClick={this.handleClick} id="break-decrement" disabled={this.state.breakLength===1 ? true: false}>-</button>
      </div>

      <div className="session">
      <h3 id="session-label">Session length</h3>
        <h3>{this.state.sessionLength}</h3>
        <button id="session-increment"  onClick={this.handleClick}>+</button>
        <button id="session-decrement" onClick={this.handleClick} disabled={this.state.sessionLength===1 ? true: false}>-</button>
      </div>
    </div>
  );
}


}

export default App;
