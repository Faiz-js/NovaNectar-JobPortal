import React from "react";
import Navbar from "../components/Navbar";
import LoginHero from "../components/LoginHero";

const RecruiterLogin = () => {
  return (
    <>
      <Navbar
        buttons={[
          { text: "Emp Signup", type: "bluebtn", link: "/registration" },
          { text: "Post a Job", type: "whitebtn", link: "/post-job" },
        ]}
      />
      <LoginHero Recruiter={"Recruiter"} />
    </>
  );
};

export default RecruiterLogin;
