import React, { useState,useContext, useEffect } from "react";
import Text from "./Text";
import {FormContext} from "./Booking";
import {DashFormContext} from "./Dashboard";

export let submit = false;
export let info = {
    "fname" : "",
    "lname" : "",
    "email" : ""
}

export let einfo = {
    "fname" : "",
    "lname" : "",
    "email" : ""
}


function Form(props){
    // console.log(props);
    const {formToggle, setFormToggle, submitToggle, setSubmitToggle} = useContext(FormContext);
    const {dformToggle, setdFormToggle, saveToggle, setSaveToggle} = useContext(DashFormContext);

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    

    function handleChange(event){
        const {name,value} = event.target;
        if(name==="fname"){
            setFName(value);
        }
        else if(name==="lname"){
            setLName(value);
        }
        else if(name==="email"){
            setEmail(value);
        }
    }
   

    function handleClick(event){
        const evt = event.target;
        if(evt.id === "Cancel"){
            (props.btn === "Submit") ? (setFormToggle(!formToggle)) : (setdFormToggle(!dformToggle));
        }
        else if(evt.id === "Submit"){
            info.fname = fname;
            info.lname = lname;
            info.email = email;

            console.log(info);
            if(info.fname!=="" && info.lname!=="" && info.email!==""){
                setFormToggle(!formToggle);
                setSubmitToggle(!submitToggle);
            }
            else{
                alert("* Required");
            }
            
        }
        else if(evt.id === "Save"){
            einfo.fname = fname;
            einfo.lname = lname;
            einfo.email = email;

            console.log(einfo);

            if(einfo.fname!=="" && einfo.lname!=="" && einfo.email!==""){
                setdFormToggle(!dformToggle);
                setSaveToggle(!saveToggle);
            }
            else{
                alert("* Required");
            }
        }


        event.preventDefault();
    }

    if(formToggle){
        info = {
            "fname" : "",
            "lname" : "",
            "email" : ""
        }
    }

    if(dformToggle){
        einfo = {
            "fname" : "",
            "lname" : "",
            "email" : ""
        }
    }


    return(
        <div className="form">
            <div className="form-inner">
                <Text msg={props.msg}/>
                <div className="fields">
                    <table>
                        <tbody>
                            <tr>
                                <td><label>First Name *</label></td>
                                <td><input type="text" name="fname" required className="finput" value={fname} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label>Last Name *</label></td>
                                <td><input type="text" name="lname" required className="finput" value={lname} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label>Email Address *</label></td>
                                <td><input type="email" name="email" required className="finput" value={email} onChange={handleChange}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="form-btn-area">
                    <div className="book-btn form-btn">
                        <button type="submit" className="cancel-btn" onClick={handleClick} id="Cancel">Cancel</button>
                    </div>
                    <div className="book-btn form-btn">
                        <button type="submit" onClick={handleClick} id={props.btn} >{props.btn}</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Form;