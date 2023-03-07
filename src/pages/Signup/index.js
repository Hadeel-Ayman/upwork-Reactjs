import Input from "../../components/input";
import TextFiled from "../../components/textFiled";
import Title from "../../components/titleOfLogin";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./style.css";
import { IconButton } from "@mui/material";
import CheckBox from "../../components/Checkbox";
import Btn from "../../components/Button";
import { Link } from "react-router-dom";
import FormCard from "../../components/cardForm";

const style = {
  textAlign: "center",
  width: "100%",
  marginTop: "15px",
  borderRadius: "20px",
  fontWeight: "700",
  fontSize: "17px",
};

const SignUp = () => {
  return (
    <>
      <FormCard>
        <Title title={"Sign up to find work you love"} />
        <div className="inputs">
          <form>
            <div className="flex">
              <Input label={"First name"} width="50%" />
              <Input label={"Last name"} width="50%" />
            </div>
            <div>
              <Input label={"Email"} width="100%" />
              <Input
                label={"Password"}
                width="100%"
                endAdornment={
                  <IconButton>
                    <VisibilityOutlinedIcon />
                  </IconButton>
                }
              />
              <TextFiled />
            </div>
            <div>
              <CheckBox color={"success"} />
              <label className="label">
                Yes,I understand and agree to the Upwork Terms and conditions
                ,including the User Agreement and Privacy Policy
              </label>
            </div>
            <Btn
              title={"Create my account"}
              type="submit"
              color={"success"}
              style={style}
            />
          </form>
          <p>
            Already have an acount?
            <Link to={"/login"}> Log In</Link>
          </p>
        </div>
      </FormCard>
    </>
  );
};

export default SignUp;
