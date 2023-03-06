import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Gratitude= () => {
    return (
        <>
        <h1>Gratitude</h1>

        <div className="btn-container">
        <Link to="/goals">
            <Button variant="contained" className="btn">Previous</Button>
        </Link>

        <Link to="/relationship">
            <Button variant="contained" className="btn">Next</Button>
        </Link>
        </div>
        </>

    )
}

export default Gratitude