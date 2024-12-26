// import viteLogo from '/vite.svg';

import { useContext } from 'react';
import Header from './components/Header';
import { ThemeContext } from './contextApi/themeContext';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`${darkMode && 'dark'}`}>
        <Header />
        <Hero />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
