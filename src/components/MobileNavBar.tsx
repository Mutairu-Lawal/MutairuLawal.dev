import { IoClose } from 'react-icons/io5';
import Logo from './Logo';
import NavLinks from './NavLinks';
import CvButton from './CvButton';
import ThemeIcons from './ThemeIcons';
import HamburgerMenu from './HamburgerMenu';

export default function MobileNavBar({
  toogleSidebar,
}: {
  toogleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="mobile-nav-bar">
      <div className="bg-white border-l fixed w-[calc(100%-20%)] sm:w-1/2 h-screen top-0 right-0 lg:hidden dark:bg-gray-950 z-[200] dark:border-l-0">
        <div className="border-b flex justify-between items-center p-4 dark:border-gray-800 dark:text-gray-100">
          <Logo />
          <HamburgerMenu toogleSidebar={toogleSidebar}>
            <IoClose size={24} />
          </HamburgerMenu>
        </div>
        <div className="border-b p-4 dark:border-gray-800">
          <NavLinks />
        </div>
        <ThemeIcons />
        <CvButton />
      </div>
      <div className="z-[108] fixed left-0 top-0 overlay w-full h-screen bg-[rgba(231,231,233,0.50)] backdrop-blur-[5px]"></div>
    </div>
  );
}
