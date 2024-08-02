// export default function Conditional(props) {
    
//   const Weather = props.rain;
//   if (Weather) {
//     return <h1>Rainy </h1>;
//   }
//   return <h1>Summer Climate</h1>;
// }

// export default function Conditional(props){
//     const workers = props.data;
//     console.log(workers);
//     return(
//         <>{
//                 workers.length >0 && <h1>You have {workers.length} in user data</h1>
//             }
//         </>
//     );
//};
export default function Conditional(props){
    let Weather =props.climate;
    return(
        <>
       <h1>
        {
            (Weather == 'winter' ? (<span>Climate is winter</span>) :(<span>Climate rainy</span>))
        }
       </h1>
        </>
    );
}