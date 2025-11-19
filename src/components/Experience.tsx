import SectionHeading from './SectionHeading';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="alt-bg">
      <SectionHeading
        title="Experience"
        subtitle="Here is a quick summary of my most recent experiences:"
      />
      <div data-aos="zoom-in" className="cards grid justify-center mt-10 gap-5">
        {experiences.map(
          ({
            id,
            companyName,
            projectName,
            date,
            description,
            title,
            projectLink,
          }) => (
            <div
              key={id}
              className="card shadow-md p-8 bg-white rounded-xl space-y-2 md:space-y-0 max-w-[900px] md:grid md:grid-cols-[150px_1fr_150px] md:items-start md:justify-start dark:bg-gray-800 gap-3"
            >
              <div className="company-logo">
                <h1 className="font-extrabold text-2xl md:order-1">
                  {companyName}
                </h1>
                <a
                  href={projectLink}
                  aria-label="visit company website"
                  className="link text-gray-500 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-300 italic text-sm"
                >
                  {projectName}
                </a>
              </div>
              <h3 className="years text-gray-500 text-sm font-normal md:order-3 md:text-end dark:text-gray-100">
                {date}
              </h3>
              <div className="work-details space-y-2 md:order-2">
                <h2 className="position font-semibold text-lg md:text-xl">
                  {title} | {projectName}
                </h2>
                {description.map((item, i) => (
                  <div
                    key={i}
                    className="list flex items-start gap-3 text-gray-600"
                  >
                    <div>
                      <div className="circle w-2 h-2 bg-gray-900 rounded-full mt-2 dark:bg-gray-100"></div>
                    </div>
                    <p className="font-normal text-base dark:text-gray-100">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
