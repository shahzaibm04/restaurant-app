import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footerdiv">
      <Box className="footerbox">
        <Grid item xs={6} rowSpacing={1} className="footeritems">
          <Typography className="footertext">
            Come say <i>hello</i>
          </Typography>
        </Grid>
        <Grid item xs={6} rowSpacing={1} className="footeritems">
          <Button variant="outlined" size="medium" className="footerbutton">
            View weekly schedule
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
