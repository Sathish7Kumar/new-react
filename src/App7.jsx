// import React, { useEffect, useState } from "react";

// const App7 = () => {
//   const [products, setproducts] = useState([]);

//   async function getResponse() {
//     try {
//       const resp = await fetch("https://fakestoreapi.com/products");
//       const data = resp.json();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   async function getData() {
//     try {
//       const data = await getResponse();
//       setproducts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(()=>{
//     getData();
//   },[])

//   console.log(products);

//   return (
//     <div>
//       {products.map((i,ix) =>
//     <div key={ix}>
//         <h1>{i.title}</h1>
//         <h2>{i.price}</h2>
//     </div>
//     )}
//     </div>
//   );
// };

// export default App7;

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FetchCart from "./Fetch/FetchCart";
import FetchHome from "./Fetch/FetchHome";
import FetchProducts from "./Fetch/FetchProducts";
import Fetchnavbar from "./Fetch/Fetchnavbar";
import FetchProductDetails from "./Fetch/FetchProductDetails";

export const ProductsContext = createContext()

const App7 = () => {
  const [products, setproducts] = useState([]);
  const getResponse = async () => {
    try {
      const respone = await axios.get("https://fakestoreapi.com/products");
      setproducts(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResponse();
  }, []);
  return (
    <ProductsContext.Provider value={{products,setproducts}}>
    <BrowserRouter>
    <Fetchnavbar/>
    <Routes>
        <Route path="/" element={<FetchHome/>}/>
        <Route path="/cart" element={<FetchCart/>}/>
        <Route path="/products" element={<FetchProducts/>}/>
        <Route path="/products/:id" element={<FetchProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    </ProductsContext.Provider>
  );
};

export default App7;
