import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Coping = () => {
    return (
        <>
        <h1>Coping</h1>
        <Link to="/stressmanagement">
        <Button variant="contained" className="btn" >
            Previous
        </Button>
        </Link>
        </>
    )
}

export default Coping