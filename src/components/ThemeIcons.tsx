import { useContext } from 'react';
import { FiSun } from 'react-icons/fi';
import { LuMoonStar } from 'react-icons/lu';
import { ThemeContext } from '../contextApi/themeContext';
import { toogleState } from '../utils/toogleState';
import { DarkMode } from '../types/type';

export default function ThemeIcons() {
  const { darkMode, setDarkMode } = useContext<DarkMode>(ThemeContext);
  return (
    <div className="text-gray-600 text-base font-medium flex justify-between items-center mt-2 lg:mt-0">
      <p className="lg:hidden">Switch Theme</p>
      <div
        className="theme-icons hover:cursor-pointer text-2xl hover:bg-gray-100 p-1 rounded-lg lg:mx-4 lg:ms-6"
        onClick={() => {
          toogleState(setDarkMode);
        }}
      >
        {darkMode ? <FiSun /> : <LuMoonStar />}
      </div>
    </div>
  );
}
