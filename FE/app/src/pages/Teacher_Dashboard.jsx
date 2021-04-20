import React, { useState } from 'react';
import Appbar from "../reuseableComponent/AppBar.jsx";
import InputContainer from "./inputContainer.jsx"
import IndetailTable from "./indetail_page.jsx";
import OverviewTable from "./overview_page.jsx";

 


export default function TeacherDashboard(props) {

    const [state,changestate]=useState("")

    const getData=(data)=>{
        console.log("app.js",data)
        changestate(data)

    }


    return (
        <>
            <Appbar
            name="Teacher Dashboards"></Appbar>
            <InputContainer sendFunction={getData}></InputContainer>
            {
                state==="" && ""
            }
            {
                state==="overview" &&  <OverviewTable></OverviewTable>
            }
            {
                state==="long" && <IndetailTable></IndetailTable>
            }
            
           
        </>
    )
}
