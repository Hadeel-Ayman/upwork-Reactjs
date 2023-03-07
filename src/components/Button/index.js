import { Button } from "@mui/material";
import React from "react";

const Btn = ({ title, type, color, style }) => {
  return (
    <Button
      variant="contained"
      type={type}
      color={color}
      sx={{ m: 1 }}
      style={style}
    >
      {title}
    </Button>
  );
};

export default Btn;
