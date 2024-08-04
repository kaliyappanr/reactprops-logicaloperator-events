//import Profile from "./components/User";
//import logo from './logo.svg';
import "./App.css";
import Profile from "./components/Profile";
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
  // const detail ={
  //   Name : 'Shanmugha',
  //   Desc : 'salem',
  //   Course : 'B.E-ECE'
  // };
  // var place = 'Chennai';
  // var year = 'Two';
  // const deatils = 'Shanmugha';
  // const detail ={};
  const personlist=[
        {Fname : 'Shanmugha', Place : 'Salem', Code :'5245'},
        {Fname : 'Prathap', Place : 'Omalur', Code :'2341'},
        {Fname : 'Prasath', Place : 'trichy', Code :'2313'}
  ];

  const numbers =[1,2,3,4,5,6,7,8,9,10];
  // const userinfo = detail.Name !== undefined && detail.Desc !== undefined && detail.Course !== undefined
  // const isdooropened= false;
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
      {/* <Profile user ={deatils}/> */}
      {/* { userinfo ?<Profile user ={detail}/> : null }  */}
      {/* { userinfo &&<Profile user ={detail}/>} */}
      {/* <Profile place ={place} year={year}/> */}
      {/* {isdooropened ? <h3>Door is Opened </h3>:<h3>Door is closed</h3>} */}
      <Profile list ={personlist}/>
      <ul>
        {personlist.map((value)=><li key={value.Fname}><Profile list={value}/></li>)}
      </ul>
      <ul>
          {numbers.map((f,index)=><p key ={index}>{f}</p>)}
      </ul>
    </div>
  );

}

export default App;
