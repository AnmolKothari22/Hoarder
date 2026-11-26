import { Routes, Route } from "react-router";

import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";


function AppRoutes() {
  return (
    <Routes>
      <Route  element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;