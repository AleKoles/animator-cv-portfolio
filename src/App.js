import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";

import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
