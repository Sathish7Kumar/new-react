import React, { useState } from "react";

const List = () => {

  const [data, setdata] = useState([])

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
    let newData = {
      newName: oldDetails.myname,
      newAge: oldDetails.age,
    }
    setdetails(newData);  
    data.push(newData)
    oldDetails.myname = ""
    oldDetails.age = ""
  }; 

  let filteredData = data.filter((item)=>{
    return item.newAge >= 18
  })

  const handleDelt  = (i) =>{
    alert(i+'delted')
  }
  

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="myname"
          value={oldDetails.myname}
          required
          onChange={handleInp}
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="age"
          value={oldDetails.age}
          required
          onChange={handleInp}
        />{" "}
        <br /> <br />
        <button>Submit</button>
      </form>
      <hr />
      {/* <div>
        <h1>My name is : {details.newName} </h1>
        <h1>My Age is : {details.newAge} </h1>
      </div> */}
      {filteredData.length > 0 ? 
      <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item,index)=>{
            return (
              <tr key={index}>
                <td>{item.newName}</td>
                <td>{item.newAge}</td>
                <td><button onClick={()=>handleDelt(index)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </> 
      :
      <>
      <h1>Data is Empty - No one age is greater then 1</h1>
      </>
       }
    </div>
  );
};

export default List;
