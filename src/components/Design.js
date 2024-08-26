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
    const url ='https://jsonplaceholder.typicode.com/posts';
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
    // {m-1}
    <div class="m-1 card" style={{width:"15rem"}}>
    <div class="card-body">
    <h5 class="card-title">{user.id}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{user.title}</h6>
    <p class="card-text">{user.body}</p>
    {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
  </div>
</div>
    

      // <p>
      //   {`Id : ${user.id}`} -- {`Tittle : ${user.title}`}
      // </p>
    )}
    </>
  )
}
