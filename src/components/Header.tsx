import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { FaLessThan } from 'react-icons/fa6';
import { FaGreaterThan } from 'react-icons/fa6';
import { FiSun } from 'react-icons/fi';
import { LuMoonStar } from 'react-icons/lu';

export default function Header() {
  return (
    <nav className="flex justify-between p-4 items-center  border-b-[1px] text-gray-600 lg:px-[70px] font-Inter bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px]">
      <div className="logo text-gray-900 flex items-center text-3xl leading-9 font-bold hover:cursor-pointer">
        <FaLessThan size={18} strokeWidth={40} className="mt-1" />
        <span className="uppercase mx-1">mt</span>
        <span className="relative bottom-[1px]">/</span>
        <FaGreaterThan size={18} strokeWidth={40} className="mt-1" />
      </div>
      {/* links */}
      <div className="hidden navlinks lg:flex items-center text-base font-medium">
        <ul className="flex gap-10 capitalize lg:border-r-[1px] lg:px-8">
          <a href="" className="hover:text-gray-900">
            <li>Home</li>
          </a>
          <a href="" className="hover:text-gray-900">
            <li>about</li>
          </a>
          <a href="" className="hover:text-gray-900">
            <li>work</li>
          </a>
          <a href="" className="hover:text-gray-900">
            <li>contact</li>
          </a>
        </ul>
        <div className="theme-icons hover:cursor-pointer text-2xl hover:bg-gray-100 p-1 rounded-lg lg:mx-4 lg:ms-6">
          <FiSun className="hidden" />
          <LuMoonStar />
        </div>
        <div className="btn bg-gray-900 text-gray-50 px-4 py-[6px] rounded-xl text-base hover:cursor-pointer hover:bg-gray-700">
          Download CV
        </div>
      </div>
      {/* menu btn */}
      <div className="icons  hover:cursor-pointer p-1 md:hidden">
        <IoMenu size={24} />
        <IoClose size={24} className="hidden" />
      </div>
    </nav>
  );
}
