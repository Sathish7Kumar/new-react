import React, { useState } from "react";

const Vote = () => {

  const [age, setage] = useState("");
  const [message, setmessage] = useState("");

  const handleAge = (e) => setage(e.target.value);

  const handleVote = () => {
    if (age >= 18) {
      setmessage("you can vote");
    } else {
      setmessage("you are not eligible to vote");
    }
  };
//   console.log(age);
  
  return (
    <div>

        {/* <label htmlFor="username">Name</label>
        <input type="text"  id="username" /> */}

      <input
        type="range"
        onChange={handleAge}
        min={0}
        max={120}
      />
      <input
        type="text"
        style={{ width: "30px",textAlign:"center" }}
        value={age}
        readOnly 
      />
      <h1>My age is {age} </h1>
      <button onClick={handleVote}>Vote Check</button>
      <button onClick={()=>setage(0)}>Reset</button>
      {message && <><p>{message}</p></>}
    </div>
  );
};

export default Vote;
