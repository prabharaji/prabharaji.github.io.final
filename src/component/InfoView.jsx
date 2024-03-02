import React, { useState } from "react";

function InfoView(props){
    // console.log(props);
    let date = props.date;
    (date.date.toString().length <2) && (date.date = "0" + date.date);
    (date.month.toString().length <2) && (date.month = "0" + date.month);
    (date.hr.toString().length <2) && (date.hr = "0" + date.hr);
    (date.min.toString().length <2) && (date.min = "0" + date.min);

    let bookingDate = "";
    bookingDate = date.date+ "-" +date.month+ "-" +date.year + "\xa0\xa0\xa0" + date.hr+ ":" + date.min;

    const seats = props.seats;
    let seatNo = "";
    let separator = " , ";
    seats.map((seat,index) =>{
        (index!==seats.length-1) ? ( seatNo = seatNo + seat + separator ) : (seatNo = seatNo + seat)
    });

    return(
        <div className="info-view">
            <table>
                <tbody>
                    <tr>
                        <td>First Name :</td>
                        <td>{props.fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name :</td>
                        <td>{props.lname}</td>
                    </tr>
                    <tr>
                        <td>Email Address :</td>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <td>Booking Date :</td>
                        <td>{bookingDate}</td>
                    </tr>
                    <tr>
                        <td>Seat No :</td>
                        <td>{seatNo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InfoView;