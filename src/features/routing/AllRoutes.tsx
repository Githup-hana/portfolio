import About from "@aboutMe/components/AboutMe";
import GetInTouch from "@getInTouch/components/GetInTouch";
import Home from "@home/components/Home";
import Projects from "@projects/components/Project";
import ProjectDetails from "@projects/components/ProjectsDetails";

import Skills from "@skills/components/Skills";

import { Route, Routes } from "react-router";

function AllRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<About />} />
      <Route path="/get-in-touch" element={<GetInTouch />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default AllRouts;
