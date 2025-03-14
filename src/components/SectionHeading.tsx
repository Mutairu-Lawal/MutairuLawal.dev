interface SectionHeadingProps {
  title: string;
  className?: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  className,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="px-4 md:px-80"
    >
      <h1
        className={`bg-gray-200 px-5 py-1 w-fit mx-auto rounded-xl text-gray-600 text-[14px] font-medium leading-5 dark:bg-gray-800 dark:text-gray-300 ${className}`}
      >
        {title}
      </h1>
      <div className="text-center text-lg font-normal md:text-xl mt-4 mb-4">
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
