import AboutMe from "@aboutMe/AboutMe";
import GetInTouch from "@getInTouch/GetInTouch";
import Home from "@home/Home";
import Projects from "@projects/Projects";
import Skills from "@skills/Skills";


import { Route, Routes } from "react-router";



function AllRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/get-in-touch" element={<GetInTouch />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default AllRouts;
