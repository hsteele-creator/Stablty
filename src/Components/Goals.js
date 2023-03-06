import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Goals.css"

const Goals = () => {
    return (
        <>
        <h1>Goals</h1>


        <div className="btn-container">
        <Link to="/PositiveAttitude">
            <Button variant="contained" className="btn" >Previous</Button>
        </Link>

        <Link to="/gratitude">
        <Button variant="contained" className="btn">Next</Button>
        </Link>
        </div>
        </>
    )
}

export default Goals