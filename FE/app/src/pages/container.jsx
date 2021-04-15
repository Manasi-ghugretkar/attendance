import React, { useState } from 'react'
import Button from './forgot_button.jsx';
import './style.css';
import Changepass from './changepass.jsx';
import Forgotpass from './forgotpass.jsx';
//import { makeStyles } from "@material-ui/core/styles";



export default function Container(props) {




    const [state, changevariable] = useState("")

    const receivedata = (data) => {
        changevariable(data)
    }

    return (
        <div className="up-container">
        <div className="container1a">
            <div className="container1b">
                <Button
                    name="change password"
                    color="#ec407a"
                    receivedatafun={receivedata} ></Button>
                <Button
                    name="forgot password"
                    receivedatafun={receivedata} ></Button>
            </div>
            {/* <center> <Changepass/></center> */}
            <center>
                {
                    state === "forgot password" && <Forgotpass />
                }
                {
                    state === "change password" && <Changepass />
                }

            </center>
        </div>
        </div>
    )
}