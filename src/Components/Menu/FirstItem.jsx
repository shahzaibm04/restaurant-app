import React from "react";
import "./FirstItem.scss";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import myImage from "./Tacos.png";
import { Typography } from "@mui/material";

const FirstItem = () => {
  return (
    <>
      <div className="menutop">
        <Grid
          className="menuitem"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1 }}
        >
          <Grid item xs={6}>
            <img className="tacoimg" src={myImage} alt="Tacos" />
          </Grid>
          <Grid item xs={6} className="menugrid">
            <Typography className="menu">
              Jack Fruit Tacos<span>$8.50</span>
              <br />
              4oz&nbsp;8oz
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
              consequat netus tristique.
              <hr />
              Bja Cali Tacos<span>$7.25</span>
              <br />
              4oz&nbsp;8oz
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
              consequat netus tristique.
              <hr />
              Impossible Tacos<span>$9.00</span>
              <br />
              4oz&nbsp;8oz
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
              consequat netus tristique.
              <hr />
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="menubottom">
        <Grid
          className="menuitem"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1 }}
        >
          <Grid item xs={6} className="menugrid">
            <Typography className="menu">
              Jack Fruit Tacos<span>$8.50</span>
              <br />
              4oz&nbsp;8oz
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
              consequat netus tristique.
              <hr />
              Baja Cali Tacos<span>$7.25</span>
              <br />
              4oz&nbsp;8oz
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
              consequat netus tristique.
              <hr />
              Impossible Tacos<span>$9.00</span>
              <br />
              4oz&nbsp;8oz
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
              consequat netus tristique.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className="menu">
                Jack Fruit Tacos<span>$8.50</span>
                <br />
                4oz&nbsp;8oz
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                consequat netus tristique.
                <hr />
                Bja Cali Tacos<span>$7.25</span>
                <br />
                4oz&nbsp;8oz
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                consequat netus tristique.
                <hr />
                Impossible Tacos<span>$9.00</span>
                <br />
                4oz&nbsp;8oz
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                consequat netus tristique.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FirstItem;
