import React, { useState } from "react";

const Homepage = () => {

  const [oldDetails, setoldDetails] = useState({
    myname: "",
    age: "",
  });

  const [details, setdetails] = useState({
    newName: "",
    newAge: "",
  });

  const handleInp = (e) => {  
    
    const {name,value} = e.target
    
    setoldDetails(
    (prevState) => ({
      ...prevState,
      [name]:value
    })
  )
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setdetails({
      newName: oldDetails.myname,
      newAge: oldDetails.age,
    });    
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="myname"
          // value={oldDetails.myname}
          required
          onChange={handleInp}
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="age"
          // value={oldDetails.age}
          required
          onChange={handleInp}
        />{" "}
        <br /> <br />
        <button>Submit</button>
      </form>
      <hr />
      <div>
        <h1>My name is : {details.newName} </h1>
        <h1>My Age is : {details.newAge} </h1>
      </div>
    </div>
  );
};

export default Homepage;
