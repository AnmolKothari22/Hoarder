import { Routes, Route } from "react-router";

import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Signup from "../pages/Signup/Signup";

function AppRoutes() {
  return (
    <Routes>
      <Route  element={<MainLayout />}>
        <Route path="/" element={<Home />} />
         <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;