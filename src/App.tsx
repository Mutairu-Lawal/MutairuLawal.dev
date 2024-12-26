// import viteLogo from '/vite.svg';

import { useContext } from 'react';
import Header from './components/Header';
import { ThemeContext } from './contextApi/themeContext';
import Hero from './components/Hero';

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`${darkMode && 'dark'}`}>
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
