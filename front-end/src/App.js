import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/index/IndexPage";
import SignInPage from "./pages/signIn/SignInPage";
import ProfilePage from "./pages/profile/ProfilePage";
import SwaggerDocs from "./pages/SwaggerUI";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/api-docs" element={<SwaggerDocs />} />
      </Routes>
    </Router>
  );
};

export default App;
