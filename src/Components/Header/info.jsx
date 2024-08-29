import React from "react";
import { Typography } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import "./info.scss";

const Info = () => {
  return (
    <div className="topbar">
      <div className="contact-item">
        <PhoneIphoneIcon fontSize="small" className="icon" />
        <Typography>
          <span>(319) 555-0116</span>
        </Typography>
      </div>
      <div className="contact-item">
        <EmailIcon fontSize="small" className="icon" />
        <Typography>
          <span>order@example.com</span>
        </Typography>
      </div>
    </div>
  );
};

export default Info;
