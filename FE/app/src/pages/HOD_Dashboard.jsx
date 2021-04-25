import React, { useState } from 'react'
import AppBar from "../reuseableComponent/AppBar.jsx"
import InputContainer from "./hod-inputContainer.jsx"
import Cards from "./attendance_card.jsx"
import IndetailTable from "./indetail_page.jsx";
import OverviewTable from "./overview_page.jsx";




export default function HodDashboard(props) {

    const [state, changestate] = useState("")

    const getData = (data) => {
        console.log("app.js", data)
        changestate(data)
    }


    const subjects = ["os", "atc", "dbms", "data structure", "unix", "daa"]
    const colors = ["#fce4ec", "#e3f2fd", "#f0f4c3", "#b9f6ca", "#d1c4e9", "#ccff90"]


    return (
        <>
            <AppBar name="HOD Dashboard" ></AppBar>
            <InputContainer sendFunction={getData}></InputContainer>
            {
                state === "" && <div className="Hodcontainer">
                    {
                        subjects.map((element, i) => <div className="up-cardcontainer" style={{ marginLeft: 50 }}><Cards color={colors[i]} ></Cards></div>)

                    }
                </div>
            }

            {
                state === "overview" && <OverviewTable></OverviewTable>
            }
            
            {
                state === "long" && <IndetailTable></IndetailTable>
            }
        </>
    )
}