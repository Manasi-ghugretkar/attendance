import React from 'react';
import './style.css';


export default function Buttoncomp(props) {
    const handleClick=()=>{
        if(props.name==="forgot password")
        {
            props.receivedatafun("forgot password");
        }
        else
        {
            props.receivedatafun("change password");
        }
    }

    return (
        <div className="button">
            <button onClick={handleClick} 
            style={{backgroundColor:"#ad1457",padding:13,borderRadius:5,margin:5,color:"white"}}>{props.name}</button>
        </div>
    );
}