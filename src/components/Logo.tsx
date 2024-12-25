import { FaLessThan } from 'react-icons/fa6';
import { FaGreaterThan } from 'react-icons/fa6';

export default function Logo() {
  return (
    <div className="text-gray-900 flex items-center text-3xl leading-9 font-bold hover:cursor-pointer dark:text-gray-100">
      <FaLessThan size={18} strokeWidth={40} className="mt-1" />
      <span className="uppercase mx-1">mt</span>
      <span className="relative bottom-[1px]">/</span>
      <FaGreaterThan size={18} strokeWidth={40} className="mt-1" />
    </div>
  );
}
