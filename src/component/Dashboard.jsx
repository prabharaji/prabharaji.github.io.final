import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Text from "./Text";
import InfoGrp from "./InfoGrp";
import Form from "./Form";
import {einfo} from "./Form";
import { sName } from "./Info";
import { useNavigate } from "react-router-dom";

const formTog = false;

function setFormTog(){
    // console.log(seats);
}

export const DashFormContext = React.createContext({formTog,setFormTog,formTog,setFormTog,formTog,setFormTog});

function Dashboard(){
    const navigate = useNavigate();

    const message="View Passenger details.";
    const formMsg="Update your details to continue.";

    const [dformToggle, setdFormToggle] = useState(false);
    const [saveToggle, setSaveToggle] = useState(false);
    const [deleteToggle, setDeleteToggle] = useState(false);

    const bookedInfoGrpObj = localStorage.getItem("bookedInfoGrp");
    const bookedInfoGrp = JSON.parse(bookedInfoGrpObj);

    const [infoSeen, setInfoSeen] = useState(false);

    const location = useLocation();
    const submitToggle = location.state;

    useState(()=>{
        console.log("dashboard initial render");
        if(bookedInfoGrpObj!==null){
            if(!infoSeen){
                setInfoSeen(!infoSeen);
            } 
        }
    },[]);

    useEffect(()=>{
        console.log("submitState");
        console.log(submitToggle);
        if(submitToggle){
            if(!infoSeen){
                setInfoSeen(!infoSeen);
            }  
        }
    },[submitToggle]);

    useEffect(()=>{
        if(!dformToggle){
            if(saveToggle){
                const bookedInfoGrpObj = localStorage.getItem("bookedInfoGrp");
                const bookedInfoGrp = JSON.parse(bookedInfoGrpObj);
                let lsName = "";

                bookedInfoGrp.map((item, index)=>{
                    lsName = item.info.fname + " " + item.info.lname;
                    if(lsName === sName){
                        item.info.fname = einfo.fname;
                        item.info.lname = einfo.lname;
                        item.info.email = einfo.email;
                    }
                });

                localStorage.setItem("bookedInfoGrp",JSON.stringify(bookedInfoGrp));
                setSaveToggle(!saveToggle);
            }
        }

    },[dformToggle]);

    useEffect(()=>{
        if(deleteToggle){

            const bookedInfoGrpObj = localStorage.getItem("bookedInfoGrp");
            let bookedInfoGrp = JSON.parse(bookedInfoGrpObj);
            let dseat = [];
            let lsName = "";

            bookedInfoGrp.map((item, index)=>{
                lsName = item.info.fname + " " + item.info.lname;
                if(lsName === sName){
                    dseat = item.seats;
                }
            });

            navigate("/", { state: [deleteToggle,dseat]});

            // remove from bookedSeatsNo
            const bookedSeatsNoObj = localStorage.getItem("bookedSeatsNo");
            let bookedSeatsNo = JSON.parse(bookedSeatsNoObj);

            dseat.map((item)=>{
                bookedSeatsNo = bookedSeatsNo.filter((seat)=>{
                    if(seat!==item){
                        return seat;
                    }
                });
            });

            localStorage.setItem("bookedSeatsNo",JSON.stringify(bookedSeatsNo));

            lsName = "";

            bookedInfoGrp = bookedInfoGrp.filter((item, index) =>{
                lsName = item.info.fname + " " + item.info.lname;
                if(lsName !== sName){
                    return item;
                }
            });

            localStorage.setItem("bookedInfoGrp",JSON.stringify(bookedInfoGrp));

            setDeleteToggle(!deleteToggle);
        }
    },[deleteToggle]);

    console.log("dformTog");
    console.log(dformToggle);
    console.log("saveTog");
    console.log(saveToggle);
    console.log("deleteTog");
    console.log(deleteToggle);

    return (
        <DashFormContext.Provider value={{dformToggle,setdFormToggle,saveToggle,setSaveToggle,deleteToggle, setDeleteToggle}}>
            <form>
                {dformToggle && <Form btn={"Save"} msg={formMsg}/>}
            </form>

            <div className="outer-div">
                {/* <h1>Hello World!</h1> */}
                <Nav/>
                <div className="view">
                    <Text msg={message}/>
                    <div className="container">
                        {infoSeen && <InfoGrp/>}
                    </div>
                </div>
            </div>
        </DashFormContext.Provider>

    );
}

export default Dashboard;