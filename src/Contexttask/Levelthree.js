import Levelfour from "./Levelfour";

export default function Levelthree({mytask}){
    return(
        <>
        <h3>Level Three is Sccessfully Complted -- {mytask}</h3>
        <Levelfour mytask={mytask}/>
        </>
    )
}