// import myPhoto2 from '../assets/images/main-pic.webp';  not used
import SectionHeading from './SectionHeading';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100"
    >
      <SectionHeading title="About me" className="mb-10" />
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1200"
        className="md:justify-between md:items-center md:gap-10 lg:gap-20"
      >
        {/* <div className="hero-image flex place-content-center mx-auto lg:mx-0 md:place-content-start">
          <div className="bg-gray-200 dark:bg-gray-800 px-4 sm:px-8">
            <div className="w-[280px] h-[320px] lg:w-[400px] lg:h-[480px]">
              <img
                src={myPhoto2}
                alt="my photo"
                className="w-full h-full object-cover relative bottom-10 border-gray-50 dark:border-gray-900 border-8"
              />
            </div>
          </div>
        </div> */}
        <div className="space-y-4 py-0">
          <h1 className="text-2xl font-semibold md:text-3xl text-center">
            The Developer Behind the Code
          </h1>
          <div className="text-base space-y-3 md:w-[80%] mx-auto">
            <p>
              I'm a full-stack developer who transforms complex technical
              challenges into scalable, high-performance web applications. With
              expertise spanning React, Next.js, and FastAPI on the frontend, to
              Django, PostgreSQL, and Docker on the backend, I specialize in
              building end-to-end solutions that balance clean architecture with
              exceptional user experience.
            </p>
            <p>
              My approach is rooted in technical precision and practical
              problem-solving. Whether architecting RESTful APIs, optimizing
              database performance, or crafting responsive interfaces with
              TailwindCSS, I focus on delivering systems that are maintainable,
              secure, and built for real-world impact
            </p>
            <p>
              I thrive in environments where innovation meets execution, and I'm
              always exploring emerging technologies to stay ahead of the curve.
              If you're looking for a developer who bridges design and
              functionality with proven results, let's connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
