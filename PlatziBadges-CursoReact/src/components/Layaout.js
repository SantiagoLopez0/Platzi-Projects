import React from 'react'
import Navbar from "../components/Navbar";

const Layaout = (props) => {
    // const children = props.children
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layaout;
