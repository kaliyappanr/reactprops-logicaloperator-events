import { useState } from "react";

export default function Input() {
  // const [name,setName]=useState("");
  const [data, setData] = useState({

  });
  const changeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(values=>({...values,[name]: value}));   
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <>
    <form>
      <label>Enter Your First_Name : </label>
      <input
        type="text"
        value={data.fname}
        name="fname"
        // onChange={(e) => setName(e.target.value)}
        onChange={changeHandler}
      />
{/*       
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button> */}
    </form>
    <form>
    <label>Enter Your Last_Name : </label>
    <input
      type="text"
      value={data.lname}
      name="lname"
      // onChange={(e) => setName(e.target.value)}
      onChange={changeHandler}
      
    />
    <br/>
    <br/>
    <br/>
    <button type="submit" onClick={handleSubmit}>
      Submit
    </button>
  </form>
  </>
  );
}
