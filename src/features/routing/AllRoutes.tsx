
import About from "@aboutMe/components/AboutMe";
import GetInTouch from "@getInTouch/GetInTouch";
import Home from "@home/components/Home";
import Projects from "@projects/Projects";
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
      <Route path="/:id" element={<Home />} />

    </Routes>
  );
}

export default AllRouts;
