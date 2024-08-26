import Secondchild from "./Secondchild";
export default function Firstchild({myid}){
    return (
        <>
        <h1>Firstchild -- {myid}</h1>
        <Secondchild myid={myid}/>
        </>
    );
}