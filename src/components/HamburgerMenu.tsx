import { ReactNode } from 'react';
import { toogleState } from '../utils/toogleState';

type HamburgerMenuProps = {
  children: ReactNode;
  toogleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HamburgerMenu({
  children,
  toogleSidebar,
}: HamburgerMenuProps) {
  return (
    <div
      className="hover:cursor-pointer p-1 md:hidden"
      onClick={() => toogleState(toogleSidebar)}
    >
      {children}
    </div>
  );
}
