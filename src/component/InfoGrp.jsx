import React, { useState } from "react";
import Info from "./Info";

function InfoGrp(props){
    // console.log(props);
    console.log("info");
    const bookedInfoGrpObj = localStorage.getItem("bookedInfoGrp");
    const bookedInfoGrp = JSON.parse(bookedInfoGrpObj);
    let bookedInfo = bookedInfoGrp;

    useState(()=>{
        console.log("dashboard initial render");
        if(bookedInfoGrpObj!==null){
            bookedInfo = bookedInfoGrp;
        }
    },[]);

    return(
        (bookedInfoGrpObj!==null) && 

        (   
            bookedInfo.map((info,index) =>{
            return(
                <Info info={info} key={index} /> 
            )
            })
        )

        
        // bookedInfo.map((info,index) =>{
        //     return(
        //         <Info info={info} key={index} /> 
        //     )
        // })
    )
}

export default InfoGrp;