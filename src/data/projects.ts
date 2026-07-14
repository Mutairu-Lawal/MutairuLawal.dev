import shopNow from '../assets/project-img/shopNow.webp';
import quizWhizz from '../assets/project-img/quizzwhizz.webp';
import myPiggyVestClone from '../assets/project-img/piggyVest-desktop-loginPage.png';
import learnFlow from '../assets/project-img/learnflow-dashboard.webp';

export const projects = [
  {
    id: 71420260109,
    title: 'learnFlow',
    description:
      'A web-based platform lms  designed to help users learn and test their knowledge through structured content and interactive quizzes. It combines educational resources with assessment tools to create a continuous learning loop',
    imageUrl: learnFlow,
    languages: [
      'Typescript',
      'React',
      'Nextjs',
      'Expressjs',
      'React Query',
      'Tailwind CSS',
      'Prisma',
      'Postgresql',
      'Nodejs',
      'Vitest',
    ],
    link: `https://learn2pass.netlify.app/`,
  },
  {
    id: 10,
    title: 'myPiggyVestClone',
    description: `A clone of the PiggyVest web application, a leading financial technology company in Nigeria. This clone app replicates the core features and user experience of the original website, providing users with a seamless and familiar platform for managing their finances and investments.`,
    imageUrl: myPiggyVestClone,
    languages: ['Typescript', 'React', 'Redux', 'Tailwind CSS'],
    link: `https://mypiggyvestclone.netlify.app/`,
  },
  {
    id: 9,
    title: 'QuizWhiz',
    description: `An interactive quiz application that tests users knowledge across multiple topics. Features include real-time scoring, timed questions, and a dynamic user interface that makes learning engaging and fun. The platform offers instant feedback and allows users to track their progress as they challenge themselves with various quizzes.`,
    imageUrl: quizWhizz,
    languages: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    link: `https://quizzwhizz.netlify.app/`,
  },
  {
    id: 8,
    title: 'ShopNow',
    description: `e-commerce website that allows users to browse and purchase products online. The website features a user-friendly interface, allowing users to easily navigate through the website and view products. The website also includes a shopping cart feature, allowing users to add and remove items from their cart. The website also includes a checkout process, allowing users to securely enter their payment information and complete their purchase.`,
    imageUrl: shopNow,
    languages: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    link: `https://mutairu-lawal.github.io/kc_Task7/`,
  },
];
