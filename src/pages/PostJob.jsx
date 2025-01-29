import React from "react";
import Navbar from "../components/Navbar";
import PostJobHero from "../components/PostJobHero";

const PostJob = () => {
  return (
    <>
      <Navbar
        buttons={[
          { text: "Emp Login", type: "bluebtn", link: "/rec-login" },
          { text: "Emp Signup", type: "whitebtn", link: "/rec-registration" },
        ]}
      />
      <PostJobHero />
    </>
  );
};

export default PostJob;
