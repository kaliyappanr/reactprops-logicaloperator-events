//import logo from './logo.svg';
import { createContext, useState } from "react";
import "./App.css";
// import Input from "./components/Input";
// import Effect from "./components/Statehooks&effects";
// import Design from "./components/Design";
// import Hooks from "./components/hooksandeffects";
// import State from "./components/state";
// import Firstchild from "./components/Usecontext";
// import userContext from "./components/Context";
// import Firstone from "./components/Newone";
// import testContext from "./components/Task";

import Levelone from "./Contexttask/Levelone";
import tasksContext from "./Contexttask/taskis";
import Usehook from "./components/Usehook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Newtwo from "./components/Newtwo";
// import { createContext } from "react";
function App() {
  // const Fname="Shanmugha_mahi";
  // const [pers,setPers]=useState("Sundhar");
  // const details = "Sundhar";
  // const [name,setName]=useState("Shanmugha");
  // const tname = "Tutor_Joes";
  const [tname,setTname]=useState("Tutor_Joes");
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    {/* <Design/> */}
    {/* <userContext.Provider value={name}>
    <Firstchild myid={name}/>
    </userContext.Provider>
    <testContext.Provider value={pers}>
    <Firstone mydata={pers}/>
    </testContext.Provider> */}
    <Usehook/>
    <tasksContext.Provider value={tname}>
    <Levelone mytask={tname}/>
    </tasksContext.Provider>
    <BrowserRouter>
    <Routes>
        <Route path="/hook" element={Hook}/>
    </Routes>
    </BrowserRouter>
    
    {/* <State/> */}
    {/* <Input/> */}
    {/* <Effect/> */}
    
    </div>
  );
}

export default App;
