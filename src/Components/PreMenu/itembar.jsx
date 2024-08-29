import React from "react";
import { Box, Button } from "@mui/material";
import "./itembar.scss";

const Itembar = () => {
  return (
    <Box className="itembar">
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Popular Items
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Vegitarian
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Non-Veg
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Seafood
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Biryani & Rice-Based
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Curry
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Seasonal
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Plant-Based
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Fusion
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Bhorta
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Appetizer
      </Button>
      <Button variant="text" sx={{ textTransform: "none" }}>
        Desserts & Drinks
      </Button>
    </Box>
  );
};
export default Itembar;
