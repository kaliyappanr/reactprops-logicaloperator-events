import Levelfive from "./Levelfive";

export default function Levelfour({mytask}){
    return(
        <>
        <h3>Level Four is Sccessfully Complted -- {mytask}</h3>
        <Levelfive mytask={mytask}/>
        </>
    )
}