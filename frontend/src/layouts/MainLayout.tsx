
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

function MainLayout() {

  // Menu data passed through props
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Login", path: "/Login" }
  ];

  return (
    <>

      <NavBar
        title="My Website"
        menuItems={menuItems}
      />

      {/* Current page renders here */}
      
        <Outlet />

      <footer >
       Copyright 2026 My Website
      </footer>

    </>
  );
}

export default MainLayout;
