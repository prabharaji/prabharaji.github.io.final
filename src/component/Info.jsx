import React, { useState, useContext, useEffect } from "react";
import {FormContext} from "./Booking";
import {DashFormContext} from "./Dashboard";
import InfoView from "./InfoView";

export let sName = "";

function Info(props){
    // console.log(props);
    const bookingInfo = props.info;
    const fname = bookingInfo.info.fname;
    const lname = bookingInfo.info.lname;
    const name = fname + " " + lname;
    const email = bookingInfo.info.email;
    const seats = bookingInfo.seats;
    const date = bookingInfo.currDate;
    

    const {dformToggle, setdFormToggle, deleteToggle, setDeleteToggle} = useContext(DashFormContext);

    const [infoView, setInfoView] = useState(false);

    function handleClick(event){
        const evt = event.target;
        console.log(evt);

        if(evt.id === "view"){
            setInfoView(!infoView);
        }
        else if(evt.id === "edit"){
            console.log(evt.id);
            sName = name;
            setdFormToggle(!dformToggle);
        }
        else if(evt.id === "delete"){
            sName = name;
            setDeleteToggle(!deleteToggle);
        }
    }

    console.log(name);

    return(
        <div>
            <div className="info">
                <div>
                    <img src="person.png" alt="person-img"/>
                </div>
                <div>{name}</div>
                <div className="properties">
                    <div>
                        <button className="prop-btn" onClick={handleClick}>
                            <img src="view.png" alt="view-img" id="view"/>
                        </button>
                    </div>
                    <div>
                        <button className="prop-btn" onClick={handleClick}>
                            <img src="edit.png" alt="edit-img" id="edit"/>
                        </button>
                    </div>
                    <div>
                        <button className="prop-btn" onClick={handleClick}>
                            <img src="delete.png" alt="delete-img" id="delete"/>
                        </button>
                    </div>
                </div>
            </div>
            {infoView && <InfoView fname={fname} lname={lname} email={email} date={date} seats={seats}/>}
        </div>
        
    )
}

export default Info; 