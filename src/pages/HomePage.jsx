import React from "react";
import Navbar from "../components/Navbar";
import DreamJob from "../components/DreamJob";
import Trust from "../components/Trust";
import TopCompanies from "../components/TopCompanies";
import Qualifications from "../components/Qualifications";
import HRTalk from "../components/HRTalk";
import Numbers from "../components/Numbers";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar
        buttons={[
          { text: "Login", type: "bluebtn", link: "/rec-login" },
          { text: "Signup", type: "bluebtn", link: "/rec-registration" },
          { text: "Post a job", type: "whitebtn", link: "/post-job" },
          { text: "Find a job", type: "whitebtn", link: "/find-job" },
        ]}
      />
      <DreamJob />
      <Trust />
      <TopCompanies />
      <Qualifications />
      <HRTalk />
      <Numbers />
      <Footer />
    </>
  );
};

export default HomePage;
