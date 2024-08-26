import Levelnine from "./Levelnine";

export default function Leveleight({mytask}){
    return(
        <>
        <h3>Level Eight is Sccessfully Complted -- {mytask}</h3>
        <Levelnine mytask={mytask}/>
        </>
    )
}