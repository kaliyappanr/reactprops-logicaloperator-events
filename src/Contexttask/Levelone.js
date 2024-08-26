import Leveltwo from "./Leveltwo"
export default function Levelone({mytask}){
    return(
        <>
        <h3>Level One is Sccessfully Complted -- {mytask}</h3>
        <Leveltwo mytask={mytask}/>
        </>
    )
}