import { IoMenu } from 'react-icons/io5';
import NavLinks from './NavLinks';
import CvButton from './CvButton';
import ThemeIcons from './ThemeIcons';
import Logo from './Logo';
import MobileNavBar from './MobileNavBar';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between p-4 items-center border-b lg:px-[70px] bg-[rgba(255,255,255,0)] backdrop-blur-[10px] dark:border-b-gray-800 dark:text-white z-[100] md:border-b-0">
        <Logo />
        {/* links */}
        <div className="hidden md:flex items-center ">
          <NavLinks />
          <ThemeIcons />
          <CvButton />
        </div>
        <HamburgerMenu toogleSidebar={setShowSidebar}>
          <IoMenu size={24} />
        </HamburgerMenu>
      </nav>

      {/* mobile navbar */}
      {showSidebar && <MobileNavBar toogleSidebar={setShowSidebar} />}
    </>
  );
}
