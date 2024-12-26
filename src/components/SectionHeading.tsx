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
      className="
    "
    >
      <h1
        className={`bg-gray-200 px-5 py-1 w-fit mx-auto rounded-xl text-gray-600 text-[14px] font-medium leading-5 dark:bg-gray-800 dark:text-gray-300 ${className}`}
      >
        {title}
      </h1>
      <div className="text-center text-lg font-normal md:text-xl mt-4 mb-10">
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
