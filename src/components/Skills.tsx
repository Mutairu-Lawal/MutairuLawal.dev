import SectionHeading from './SectionHeading';
import { skills } from '../utils/skills';

export default function Skills() {
  return (
    <section className="dark:bg-gray-950 dark:text-gray-100">
      <SectionHeading
        title="Skills"
        subtitle="The skills, tools and technologies I am really good at:"
      />

      <div
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1100"
        className="grid grid-cols-3 gap-4 md:grid-cols-7 mt-10"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill flex flex-col items-center justify-between gap-2"
          >
            <div className="flex md:hover:scale-125 transition-all duration-300 ease-in-out h-full">
              <img
                src={skill.imageUrl}
                alt={`${skill.name} icon`}
                loading="lazy"
                width={64}
                height={64}
                className={`md:hover:cursor-pointer object-contain ${
                  skill.name === 'NextJs'
                    ? 'dark:bg-white w-[64px] h-[64px] rounded-full'
                    : skill.name === 'Jquery'
                    ? 'dark:bg-white rounded-full'
                    : ''
                }`}
              />
            </div>

            <p className="text-base font-normal md:text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
