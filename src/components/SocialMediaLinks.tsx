import { FiGithub } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

export default function SocailMediaLinks({
  className = 'dark:hover:bg-gray-900',
}: {
  className?: string;
}) {
  const iconsArray = [
    {
      id: 1,
      icon: <FiGithub />,
      url: 'https://github.com/Mutairu-Lawal',
    },
    {
      id: 2,
      icon: <FaXTwitter />,
      url: '#',
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/lawal-mutairu-biodun-704276111/',
    },
  ];
  return (
    <div className="flex gap-2">
      {iconsArray.map((icon) => (
        <a href={icon.url} target="_blank" key={icon.id}>
          <div
            className={`links-icons hover:cursor-pointer text-2xl hover:bg-gray-100 rounded-lg  dark:text-gray-100 p-2 ${className}`}
          >
            {icon.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
