// import React, { useState } from 'react'
// import Reducer from './components/Reducer'
// import { createContext } from 'react'

// export const Amount = createContext()

// const App8 = () => {

//     const [amount, setamount] = useState(500)

//     // console.log(amount);
    
//   return (
//     <Amount.Provider value={{amount,setamount}}>
//         <Reducer/>
//     </Amount.Provider>
//   )
// }

// export default App8

// import React, { useMemo, useState } from 'react'

// const App8 = () => {
//     const [count, setcount] = useState(0)
//     const [array, setarray] = useState([25,10])

//     const handleadd = ()=>{
//         setcount(count+1)
//     }

//     const handlearray = ()=> {
//         setarray([...array,(Math.round(Math.random()*100))])
//     }

//     function max(){
//         console.log("Maximum Function Calling")
//         return Math.max(...array)
//         // Math.max(array) => Math.max([25,10,61])
//         // Math.max(...array) => Math.max(25,10,61)
//     }

//     const maxValue = useMemo(()=> max(),[array])

//     console.log("re-render")
//   return (
//     <div>
//         <h1>Count Value : {count}</h1>
//         <button onClick={handleadd}>Add</button>
//         <br />
//         <h1>Array : {JSON.stringify(array)}</h1>
//         <h3>{maxValue}</h3>
//         <button onClick={handlearray}>Change Array</button>
//     </div>
//   )
// }

// export default App8

import React, { useId, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App8 = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const [users, setusers] = useState([])

    const id = useId()

    const handleSubmit = (e) => {
      e.preventDefault()
      const newUser = {
        id : uuidv4(),
        username : username,
        password : password
      }
      setusers((pre)=>[...pre,newUser]);
    };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName : </label>
        <input
          id="username"
          value={username}
          type="text"
          onChange={(e) => setusername(e.target.value)}
        />
        <label htmlFor="pswd">Password : </label>
        <input
          id="pswd"
          value={password}
          type="text"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <div>
        {users.map((e,i)=>{
            return (
                <div key={i}>
                    <h3>Name : {e.username}</h3>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default App8