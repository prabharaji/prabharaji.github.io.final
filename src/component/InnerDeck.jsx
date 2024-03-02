import React, { useState,useContext } from "react";
import Seat from "./Seat";


function InnerDeck(props){
    const row = props.row;
    // console.log(props.toggle);
    const buttonToggle = props.toggle;
    const onButtonToggle = props.onToggle;

    return(
        row.map((seatNo,index) =>{
            return(
                <Seat number={seatNo} key={index} /> 
            )
        })
    )
}

export default InnerDeck;