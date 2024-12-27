import SectionHeading from './SectionHeading';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoCopyOutline } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import SocailMediaLinks from './SocialMediaLinks';

export default function Footer() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Optional: Add a toast/notification here to show success
        console.log('Copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };
  return (
    <section className="alt-bg pb-5">
      <div className="container mx-auto text-center *:">
        <SectionHeading
          title="Get in touch"
          subtitle={`What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}
        />
        <div className="grid place-content-center">
          <div className="flex items-center gap-3 text-lg md:text-3xl font-semibold mx-auto my-2">
            <a href="mailto:lawalmuktair@gmail.com">
              <div className="icon cursor-pointer">
                <MdOutlineMailOutline size={24} />
              </div>
            </a>

            <h2>lawalmuktair@gmail.com</h2>
            <div
              onClick={() => {
                copyToClipboard('lawalmuktair@gmail.com');
              }}
              className="links-icons hover:cursor-pointer text-2xl hover:bg-gray-100 rounded-lg dark:hover:bg-gray-700 dark:text-gray-100 p-2"
            >
              <IoCopyOutline />
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-3 text-lg md:text-3xl font-semibold mx-auto my-2">
            <a href="tel:+2347037686956">
              <div className="icon cursor-pointer">
                <LuPhone />
              </div>
            </a>

            <h2>+234 70-3768-6956</h2>
            <div
              onClick={() => {
                copyToClipboard(`+234 70-3768-6956`);
              }}
              className="links-icons hover:cursor-pointer text-2xl hover:bg-gray-100 rounded-lg dark:hover:bg-gray-700 dark:text-gray-100 p-2"
            >
              <IoCopyOutline />
            </div>
          </div>
        </div>
        <p className="my-2">You may also find me on these platforms!</p>
        <div className="links flex place-content-center">
          <SocailMediaLinks className="dark:hover:bg-gray-700" />
        </div>{' '}
        <p className="mt-4">
          &copy; {new Date().getFullYear()} lawalMuktair. All rights reserved.
        </p>
      </div>
    </section>
  );
}
