import React from "react";
import Navbar from "../components/Navbar";
import RegistrationHero from "../components/RegistrationHero";

const Registration = () => {
  return (
    <>
      <Navbar
        buttons={[
          { text: "Login", type: "bluebtn", link: "/login" },
          { text: "Signup", type: "whitebtn", link: "/registration" },
        ]}
      />
      <RegistrationHero />
    </>
  );
};

export default Registration;
