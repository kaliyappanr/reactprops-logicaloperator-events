// export default function Thirdchild(props){
//     return(
//         <h1>Thirdchild -- {props.myid}</h1>
//     );
// }

import { useContext } from "react";
import userContext from "./Context";
export default function Thirdchild(){
    const shan = useContext(userContext)
    return(
            <h1>
                Hello - {shan}
            </h1>
    );
}