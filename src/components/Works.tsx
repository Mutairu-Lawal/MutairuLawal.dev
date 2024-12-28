import SectionHeading from './SectionHeading';
import { BiLinkExternal } from 'react-icons/bi';
import { projects as works } from '../data/projects';

export default function Works() {
  const btns = (arryOfLang: string[]) => {
    return arryOfLang.map((lang, i) => (
      <p
        key={i}
        className="text-sm font-medium px-5 py-1 bg-gray-200 text-gray-600 max-w-max rounded-full dark:bg-gray-400 dark:text-gray-200"
      >
        {lang}
      </p>
    ));
  };

  return (
    <section id="work">
      <SectionHeading
        title="works"
        subtitle="Some of the noteworthy projects I have built:"
      />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="projects mt-10 space-y-5"
      >
        {works.map((work, index) => (
          <div
            key={work.id}
            className="card shadow-md rounded-xl  dark:bg-gray-800 overflow-hidden grid md:grid-cols-2"
          >
            <div
              className={`project-img p-8 lg:p-10 bg-gray-100 flex flex-1 justify-center items-center dark:bg-gray-900 ${
                index % 2 !== 0 && 'md:order-1'
              }`}
            >
              <div className="w-ful h-[300px] overflow-hidden rounded-xl hover:scale-105 duration-1000 ease-in-out cursor-pointer">
                <a href={work.link} target="_blank">
                  <img
                    src={work.imageUrl}
                    alt={`${work.title} project image`}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>
            <div className="project-description flex place-content-center">
              <div className="p-8 space-y-4 md:flex md:flex-col md:justify-center">
                <h1 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {work.title}
                </h1>
                <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                  {work.description}
                </p>

                <div className="framework flex gap-2 flex-wrap">
                  {btns(work.languages)}
                </div>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <div className="hover:cursor-pointer text-2xl hover:bg-gray-100 max-w-max rounded-lg dark:hover:bg-gray-900 dark:text-gray-100 p-2 mt-3s">
                    <BiLinkExternal />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
