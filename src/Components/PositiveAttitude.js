import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const PositiveAttitude= () => {
    return (
        <>
        <h1>Positive Attitude</h1>

        <Link to="/goals">
            <Button variant="contained">Next</Button>
        </Link>
        </>
    )
}

export default PositiveAttitude