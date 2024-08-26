import Levelthree from "./Levelthree"
export default function  Leveltwo({mytask}){
    return(
        <>
        <h3>Level Two is Sccessfully Complted -- {mytask}</h3>
        <Levelthree mytask={mytask}/>
        </>
    )
}