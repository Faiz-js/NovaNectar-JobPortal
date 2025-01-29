import React from "react";
import Navbar from "../components/Navbar";
import LoginHero from "../components/LoginHero";

const Login = () => {
  return (
    <>
      <Navbar
        buttons={[
          { text: "Signup", type: "whitebtn", link: "/registration" },
          { text: "Find a Job", type: "whitebtn", link: "/find-job" },
        ]}
      />
      <LoginHero />
    </>
  );
};

export default Login;
