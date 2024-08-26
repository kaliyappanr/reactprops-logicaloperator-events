import Levelsix from "./Levelsix";

export default function Levelfive({mytask}){
    return(
        <>
        <h3>Level Five is Sccessfully Complted -- {mytask}</h3>
        <Levelsix mytask={mytask}/>
        </>
    )
}