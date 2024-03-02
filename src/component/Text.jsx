import React, { useState } from "react";

function Text(props){
    // console.log(props);
    return(
        <div className="text">
            <p>{props.msg}</p>
        </div>
    )
}

export default Text;