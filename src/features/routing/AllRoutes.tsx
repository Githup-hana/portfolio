import { Route, Routes } from "react-router";
import Home from "../home/Home";
import AboutMe from "../about_me/AboutMe";
import GetInTouch from "../get_in_touch /Get_In_Touch";
import Skills from "../skills/Skills";
import Projekts from "../projects /Projects";

function AllRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/get-in-touch" element={<GetInTouch />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projekts />} />
    </Routes>
  );
}

export default AllRouts;
