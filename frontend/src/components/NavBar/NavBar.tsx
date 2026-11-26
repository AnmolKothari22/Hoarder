
import { Link } from "react-router";
import "./Navbar.css";

// Define the type of each menu item
interface MenuItem {
  label: string;
  path: string;
}

// Define NavBar props
interface NavBarProps {
  title: string;
  menuItems: MenuItem[];
}

function NavBar({ title, menuItems }: NavBarProps) {
  return (
    <nav className="nav">

      <div className="NavBar-logo">
        {title}
      </div>

      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={item.path } className="navbar-item">
            <Link to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}

export default NavBar;
