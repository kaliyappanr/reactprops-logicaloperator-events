// export default function Levelten(props){
//     return(
//         <>
//         <h3>Level Ten is Sccessfully Complted -- {props.mytask}</h3>



        
//         </>
//     )
// }

import { useContext, useEffect, useState } from "react"
import tasksContext from "./taskis"

export default function Levelten(){
    const [color,setColor]=useState("white")
    const click = color=>{
        setColor(color)
    }
    useEffect(()=>{
         document.body.style.backgroundColor = color
         
    },[color])
    const name = useContext(tasksContext)
    return(
        <>
        <h2>Use Context conncept first_task Completed -- {name}</h2>
        <h3 style={{padding:"2rem",color:"darkred"}}>Background Change Color</h3>
        <button style={{margin:"1rem"}}onClick={()=>click("lightgreen")}>COLOR_CHANGE</button>
        </>
    )
    
}