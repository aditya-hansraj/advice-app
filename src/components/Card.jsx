import React from "react";

export default function Card(props) {
    const loadingStyle = {
        backgroundColor: "rgba(245, 245, 245, 0)"
    }
    return (
        <div className='card' style={props.onLoad ? loadingStyle : null}>
            <h1 className='heading'>{ props.advice }</h1>
            {!props.onLoad && (<button onClick={ () => {props.fetchAdvice()} } className='btn'>
                <span>GIVE ME ADVICE !</span>
            </button>)} 
        </div>
    )
};