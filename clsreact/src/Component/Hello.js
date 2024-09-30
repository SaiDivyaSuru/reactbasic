import React from "react";

const Hello = () => {
    // return (
    //     <div><h1>Hi User </h1></div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'Hi User'))
}

export default Hello