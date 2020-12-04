import React from "react";

export default function Day(props) {
    console.log("Slide " + props.day);
    return (
        <div className="page">Detailed page for the date: {props.day}. <br></br>Slide to go to the next day</div>
    );
}