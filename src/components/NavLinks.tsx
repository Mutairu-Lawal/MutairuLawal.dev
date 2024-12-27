export default function NavLinks() {
  return (
    <ul className="text-gray-600 text-base font-medium md:flex md:items-center lg:gap-10 capitalize md:border-r-[1px] md:px-8 grid gap-4 dark:text-gray-300 dark:border-gray-300">
      <a
        href="#home"
        className="hover:text-gray-900 dark:hover:text-gray-100 max-w-fit"
      >
        <li>Home</li>
      </a>
      <a
        href="#about"
        className="hover:text-gray-900 dark:hover:text-gray-100 max-w-fit"
      >
        <li>about</li>
      </a>
      <a
        href="#work"
        className="hover:text-gray-900 dark:hover:text-gray-100 max-w-fit"
      >
        <li>work</li>
      </a>
      <a
        href="#contact"
        className="hover:text-gray-900 dark:hover:text-gray-100 max-w-fit"
      >
        <li>contact</li>
      </a>
    </ul>
  );
}
