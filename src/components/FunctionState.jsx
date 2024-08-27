// import React, { useState } from 'react'
// const FunctionState = () => {
//     const [count,setcount] = useState(0)
//     const [name, setname] = useState("MSD")
//     // const handleIncrement = () =>setcount(count+1)
//     console.log(count);
//   return (
//     <>
//     <h1>Count :{count} </h1>
//     {/* <button onClick={handleIncrement}>Add</button> */}
//     <button onClick={() =>setcount(count+1)}>Add</button>
//     <button onClick={() =>setcount((count>0) ? (count-1): 0)}>Minus</button>
//     <button onClick={() =>setcount(0)}>Reset</button>
//     <hr />
//     <h1>My name is {name}</h1>
//     <button onClick={()=>setname("Virat")}>Change my Name</button>
//     </>
//   )
// }
// export default FunctionState

import React, { useState } from "react";
import "./customcss.css";
import { HomeOne } from "./Props";

const FunctionState = () => {
  const [count, setcount] = useState({ value: 0 });
  const [array, setarray] = useState([25, 10]);
  const [isPlayer, setisPlayer] = useState(false);

  const handleAdd = () => {
    setcount({ value: count.value + 1 });
  };

  const handleArray = () => {
    setarray([...array, Math.floor(Math.random() * 50)]);
  };

  const handleMessage = () => {
    setisPlayer(!isPlayer); // t -> f
  };

  return (
    <div>
      {isPlayer ? (
        <>
          <div className="pop-up">
            <div className="card">
              <HomeOne />
              <h1 style={{ color: "rebeccapurple" }}>
                Is Dhoni playing for India
                <button className="btn-close" onClick={handleMessage}>❌</button>
              </h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <button onClick={handleMessage}>click</button>
        </>
      )}
      <h1 className="myvalue">My Value : {count.value}</h1>
      <button onClick={handleAdd}>Add</button>
      <h1>My Array : {JSON.stringify(array)}</h1>
      <button onClick={handleArray}>Change Array</button>
    </div>
  );
};

export default FunctionState;
