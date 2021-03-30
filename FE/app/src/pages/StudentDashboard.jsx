import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Studentdashboard(props) {
    let isValid = localStorage.getItem('IS_LOGGED_IN');
    console.log(isValid);
    if (isValid === 'false') {
        return (<Redirect to='/login'></Redirect>);
    }
    else{
        return (
            <>
                <center><h5>this is student dashboard</h5></center>
            </>
        );
    }
}
