import About from "@aboutMe/components/AboutMe";
import GetInTouch from "@getInTouch/components/GetInTouch";
import Home from "@home/components/Home";
import Projects from "@projects/components/Project";
import ProjectDetails from "@projects/components/ProjectsDetails";

import SkillsNew from "@skills/components/SkillsNew";

import { Route, Routes } from "react-router";

function AllRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<About />} />
      <Route path="/get-in-touch" element={<GetInTouch />} />
      <Route path="/skills" element={<SkillsNew />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default AllRouts;
