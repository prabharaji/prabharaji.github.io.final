import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {ToggleContext} from "./Deck";
import {FormContext} from "./Booking";
import {info} from "./Form";

// localStorage.clear();

// const bookedSeatsNoTempObj = localStorage.getItem("bookedSeatsNoTemp");
// const bookedSeatsNoTemp = JSON.parse(bookedSeatsNoTempObj);

export let seats=[];
let lsSeats=[];
let lsSeatsTemp=[];
let lsInfoTemp={
    "fname" : "",
    "lname" : "",
    "email" : ""
};

let lsInfo={
    "seats" : lsSeatsTemp,
    "info" : lsInfoTemp
};

let seatArr=[];

console.log("global");

function Seat(props){

    const location = useLocation();
    const deleteInfo = location.state;


    // console.log(deleteInfo);
    // console.log(dseat);

    const {btnToggle, setBtnToggle} = useContext(ToggleContext);
    const {formToggle, setFormToggle, submitToggle, setSubmitToggle} = useContext(FormContext);

    // const lsSeatsObj = localStorage.getItem(JSON.parse('booked-seats'));

    const [seatStatus, setSeatStatus] = useState(false);
    const [seatAlive, setSeatAlive] = useState(false);
    const [seatColor, setSeatColor] = useState("seat-a");
    

    const bookedSeatsNoObj = localStorage.getItem("bookedSeatsNo");
    const bookedSeatsNo = JSON.parse(bookedSeatsNoObj);

    // const bookedSeatsNoTempObj = localStorage.getItem("bookedSeatsNoTemp");
    // let bookedSeatsNoTemp = JSON.parse(bookedSeatsNoTempObj);

    useEffect(()=>{
        console.log("initial render");
        // if(bookedSeatsNoTempObj!==null){
        //     bookedSeatsNoTemp=[];
        // }
        

        if(bookedSeatsNoObj!==null){
            lsSeats=bookedSeatsNo;
            bookedSeatsNo.forEach((item)=>{
                if(item===props.number){
                    setSeatStatus(false);
                    setSeatColor("seat-ua");
                    setSeatAlive(true);
                }
            })
        }
            
    },[]);

    
    useEffect(()=>{
        console.log("deleteInfo");
        console.log(deleteInfo);
        if(deleteInfo!==null){
            const [deleteToggle, dseat] = deleteInfo;
            if(deleteToggle){
                seatArr = dseat;
                console.log(seatArr);
                console.log("useEffect-deleteToggle True");
                if(seatArr!==null){
                    seatArr.map((item) =>{
                        if(item===props.number){
                            console.log(item);
                            setSeatStatus(false);
                            setSeatColor("seat-a");
                            setSeatAlive(false);
                        } 
                    });
                }
    
            }
        }
                    
    },[deleteInfo]);


    useEffect(()=>{
        if(!formToggle){
            if(submitToggle){
                console.log("useEffect-submitToggle false");
                if(seats.length!==0){
                    if(seats.includes(props.number)){
                        setSeatStatus(false);
                        setSeatColor("seat-ua");
                        setSeatAlive(true);
                    
                        lsSeats.push(props.number);
                        lsSeatsTemp.push(props.number);
                        localStorage.setItem("bookedSeatsNoTemp",JSON.stringify(lsSeatsTemp));
                        localStorage.setItem("bookedSeatsNo",JSON.stringify(lsSeats));
                        lsInfoTemp = info;
                        lsInfo = {
                            "seats" : lsSeatsTemp,
                            "info" : lsInfoTemp
                        }
                        localStorage.setItem("bookedInfoTemp",JSON.stringify(lsInfoTemp));
                        localStorage.setItem("bookedInfo",JSON.stringify(lsInfo));
                        
                        seats = seats.filter(function(item) {
                            return item !== props.number;
                        });
                        console.log(seats);
                    }
                    
                }
            }
                // setBtnToggle(!btnToggle);
        }
        else{
            setBtnToggle(!btnToggle);
            lsSeatsTemp=[];
            lsInfoTemp={
                "fname" : "",
                "lname" : "",
                "email" : ""
            };
            lsInfo = {
                "seats" : lsSeatsTemp,
                "info" : lsInfoTemp
            };
        }
    },[formToggle]);

    function handleChange(event){
        // console.log(event.target);
        const evt = event.target;
        console.log(evt);
        console.log(evt.checked);

        if(evt.checked){
            // add
            seats.push(parseInt(evt.id));
        }
        else{
            if(seats.length!==0){
                // remove
                seats = seats.filter((id) => {
                    return id !== parseInt(evt.id);
                });
            }
        }
        console.log(seats);
        
        setSeatStatus(!seatStatus);

        if(seatColor === "seat-a"){
            setSeatColor("seat-s");
        }
        else{
            setSeatColor("seat-a");
        }
        
        // if(seatStatus){
        //     setBtnStatus(!btnStatus);
        //     console.log(btnStatus);
        // }
        
    }
    
    // console.log(seatStatus);
    // console.log(seatColor);

    // const ToggleContext = JSON.parse(localStorage.getItem("toggle-context"));
    
    
   

    // Runs on the first render
    // And any time any dependency value changes
    // useEffect(() =>{
    //     handleToggle(seats)
    // },[btnToggle]);

    return(
        <div className={seatColor}>
            <label>
                <input type="checkbox" hidden disabled={seatAlive} checked={seatStatus} onChange={handleChange} id={props.number}/>
                {props.number}
            </label>
        </div>
    )
}

export default Seat;