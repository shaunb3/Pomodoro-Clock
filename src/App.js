import React,{Component} from 'react';

import './App.css';
let sessionInterval
class App extends Component {

  state={
    breakLength:5,
    sessionLength:25,
    sessionTimeRemaining: 25*60,
    sessionActive:false,
    breakActive:false,
    currentDisplay:"Session"
  }


playPause=()=>{
  


  if(this.state.sessionActive === false){
      

      sessionInterval = setInterval(()=>{
      

      if(this.state.sessionTimeRemaining===0){

        this.state.currentDisplay==="Session" ?
          this.setState({
            sessionTimeRemaining:this.state.breakLength*60 ,currentDisplay:"Break"})
            :this.setState({
            sessionTimeRemaining:this.state.sessionLength*60 ,currentDisplay:"Session"})
      }
      else{
        this.setState((prevState) => {return    {sessionTimeRemaining:prevState.sessionTimeRemaining -1}})
      }


    },1000)
    this.setState({sessionActive:true})

   
  }
  else{
    clearInterval(sessionInterval)    
    this.setState({sessionActive:false})
    

  }

  
  
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

componentDidUpdate(prevProps,prevState) {
  // Typical usage (don't forget to compare props):
  if (this.state.sessionLength !== prevState.sessionLength) {
    this.setState({sessionTimeRemaining:this.state.sessionLength*60})
  }
} //needs prevProps enent not using, else infinite loop


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

      <div className="display">
      <h2>{this.state.currentDisplay}</h2>
        <h3>{`${Math.floor(this.state.sessionTimeRemaining/60)}:${this.state.sessionTimeRemaining%60} `}</h3>
        <button onClick={this.playPause} disabled={this.state.sessionActive}>Play</button>
        <button onClick={this.playPause} disabled={!this.state.sessionActive}>Pause</button>
      </div>




    </div>
  );
}


}

export default App;
