import { useState } from "react"

export default function Hooks(){
    
    const [name,setName]=useState("");
    console.log(name);
    return(
        <>
        <h1>Statehooks And UseEffects :</h1>
        <form>
            <input value={name} onChange={(e)=>{console.log(setName(name))}} type="text" placeholder="Name"/>
        </form>
        </>
    )
}