import React, { useContext, useReducer } from 'react'
import { Amount } from '../App8'

const transaction = (state,action) =>{

    switch(action.type){
        case "DEPOSIT":
            return state + action.payload
        break
        case "WITHDRAW":
            return state - action.payload
        break
        default :
            return state

    }
}

const Reducer = () => {

    const newState = useContext(Amount)
    const initialState = newState.amount

     const [state, dispatch] = useReducer(transaction,initialState)


    const handleDepist = (amount) =>{
        // dispatch(action)
        dispatch({type:"DEPOSIT",payload:amount})
        alert("Deposited")
    }

    const handleWithdraw = (amount) =>{
        dispatch({type:"WITHDRAW",payload:amount})
        alert("Withdrawn")
    }
    

  return (
    <div>
        <h1>My Balance : {state}</h1>
        <button onClick={()=>handleDepist(500)}>Deposit</button>
        <button onClick={()=>handleWithdraw(500)}>Withdraw</button>
    </div>
  )
}

export default Reducer