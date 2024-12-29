export default function CvButton() {
  return (
    <a
      href="../doc/MutairuLawalCv2.0.pdf"
      download
      aria-label="click to download my CV"
    >
      <div className="bg-gray-900 text-gray-50 px-4 py-[6px] rounded-xl text-center text-base font-medium hover:cursor-pointer hover:bg-gray-800 mt-2 md:mt-0 mx-4 lg:mx-0 dark:bg-gray-100 dark:text-gray-950 dark:hover:bg-gray-200">
        Download CV
      </div>
    </a>
  );
}
