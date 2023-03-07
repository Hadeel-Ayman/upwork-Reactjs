import { MenuItem, TextField } from "@mui/material";
import React from "react";

const TextFiled = () => {
  return (
    <TextField
      id="outlined-select-country"
      select
      sx={{ m: 1.5 }}
      label="Country"
      size="small"
      style={{ width: "100%" }}
      defaultValue='palestine'
    >
      <MenuItem>palestine</MenuItem>
      <MenuItem>palestine</MenuItem>
      <MenuItem>palestine</MenuItem>
    </TextField>
  );
};

export default TextFiled;
