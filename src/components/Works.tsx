import SectionHeading from './SectionHeading';
import { BiLinkExternal } from 'react-icons/bi';
import project from '../assets/project-img/moniepoint.jpg';

export default function Works() {
  return (
    <section id="work">
      <SectionHeading
        title="works"
        subtitle="Some of the noteworthy projects I have built:"
      />
      <div className="projects mt-10">
        <div className="card shadow-md rounded-xl  dark:bg-gray-800 overflow-hidden grid md:grid-cols-2 ">
          <div className="project-img p-8 lg:p-10 bg-gray-100 flex flex-1 justify-center items-center dark:bg-gray-900">
            <div className="w-ful h-[300px] overflow-hidden rounded-xl hover:scale-105 duration-1000 ease-in-out cursor-pointer">
              <img
                src={project}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="project-description flex place-content-center">
            <div className="p-8 space-y-4 md:flex md:flex-col md:justify-center">
              <h1 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                Facebook
              </h1>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus cumque est deleniti esse. Amet ipsa, impedit
                officiis nihil pariatur nam quos tempore, atque soluta, sapiente
                cumque qui voluptatum optio perferendis.
              </p>

              <div className="framework flex gap-2 flex-wrap">
                <p className="text-sm font-medium px-5 py-1 bg-gray-200 text-gray-600 max-w-max rounded-full dark:bg-gray-400 dark:text-gray-200">
                  React
                </p>
                <p className="text-sm font-medium px-5 py-1 bg-gray-200 text-gray-600 max-w-max rounded-full dark:bg-gray-400 dark:text-gray-200">
                  javascript
                </p>
                <p className="text-sm font-medium px-5 py-1 bg-gray-200 text-gray-600 max-w-max rounded-full dark:bg-gray-400 dark:text-gray-200">
                  tailwindcss
                </p>
                <p className="text-sm font-medium px-5 py-1 bg-gray-200 text-gray-600 max-w-max rounded-full dark:bg-gray-400 dark:text-gray-200">
                  bootsstrap
                </p>
                <p className="text-sm font-medium px-5 py-1 bg-gray-200 text-gray-600 max-w-max rounded-full dark:bg-gray-400 dark:text-gray-200">
                  nextjs
                </p>
              </div>
              <div className="hover:cursor-pointer text-2xl hover:bg-gray-100 max-w-max rounded-lg dark:hover:bg-gray-900 dark:text-gray-100 p-2">
                <BiLinkExternal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
