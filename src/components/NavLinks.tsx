export default function NavLinks() {
  const links = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Work',
      href: '#work',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ];
  return (
    <ul className="text-gray-600 text-base font-medium md:flex md:items-center lg:gap-10 capitalize md:border-r-[1px] md:px-8 grid gap-4 dark:text-gray-300 dark:border-gray-300">
      {links.map((link) => (
        <li>
          <a
            href={link.href}
            className="hover:text-gray-900 dark:hover:text-gray-100 max-w-fit"
            aria-label={`click to navigate to the ${link.name} section`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
