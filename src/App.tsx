// import viteLogo from '/vite.svg';

import { useContext, useEffect } from 'react';
import Header from './components/Header';
import { ThemeContext } from './contextApi/themeContext';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Works from './components/Works';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function App() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={`${darkMode && 'dark'}`}>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Works />
        <Footer />
      </div>
    </>
  );
}

export default App;
