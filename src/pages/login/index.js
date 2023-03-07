import React from "react";
import Btn from "../../components/Button";
import FormCard from "../../components/cardForm";
import Input from "../../components/input";
import Title from "../../components/titleOfLogin";

const style = {
  width: "100%",
  textAlign: "center",
  borderRadius: "10px",
};

const Login = () => {
  return (
    <FormCard>
      <Title title={"Log in to Upwork"} />
      <div>
        <Input label={"Email"} width="100%" />
        <Input label={"Password"} width="100%" />
      </div>
      <Btn title={"Login"} style={style} color={"success"} />
    </FormCard>
  );
};

export default Login;
