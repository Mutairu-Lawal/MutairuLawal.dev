import { createContext } from 'react';
import { DarkMode } from '../types/type';

export const ThemeContext = createContext<DarkMode>({
  darkMode: false,
  setDarkMode: () => {},
});
