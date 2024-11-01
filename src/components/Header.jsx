import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => (
  <>
    <AppBar position="static">
      <Toolbar style={{ color: "white" }}>
        <div className="row" style={{ textAlign: "center", width: "100%" }}>
          <div className="col-6 col-sm-6 col-md-3">
            <Typography>||ॐ श्री गणेशाय नमः||</Typography>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <Typography>||ॐ श्री साईनाथय नमः||</Typography>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <Typography>||ॐ श्री नित्यांदाय नमः||</Typography>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <Typography>||ॐ श्री सदानंदाय नमः||</Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  </>
);

export default Header;
