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
    <div className="mobile-navbar absolute w-[calc(100%-20%)] sm:w-1/2 h-screen top-0 right-0 lg:hidden bg-red-500">
      <div className="">
        <div className=" border-b flex justify-between items-center p-4 ">
          <Logo />
          <HamburgerMenu toogleSidebar={toogleSidebar}>
            <IoClose size={24} />
          </HamburgerMenu>
        </div>
        <div className="border-b p-4">
          <NavLinks />
        </div>
        <ThemeIcons />
        <CvButton />
      </div>
    </div>
  );
}
