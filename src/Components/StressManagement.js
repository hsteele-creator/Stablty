import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StressManagement = () => {
  return (
    <>
      <h1>Stress Management</h1>

      <div className="btn-container">
        <Link to="/relationship">
          <Button variant="contained" className="btn">
            Previous
          </Button>
        </Link>

        <Link to="/coping">
          <Button variant="contained" className="btn">
            Next
          </Button>
        </Link>
      </div>
    </>
  );
};

export default StressManagement;
