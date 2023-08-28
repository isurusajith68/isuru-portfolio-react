import Navbar from "./components/Navbar";
import HomeT from "./components/HomeT";
import ScrollBtn from "./components/scrollBtn";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import { Form } from "./components/Form";
import Footer from "./components/Footer";
import Project from "./components/MyProject";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <div>
        <Navbar />
        <HomeT />
        <ScrollBtn />
        <AboutMe />
        <Skills />
        <Project />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
