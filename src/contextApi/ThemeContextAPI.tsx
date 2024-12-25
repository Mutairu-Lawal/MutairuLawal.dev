import { useState, ReactNode } from 'react';
import { ThemeContext } from './themeContext';

export default function ThemeContextAPI({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
