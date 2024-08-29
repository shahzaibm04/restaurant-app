import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  ButtonGroup,
} from "@mui/material";
import "./SubFooter.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const SubFooter = () => {
  return (
    <div className="subfooterdiv">
      <Box className="subfooter">
        <Grid item xs={6} rowSpacing={1} className="subfooteritems">
          <Typography className="footerlogo" variant="h4">
            Logo
          </Typography>

          <div className="icons">
            <FacebookIcon />
            <span>
              <TwitterIcon />
            </span>
            <InstagramIcon />
          </div>
          <div className="signup">
            <Typography>Sign up for our newsletter!</Typography>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <TextField
                className="signuptxt"
                id="outlined-basic"
                label=""
                variant="outlined"
                sx={{
                  width: "373.28px%",
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#FFFFFF4D",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              <Button className="signupbtn">Sign up</Button>
            </ButtonGroup>
          </div>
          <div>
            <Typography sx={{ fontSize: "small", paddingTop: "40%" }}>
              © Example 2023. All Rights Reserved.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} rowSpacing={1} className="subfooteritems">
          <table>
            <tr>
              <td>
                <a href="">Menu</a>
              </td>
              <td>
                <a href="">Contact</a>
              </td>
              <td>
                <a href="">About</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="">Schedule</a>
              </td>
              <td>
                <a href="">Privacy policy</a>
              </td>
              <td>
                <a href="">Catering</a>
              </td>
            </tr>
          </table>
        </Grid>
      </Box>
    </div>
  );
};

export default SubFooter;
