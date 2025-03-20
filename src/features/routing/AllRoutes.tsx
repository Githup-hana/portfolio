import { Route, Routes } from "react-router";
import Home from "@home/Home";               
import AboutMe from "@aboutMe/AboutMe";    
import GetInTouch from "@getInTouch/GetInTouch"; 
import Skills from "@skills/Skills";        
import Projects from "@projects/Projects"; 

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
