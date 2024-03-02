import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./Booking";
import Dashboard from "./Dashboard";

function RoutePath(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Booking/> } />
                <Route path="/dashboard" element={ <Dashboard/> } />
            </Routes>
        </Router>
    );
}

export default RoutePath;