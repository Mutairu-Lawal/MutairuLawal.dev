import { FiSun } from 'react-icons/fi';
import { LuMoonStar } from 'react-icons/lu';

export default function ThemeIcons() {
  return (
    <div className="text-gray-600 font-Inter text-base font-medium flex justify-between items-center mt-2 lg:mt-0">
      <p className="lg:hidden">Switch Theme</p>
      <div className="theme-icons hover:cursor-pointer text-2xl hover:bg-gray-100 p-1 rounded-lg lg:mx-4 lg:ms-6">
        <FiSun className="hidden" />
        <LuMoonStar />
      </div>
    </div>
  );
}
