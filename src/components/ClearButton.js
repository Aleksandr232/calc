import React from "react";
import './ClearButton.css';

export const ClearButton=(props)=>(
    <div className="clearBtn" onClick={props.handleClear}>
        {props.children}
    </div>
);