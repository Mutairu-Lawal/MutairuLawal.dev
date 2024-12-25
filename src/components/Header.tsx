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
      <nav className="flex justify-between p-4 items-center border-b lg:px-[70px] bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px] dark:bg-gray-950 dark:text-white">
        <Logo />
        {/* links */}
        <div className="hidden lg:flex items-center ">
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
