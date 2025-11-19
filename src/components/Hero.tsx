import myPhoto from '../assets/images/Me.webp';
import SocailMediaLinks from './SocialMediaLinks';
// import { SlLocationPin } from 'react-icons/sl';
export default function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-down"
      data-aos-easing="linear"
      className="pt-40 pb-10 space-y-10 md:space-y-0 px-4 dark:bg-gray-950 lg:px-[70px] md:gap-5 md:flex md:flex-row-reverse md:justify-center md:items-center lg:gap-20 lg:pt-30 md:pb-20"
    >
      <div className="hero-image flex place-content-center mx-auto lg:mx-0">
        <div className="bg-gray-200 dark:bg-gray-800 px-4 sm:px-8 md:px-4 md:pl-0">
          <div className="w-[280px] h-[320px]">
            <img
              src={myPhoto}
              alt="my photo"
              className="w-full h-full object-cover relative bottom-10 border-white dark:border-gray-950 border-8 lg:right-9"
            />
          </div>
        </div>
      </div>
      <div className="hero-context space-y-4">
        <h1 className="text-gray-900 text-4xl font-semibold sm:text-5xl sm:leading-[48px] sm:font-bold lg:text-6xl lg:leading-[62px] dark:text-gray-100">
          Hi, I'm Mutairu <span className="hidden">👋</span>
        </h1>
        <p className="text-gray-900 text-base sm:text-lg sm:leading-7 lg:text-xl lg:leading-8 dark:text-gray-100">
          <strong>Full-Stack Developer</strong> <br />
          I build performant web applications that solve real-world problems
          from responsive frontends to scalable backends and optimized
          databases. Every solution is crafted for speed, security, and seamless
          deployment.
          <br />
          <br />
          <strong>Tech Stack:</strong> React • Next.js • TailwindCSS • FastAPI •
          Django • PostgreSQL • Docker
        </p>

        {/* location icon removed for now */}
        {/* <div className="flex items-center gap-2">
          <SlLocationPin />
          <p className="text-gray-900 text-base dark:text-gray-100">
            Lagos, Nigeria
          </p>
        </div> */}

        <div className="flex items-center gap-2 relative">
          <div className="circle w-3 h-3 bg-emerald-500 rounded-full"></div>
          <div className="ping w-5 h-5 -left-1 absolute bg-emerald-500 rounded-full"></div>

          <p className="text-gray-900 text-base dark:text-gray-100">
            Available for new projects
          </p>
        </div>

        <SocailMediaLinks />
      </div>
    </section>
  );
}
