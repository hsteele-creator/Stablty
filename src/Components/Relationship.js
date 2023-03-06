import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Relationship = () => {
    return (
        <>
        <h1>Relationship</h1>

        <div className="btn-container">
        
        <Link to="/gratitude">
            <Button variant="contained" className="btn">Previous</Button>
        </Link>

        <Link to="/stressmanagement">
            <Button variant="contained" className="btn">Next</Button>
        </Link>


        </div>
        </>
    )
}

export default Relationship