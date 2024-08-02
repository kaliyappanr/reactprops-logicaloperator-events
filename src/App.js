//import Profile from "./components/User";
//import logo from './logo.svg';
import "./App.css";
//import Users from "./components/User";
import Conditional from "./components/Whether";
function App() {
  //  const student ={
  //       Fname : 'Shanmugha',
  //       Degree : 'Bachelor of Engineerig',
  //       Course : 'ECE',
  //       Experience : 'Fresher',
  //       Salary :'28000'
  //  };
  // const Warning = () => {
  //   alert("Check Your Details");
  // };

  // function Warning() {
  //   console.warn('Check your deatils');
  // }

  // let AlertCode=(message)=>{
  //       alert(message)
  // };

  // let Coder=(greet)=>{
  //   alert(greet)
  // };

  // Logical Operator
  let employee = ["shanmugha", "kali", "sundhar", "john", "Stanley"];
  console.log(employee.length);
  
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
      {/* <Users datas ={student}/> */}
      {/* <Users Fname = 'Shanmugha'/> */}
      {/* <h1>Shanmugha_Mahi</h1> */}
      {/* <button onClick={()=>console.log('Button is clicked')}>Click</button> */}
      {/* <button onClick={()=>AlertCode('Hello Coder')}>Click</button> */}
      {/* <button onClick={()=>Coder('Have a Joyfull day Coder')}>Coder</button> */}
      {/* <Conditional data={employee}/> */}
      {/* <Conditional rain={false}/> */}
      {/* <Conditional rain={false}/> */}
      <Conditional climate='winter'/>
    </div>
  );
}

export default App;
