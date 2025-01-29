import React from "react";
import Navbar from "../components/Navbar";
import RecruiterRegistrationHero from "../components/RecruiterRegistrationHero";

const RecruiterRegistraion = () => {
  return (
    <>
      <Navbar
        buttons={[
          { text: "Emp Login", type: "bluebtn", link: "/login" },
          { text: "Emp Signup", type: "whitebtn", link: "/registration" },
        ]}
      />
      <RecruiterRegistrationHero />
    </>
  );
};

export default RecruiterRegistraion;
