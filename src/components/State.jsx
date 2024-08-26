import React, { Component } from 'react'

 class State extends Component {
    state= {
        count :0,
        color : "red"
    }
    handleAdd = () =>{
        this.setState({
            count : Math.round(Math.random()*10)
        })
    }
    handleMinus = () =>{
        if(this.state.count > 0){
            this.setState({
                count : this.state.count-1
            })
        }
    }
    // handleReset= ()=>{
    //     this.setState({
    //         count : 0
    //     })
    // }
    handleColor = () =>{
        this.setState({
            color : "blue"
        })
    }
  render() { 
    
    console.log("re-render",this.state.count);
    
    return (
      <>
      <h2>My Count : {this.state.count}</h2>
      <button onClick={this.handleAdd}>Increment</button>
      <button onClick={this.handleMinus}>Decrement</button>
      <button onClick={
        ()=>{
        this.setState({
            count : 0
        })
    }
    }>Reset</button>
    <h3>My fav color is {this.state.color}</h3>
    <button onClick={this.handleColor}>Change Color</button>
      </>
    )
  }
}
export default State
