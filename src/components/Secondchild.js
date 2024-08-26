import Thirdchild from "./Thirdchild";
export default function Secondchild({myid}){
    return(
        <>        
        <h1>
            Secondchild -- {myid}
        </h1>
        <Thirdchild/>
        </>

    );
}