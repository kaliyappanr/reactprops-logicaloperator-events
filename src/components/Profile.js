export default function Profile(props){
    //var place = 'Coimbatore'
    // var {place}=props
    // var {year} =props
    // var text = `Hai I am From ${place} and working ${year} years`
    return(
        <>
        {/* <h1>
            Hai i am {props.user.Name}
        </h1>
        <h2>
            I am from {props.user.Desc}
        </h2>
        <h2>
            And Studying {props.user.Course}
        </h2> */}
        {/* <h1>{text}</h1> */}
        {/* {props.user} */}
        <h1>Hai I am {props.list.Fname} from {props.list.Place} state code is {props.list.Code}</h1>
        {/* <h1>{props.list.Place}</h1>
        <h1>{props.list.Code}</h1> */}
        </>
    );
}

