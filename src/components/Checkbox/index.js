import { Checkbox } from "@mui/material";
import React from "react";

const CheckBox = ({ handleChange, checked, color }) => {
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
      color={color}
    />
  );
};

export default CheckBox;
