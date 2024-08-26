// export default  function Newthree(props){
//     return(
//         <h1>Good --{props.mydata} </h1>
//     )
// }

import { useContext } from "react"
import testContext from "./Task"

export default  function Newthree(){
    const fname = useContext(testContext)
    
    return(
        <>
        <h1>Good -- {fname}</h1>
        {/* <button>COLOR</button> */}
        </>
    )
}