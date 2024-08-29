import React from "react";
import { Box, Typography } from "@mui/material";
import "./content.scss";

const Content = () => {
  return (
    <>
      <Box className="main">
        <Typography variant="h2" className="main-heading">
          Our menu
        </Typography>
      </Box>
      <Box className="main description-box" sx={{ alignItems: "center" }}>
        <Typography variant="body2" className="main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
          consequat netus tristique at sem ipsum fames. Sed a molestie enim ac
          sed.
        </Typography>
      </Box>
    </>
  );
};

export default Content;
