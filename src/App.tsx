// import viteLogo from '/vite.svg';

import { useContext } from 'react';
import Header from './components/Header';
import { ThemeContext } from './contextApi/themeContext';

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`${darkMode && 'dark'}`}>
        <Header />
      </div>
    </>
  );
}

export default App;
