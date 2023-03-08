import React from "react";
import Already from "../../components/alreadyComponent";
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
      <form>
        <div>
          <Input label={"Email"} width="100%" />
          <Input label={"Password"} width="100%" />
        </div>
        <Btn title={"Login"} style={style} color={"success"} type="submit" />
        <Already
          link={"/signup"}
          LinkTitle=" Sign Up"
          desc=" Dont have an Upwork acount?"
        />
      </form>
    </FormCard>
  );
};

export default Login;
