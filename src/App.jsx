import { useState } from 'react';
import './App.css';
import Effect from './components/Effect';
import FunctionState from './components/FunctionState';
import LifeCycle from './components/LifeCycle';
import Props from './components/Props';
import Home from './components/PropsDrilling/Home';
import State from './components/State';
import Button from './components/PropsDrilling/Button';

function App() {
  const [name] = useState("Dhoni")
  const [count, setcount] = useState(0)
  const handleAdd = ()=>{
    setcount(count+1)
  }
  return (
    <>
    <h2>React APP</h2>
    {/* <Props name="DHONI" age="22"/> */}
    {/* <State/> */}
    {/* <FunctionState/> */}
    {/* <LifeCycle/> */}
    {/* <Effect/> */}
    <Home name={name} count={count} handleAdd={handleAdd} />
    </>
  );
}

export default App;
