import React from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import FindJob from "./pages/FindJob";
import RecruiterRegistration from "./pages/RecruiterRegistraion";
import RecruiterLogin from "./pages/RecruiterLogin";
import PostJob from "./pages/PostJob";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/find-job" element={<FindJob />} />
          <Route path="/rec-registration" element={<RecruiterRegistration />} />
          <Route path="/rec-login" element={<RecruiterLogin />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
