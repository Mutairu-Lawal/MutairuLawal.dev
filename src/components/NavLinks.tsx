export default function NavLinks() {
  return (
    <ul className="text-gray-600 text-base font-medium md:flex md:items-center lg:gap-10 capitalize md:border-r-[1px] md:px-8 grid gap-4 dark:text-gray-300 dark:border-gray-300">
      <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">
        <li>Home</li>
      </a>
      <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">
        <li>about</li>
      </a>
      <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">
        <li>work</li>
      </a>
      <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">
        <li>contact</li>
      </a>
    </ul>
  );
}
