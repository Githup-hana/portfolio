import { NavLink } from "react-router";

function MainNavbar() {
  return (
    <div className="flex justify-center">
      <nav className="flex justify-center space-x-8 border p-2 mb-2 rounded-3xl w-xl">
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
          Projects
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
      </nav>
    </div>
  );
}

export default MainNavbar;