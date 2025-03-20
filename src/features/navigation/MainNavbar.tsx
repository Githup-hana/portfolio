import { NavLink } from "react-router";

function MainNavbar() {
    return (  <nav className="flex space-x-4 border p-2 mb-2">
        <NavLink
          to="/"
         
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
      prpjects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
     Skills
        </NavLink>
        <NavLink
          to="/get-in-touch"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
         Get in Touch
        </NavLink>
      </nav> );
}

export default MainNavbar;