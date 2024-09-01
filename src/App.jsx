import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Homepage";
import ContactPage from "./components/contactpage/ContactPage";
import { Routes, Route} from "react-router-dom";
import ProjectPage from "./components/projectpage/ProjectPage";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
