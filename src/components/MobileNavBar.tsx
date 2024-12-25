import { IoClose } from 'react-icons/io5';
import Logo from './Logo';
import NavLinks from './NavLinks';
import CvButton from './CvButton';
import ThemeIcons from './ThemeIcons';

export default function MobileNavBar() {
  return (
    <div className="mobile-navbar absolute w-full sm:w-1/2 h-screen top-0 right-0 lg:hidden bg-red-500">
      <div className="">
        <div className=" border-b flex justify-between items-center p-4 ">
          <Logo />
          <IoClose size={24} />
        </div>
        <div className="p-4">
          <NavLinks />
          <ThemeIcons />
          <CvButton />
        </div>
      </div>
    </div>
  );
}
