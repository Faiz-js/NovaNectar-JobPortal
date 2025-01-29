import React from "react";
import Navbar from "../components/Navbar";
import FindJobHero from "../components/FindJobHero";

const FindJob = () => {
  return (
    <>
      <Navbar
        buttons={[
          { text: "Login", type: "bluebtn", link: "/login" },
          { text: "Signup", type: "whitebtn", link: "/registration" },
        ]}
      />
      <FindJobHero />
    </>
  );
};

export default FindJob;
