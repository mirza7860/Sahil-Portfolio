import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";
import Experience from "./components/Experience/Experience.jsx";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
`;
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <About />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Projects />
          <Experience />
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
