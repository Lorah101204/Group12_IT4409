import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Connections from "./pages/Connections";
import Discover from "./pages/Discover";
import CreatePostPage from "./pages/CreatePostPage";
import SignUp from "./pages/SignUp.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/create-post" element={<CreatePostPage />} />
      </Routes>
    </>
  );
};

export default App;
