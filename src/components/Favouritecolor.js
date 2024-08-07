// import { useState } from "react";

// import React from "react";

// function Favouritecolor(){
//     // var Color = "Green"
//     const [Color,setColor] = useState("Green")
//     return(
//         <>
//         <h1>My Favourite Color in {Color}</h1>
//         <button onClick={(()=>{setColor("Yellow");})}>Change Color</button>
//         </>
//     )
// }

// export default Favouritecolor;

export default function list() {
  const users= ['Kaliyappan R','Shanmugha','Sundhar','Tutor Joes','Angel John'];
//   let datas = [
//     {
//       id: 1,
//       Fname: "KALIYAPPAN R",
//       Place: "Salem",
//     },
//     {
//       id: 2,
//       Fname: "SHANMUGHA",
//       Place: "Chennai",
//     },
//     {
//       id: 3,
//       Fname: "SUNDHAR",
//       Place: "Covai",
//     },
//     {
//       id: 4,
//       Fname: "TUTOR JOES",
//       Place: "Trichy",
//     },
//     {
//       id: 5,
//       Fname: "ANGEL JOHN",
//       Place: "Karur",
//     },
//     {
//       id: 6,
//       Fname: "STANLEY",
//       Place: "Hosur",
//     },
//   ];
  return (
    <>
      <h1>List :</h1>
      {/* <h2>{users}</h2> */}
      <ul>
        {users.map((value)=>(<li><h2 key={users}>{value}</h2></li>))}
        {/* {<h2 key={users}>{users}</h2>} */}
        {/* {datas.map((data) => (
          <li key={data.id}>
            <h2>
              {data.id} - {data.Fname} - {data.Place}
            </h2>
          </li>
        ))} */}
      </ul>
    </>
  );
}
