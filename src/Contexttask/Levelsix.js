import Levelseven from "./Levelseven";

export default function Levelsix({mytask}){
    return(
        <>
        <h3>Level Six is Sccessfully Complted -- {mytask}</h3>
        <Levelseven mytask={mytask}/>
        </>
    )
}