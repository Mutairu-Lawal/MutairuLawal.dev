import { useContext } from 'react';
import { FiSun } from 'react-icons/fi';
import { LuMoonStar } from 'react-icons/lu';
import { ThemeContext } from '../contextApi/themeContext';
import { toogleState } from '../utils/toogleState';
import { DarkMode } from '../types/type';

export default function ThemeIcons() {
  const { darkMode, setDarkMode } = useContext<DarkMode>(ThemeContext);
  return (
    <div className="text-gray-600 text-base font-medium flex justify-between items-center mt-2 md:mt-0 px-4 lg:px-0 dark:text-gray-300">
      <p className="md:hidden">Switch Theme</p>
      <div
        className="hover:cursor-pointer text-2xl hover:bg-gray-100 p-1 rounded-lg lg:mx-4 lg:ms-6 dark:hover:bg-gray-900 dark:text-gray-100"
        onClick={() => {
          toogleState(setDarkMode);
        }}
      >
        {darkMode ? <FiSun /> : <LuMoonStar />}
      </div>
    </div>
  );
}
