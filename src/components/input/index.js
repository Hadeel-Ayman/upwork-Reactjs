import TextField from "@mui/material/TextField";
import "./style.css";
const Input = ({ label, width, endAdornment }) => {
    return (
        <TextField
            id="outlined-basic"
            size="small"
            label={label}
            style={{ width }}
            variant="outlined"

            InputProps={{endAdornment}}
            sx={{ m: 1.5 }}
        />
    );
};

export default Input;
