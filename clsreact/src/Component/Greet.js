import React from "react";

// function Greet(){
//     return <h1>hello Vishwas</h1>
// }

// const Greet =(props) => {
//     console.log(props)
//     // props.name ='Vishwas' 
//     // gets an error as cannot
//     // assign to read only property 'name of object
//     return(
//     <div>
//         <h1>
//             Hello {props.name} a.k.a {props.heroName}
//         </h1>
//         {props.children}
//     </div>
//     )
// }

//Destructuring props and state
const Greet =props => {

    const {name,heroName} = props
    return(
    <div>
        <h1>
            Hello {props.name} a.k.a {props.heroName}
        </h1>
        {props.children}
    </div>
    )
}

export default Greet