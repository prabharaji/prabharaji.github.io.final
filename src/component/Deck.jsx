import React, { createContext, useEffect, useState, useContext, useRef } from "react";
import InnerDeck from "./InnerDeck";
import Text from "./Text";
import Form from "./Form";
import {FormContext} from "./Booking";
import {seats} from "./Seat";

const butTog = false;

function setButTog(seats){
    // console.log(seats);
}

const butStat = false;

function setButStat(seats){
    // console.log(seats);
}


export const ToggleContext = React.createContext({butTog,setButTog,butStat,setButStat});

// localStorage.setItem("toggle-context",JSON.stringify(ToggleContext));

function Deck(){

    const {formToggle, setFormToggle} = useContext(FormContext);
    // const lower = [1,4,7,10,13,2,5,8,11,14,3,6,9,12,15];
    // const upper = [16,19,22,25,28,17,20,23,26,29,18,21,24,27,30];
    const row1=[1,4,7,10,13];
    const row2=[2,5,8,11,14];
    const row3=[3,6,9,12,15];
    const row4=[16,19,22,25,28];
    const row5=[17,20,23,26,29];
    const row6=[18,21,24,27,30];

    const [btnToggle, setBtnToggle] = useState(false);
    const [btnStatus, setBtnStatus] = useState(true);
    

    function handleSubmit(event){
        const evt = event.target;
        console.log(evt);
        
        if(seats.length!==0){
            setFormToggle(!formToggle);
            setBtnToggle(!btnToggle); 
        }
        else{
            alert("Please select atleast one seat for Booking.");
        }

        event.preventDefault();
    }

    console.log("btnToggle");
    console.log(btnToggle);

    if(btnToggle){
        const seatNo = seats;
        console.log(seatNo);
        // setFormToggle(true);
    }


    return(
        <div>
            <form>
                <div className="deck">
                    <div className="options">
                        <div>
                            <img src="available.png" alt="available-img" className="color-img"></img>
                            <span className="options-text">Available</span>
                        </div>
                        <div>
                            <img src="unavailable.png" alt="unavailable-img" className="color-img"></img>
                            <span className="options-text">Unavailable</span>
                        </div>
                        <div className="book-btn" >
                            <button type="submit" onClick={handleSubmit}>Book</button>
                        </div>
                    </div>

                    <div className="deck-text">
                        <p>Lower Deck</p>
                    </div>

                    <div className="lower-deck">
                        <img src="wheel.png" alt="steering-img" className="wheel-img"></img>
                        <div className="inner-deck">
                            <div className="top">
                                {/* { <InnerDeck row={row1}/> } */}

                                <ToggleContext.Provider value={{btnToggle,setBtnToggle,btnStatus,setBtnStatus}}>
                                    <InnerDeck row={row1}/>
                                </ToggleContext.Provider>

                                <ToggleContext.Provider value={{btnToggle,setBtnToggle}}>
                                    <InnerDeck row={row2}/>
                                </ToggleContext.Provider>
                                
                                
                            </div>
                            <div className="bottom">
                                <ToggleContext.Provider value={{btnToggle,setBtnToggle}}>
                                    <InnerDeck row={row3}/>
                                </ToggleContext.Provider>
                            </div>

                            <div className="last">
                                <div className="seat-a lseat">0</div>
                            </div>

                        </div>
                        {/* <p>lower</p> */}
                    </div>

                    <div className="deck-text">
                        <p>Upper Deck</p>
                    </div>

                    <div className="upper-deck">
                        {/* <p>higher</p> */}
                        <div className="inner-deck">
                            <div className="top">
                                <ToggleContext.Provider value={{btnToggle,setBtnToggle}}>
                                    <InnerDeck row={row4}/>
                                </ToggleContext.Provider>

                                <ToggleContext.Provider value={{btnToggle,setBtnToggle}}>
                                    <InnerDeck row={row5}/>
                                </ToggleContext.Provider>
                            </div>
                            <div className="bottom">
                                <ToggleContext.Provider value={{btnToggle,setBtnToggle}}>
                                    <InnerDeck row={row6}/>
                                </ToggleContext.Provider>
                            </div>

                            <div className="last">
                                <div className="seat-a lseat">0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
        
    )
}


export default Deck;