import { Typography } from "@mui/material";
import React from "react";
import "./style.css";

const Greeting = ({ date, timing, name }) => {
    return (
        <div className="greet">
            <Typography variant="h4">{date}</Typography>
            <Typography variant="h3" style={{ fontSize: '40px' }}>Good {timing},<span>{name}</span></Typography>
        </div>
    );
};

export default Greeting;
