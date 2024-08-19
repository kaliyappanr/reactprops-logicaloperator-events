import { useState } from "react"

export default function Effect(){
    const [name,setName]=useState("");
    console.log(name);
    
    return(
        <>
        <form>
            <label>Enter Your Name : </label>
            <input value={name} type="text" placeholder="Your Name"/>
        </form>
        </>
    )
}