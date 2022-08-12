import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}
