import { IoMenu } from 'react-icons/io5';

import NavLinks from './NavLinks';
import CvButton from './CvButton';
import ThemeIcons from './ThemeIcons';
import Logo from './Logo';
import MobileNavBar from './MobileNavBar';

export default function Header() {
  return (
    <>
      <nav className="flex justify-between p-4 items-center border-b lg:px-[70px] bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px]">
        <Logo />
        {/* links */}
        <div className="hidden lg:flex items-center ">
          <NavLinks />
          <ThemeIcons />
          <CvButton />
        </div>
        <div className="icons hover:cursor-pointer p-1 md:hidden">
          <IoMenu size={24} />
        </div>
      </nav>
      {/* mobile nav */}
      <MobileNavBar />
    </>
  );
}
