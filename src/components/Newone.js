import Newtwo from "./Newtwo";

export default function Firstone({mydata}){
    return(
        <>
        <h1>Welcome -- {mydata}</h1>
        <Newtwo mydata={mydata}/>
        </>
        
    )
}