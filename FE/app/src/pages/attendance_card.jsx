import React from 'react';
import './style.css'

export default function Cards(props) {
    return (

        <div className="cardContainer"
            style={{ backgroundColor: props.color }}>
            
                <h4>Subject: xyz</h4>
                <h4>Total Classes: 80</h4>
                <h4>Faculty: xyz</h4>
                <h4>Average Attendance: xyz</h4>


            </div>
        
    );
}