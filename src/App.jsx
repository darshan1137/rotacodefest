import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Ecommerce from "./Pages/Ecommerce";
// import Header from "./Components/Header";
import Login from "./Pages/Login";
import SignUpPage from "./Pages/SignUpPage";
import Stats from "./Pages/Stats";
import Report from "./Pages/Report";
import GuidelinesPage from "./Pages/GuidelinesPage";
import Blogs from "./Pages/Blogs";
import Readblog from "./Pages/Readblog";
import AddBlog from "./Pages/Addblog";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
import UserProfile from "./Pages/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/report" element={<Report />} />
          <Route path="/guideline" element={<GuidelinesPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/readblog/:id" element={<Readblog />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
