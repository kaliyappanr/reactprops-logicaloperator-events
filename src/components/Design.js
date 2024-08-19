import { useEffect, useState } from "react";

export default function Design() {
  const [data,setData]=useState([]);
  // useEffect((async)=>{
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then((response) => response.json())
  // .then((json) => setData(json));
  // console.log(data);
  // },[])
  useEffect(()=>{
  async function getData() {
    const url ='https://jsonplaceholder.typicode.com/users';
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`Response Status: ${response.status}`)
      }
      const json = await response.json();
      setData(json);
      console.log(json);
    }catch(error) {
      console.error(error.message);
      
    }
  }

    getData();
  },[])
 

  return(
    <>
    {data.map((user)=>
      <p>
        {`Id : ${user.id}`} -- {`Name : ${user.name}`} -- {`Email : ${user.email}`}
      </p>
    )}
    </>
  )
}
