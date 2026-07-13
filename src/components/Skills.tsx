import SectionHeading from './SectionHeading';
import { skills } from '../utils/skills';

const duplicatedSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section>
      <SectionHeading
        title="Skills"
        subtitle="The skills, tools and technologies I am really good at:"
      />

      <div className="relative overflow-x-hidden py-10 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max gap-10 animate-marquee">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              className="flex shrink-0 flex-col items-center gap-2 justify-between"
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                width={64}
                height={64}
                loading="lazy"
                className={`object-contain transition-transform duration-300 ${
                  skill.name === 'NextJs'
                    ? 'dark:bg-white rounded-full'
                    : skill.name === 'Jquery'
                      ? 'dark:bg-white rounded-full'
                      : ''
                }`}
              />

              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
