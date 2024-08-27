import React, { Component } from 'react'

 class LifeCycle extends Component {
    constructor(){
        super()
        this.state= {
            count :0,
        }
        console.log("constructor function called");
    }
    componentDidMount(){
        console.log("component mounted");
    }
    componentDidUpdate(){
        console.log("component updated and Re-rendered");
    }
    componentWillUnmount(){
        console.log("component unmounted");
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
    handleReset= ()=>{
        this.setState({
            count : 0
        })
    }
  render() { 
    
        console.log("render");
        
    return (
      <>
      <h2>My Count : {this.state.count}</h2>
      <button onClick={this.handleAdd}>Increment</button>
      <button onClick={this.handleMinus}>Decrement</button>
      <button onClick={this.handleReset}>Reset</button>
      </>
    )
  }
}
export default LifeCycle
