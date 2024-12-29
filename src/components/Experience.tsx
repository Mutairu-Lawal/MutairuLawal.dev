import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section className="alt-bg">
      <SectionHeading
        title="Experience"
        subtitle="Here is a quick summary of my most recent experiences:"
      />
      <div data-aos="zoom-in" className="cards grid justify-center mt-10">
        <div className="card shadow-md p-8 bg-white rounded-xl space-y-2 md:space-y-0 max-w-[900px] md:grid md:grid-cols-[200px_1fr_200px] md:items-start md:justify-start dark:bg-gray-800">
          <div className="company-logo">
            <h1 className="font-extrabold text-2xl">KODE HAUZ</h1>
          </div>
          <h3 className="years text-gray-500 text-base font-normal md:order-1 md:text-end dark:text-gray-100">
            Oct 2021 - Present
          </h3>
          <div className="work-details space-y-2">
            <h2 className="position font-semibold text-lg md:text-xl">
              Jnr Frontend Developer
            </h2>
            <div className="list flex items-start gap-3 text-gray-500">
              <div className="div">
                <div className="circle w-2 h-2 bg-gray-900 rounded-full mt-2 dark:bg-gray-100"></div>
              </div>
              <p className="font-normal text-base dark:text-gray-100">
                Assisted in the development of responsive web pages and
                components for the kodehauz website
              </p>
            </div>
            <div className="list flex items-start gap-3 text-gray-600">
              <div className="div">
                <div className="circle w-2 h-2 bg-gray-900 rounded-full mt-2 dark:bg-gray-100"></div>
              </div>
              <p className="font-normal text-base dark:text-gray-100">
                Worked closely with senior developers to learn and implement
                best practices in frontend development.
              </p>
            </div>
            <div className="list flex items-start gap-3 text-gray-600">
              <div className="div">
                <div className="circle w-2 h-2 bg-gray-900 rounded-full mt-2 dark:bg-gray-100"></div>
              </div>
              <p className="font-normal text-base dark:text-gray-100">
                Collaborated with designers and backend developers to ensure the
                UI of the website was consistent and visually appealing.
              </p>
            </div>
            <div className="list flex items-start gap-3 text-gray-600">
              <div className="div">
                <div className="circle w-2 h-2 bg-gray-900 rounded-full mt-2 dark:bg-gray-100"></div>
              </div>
              <p className="font-normal text-base dark:text-gray-100">
                Collaborated with cross-functional teams to gather and refine us
                requirements and specifications for new features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
