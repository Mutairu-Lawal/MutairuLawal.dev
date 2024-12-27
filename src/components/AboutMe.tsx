import myPhoto2 from '../assets/images/main-pic.jpg';
import SectionHeading from './SectionHeading';

export default function AboutMe() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <SectionHeading title="About me" className="mb-20" />
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1200"
        className="md:grid md:grid-cols-2 md:justify-between md:items-center md:gap-10 lg:gap-20"
      >
        <div className="hero-image flex place-content-center mx-auto lg:mx-0 md:place-content-start">
          <div className="bg-gray-200 dark:bg-gray-800 px-4 sm:px-8">
            <div className="w-[280px] h-[320px] lg:w-[400px] lg:h-[480px]">
              <img
                src={myPhoto2}
                alt="my photo"
                className="w-full h-full object-cover relative bottom-10 border-gray-50 dark:border-gray-900 border-8"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-4 py-3 md:mt-0">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Curious about me? Here you go!
          </h1>
          <div className="text-base space-y-4">
            <p>
              Hi, I’m Mutairu Lawal, a front-end developer from Nigeria with a
              passion for crafting beautiful and functional web experiences.
            </p>
            <p>
              With expertise in web development technologies and modern
              frameworks on building responsive and user-friendly designs that
              meet modern web standards. I’m dedicated to staying current with
              the latest trends in front-end development and constantly honing
              my skills to deliver innovative solutions.
            </p>
            <p>
              My mission is to create impactful web applications that solve
              real-world challenges and inspire positive change. I thrive in
              collaborative environments and am always excited to connect,
              learn, and grow with like-minded professionals.
            </p>
            <p>
              Let’s build something amazing together! I promise i don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
