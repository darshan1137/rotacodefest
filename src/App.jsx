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
import RequestCampaign from "./Pages/RequestCampaign";
import Registration from "./Pages/Registration";
import Maps from './Components/Maps';
import Loader from "./Components/Loader";
import Footprint from "./Pages/FootPrint";
import Campaign from "./Pages/Campaign";
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const [count, setCount] = useState(0);
  const username = localStorage.getItem("username");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/report" element={<Report />} />
          <Route path="/guideline" element={<GuidelinesPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/readblog/:id" element={<Readblog />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/requestcampaign" element={<RequestCampaign />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/footprint" element={<Footprint />} />
          <Route path="/campaign" element={
           <ProtectedRoute user={username} route="/login"><Campaign /></ProtectedRoute>} />




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
