import Image from "next/image";
import React from "react";

const projectsData = [
  {
    id: 1,
    title: "AGENT RIDER",
    description:
      "Agent Rider is a sophisticated application tailored for real estate agents operating in the Canadian market. Within this platform, users have the capability to either post job listings or apply for real estate-related positions. My role primarily involved backend development, where I adeptly utilized a combination of technologies and methodologies to ensure optimal functionality and performance. We utilized the Express.js framework and TypeScript language for backend development. ",
    image: "/images/projects/1.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech_Stack: [
      "Nodejs",
      "Expressjs",
      "Typescript",
      "PostgreSQL",
      "Sequelize ORM",
      "Firebase",
      "Socket.Io",
    ],
    contributions: [
      "Database Management: Designed database schema and established model relationships for efficient data management. ",
      "Data Validation: Ensured data integrity and security using Joi for meticulous data validation. ",
      "CRUD Operations: Implemented comprehensive CRUD operations for seamless user interaction.",
      "Filtering and Sorting: Incorporated filters, sorting mechanisms, and pagination to enhance user experience. ",
      "Custom Queries: Tailored specific queries to meet diverse application needs for smooth operation. ",
      "Real-time Chat: Integrated Socket.IO for seamless communication between users.",
      "Payment Gateway: Facilitated secure monetary transactions with Stripe integration.",
      "Notifications: Integrated Firebase Cloud Messaging for timely updates and messages.",
      "Email Communication: Utilized Firebase SES for effective email communication with users.",
      "Quality Assurance: Conducted thorough manual testing and crafted comprehensive test cases to ensure application robustness and reliability under various conditions. ",
    ],
  },
  {
    id: 2,
    title: "FANTOM PLAY",
    description:
      "Fantom Play is a gaming app where users can participate in various contests to win and earn money, akin to the popular Dream11 platform. As a backend developer for this project, I played a key role in its development. ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech_Stack: [
      "Nodejs",
      "Expressjs",
      "Typescript",
      "PostgreSQL",
      "Prisma ORM",
    ],
    contributions: [
      "Database Design: I led the design of various database models, ensuring efficient data storage and retrieval.",
      "Validation: Implemented robust validation using Zod to maintain data integrity. ",
      "Wallet: Developed the wallet functionality, managing user balances and transactions securely.",

      "Payment Gateway Integration: Integrated Cashfree payments for seamless transactions, including payment and payout functionalities with webhook support.",

      "Verification Systems: Implemented verification processes for bank accounts, Aadhar card, PAN card, driving license, etc., using Axios for communication with Cashfree APIs.",

      "Sensitive Data Handling: Managed sensitive wallet functionalities, calculating deductions such as GST and TDS accurately within the codebase.",

      "Notification System: Integrated Firebase Cloud Messaging for real-time notifications, keeping users engaged and informed about important updates.",

      "Email Communication: Utilized Firebase SES for reliable email communication, ensuring timely delivery of notifications and messages to users.",

      "Quality Assurance: Conducted manual testing of the application to identify and address any potential issues, ensuring a smooth user experience.",
    ],
  },
  {
    id: 3,
    title: "Guest Management System",
    description:
      "GMS was a comprehensive web and mobile application designed for restaurant reservations and management of statistical data regarding profits and clients. My primary role in this project was backend development. Leveraging Node.js and Express.js with TypeScript, we adhered to clean architecture principles. MongoDB served as our database solution. Within this project, I undertook tasks including database model design, CRUD operations, implementation of filters, sorting mechanisms, pagination, and more. ",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech_Stack: ["Nodejs", "Expressjs", "Typescript", "MongoDB", "Firebase"],
    contributions: [
      "Creating robust and scalable database schemas using MongoDB to store and manage reservation data, client information, and statistical reports",
      "Developing Create, Read, Update, and Delete operations to allow seamless interaction with the database.",
      "Implementing advanced filtering and sorting functionalities to enable users to efficiently query and organize data based on various parameters.",
      "Designing and implementing pagination features to handle large datasets and improve performance and user experience.",
      "Ensuring seamless integration between GMS and POS to facilitate smooth data flow and operational coherence.",
    ],
  },
];

const page = (params) => {
  console.log(params.params.id);

  const project = projectsData.find(
    (project) => project.id === parseInt(params.params.id)
  );
  if (project.id === undefined) {
    return <div>404 | Not Found</div>;
  }
  return (
    <div className="mt-20 flex flex-col justify-between items-start gap-10 py-5">
      <h2 className="text-lg lg:text-4xl text-center w-full font-light">
        {project.title}
      </h2>
      <div className="flex w-full flex-col lg:flex-row justify-between items-center">
        <div className="w-[49%] rounded-lg overflow-hidden object-cover max-w-[500px] mx-auto object-center  ">
          <Image src={project.image} width={500} height={300} />
        </div>
        <p className=" w-[50%] font-light tracking-wide text-lg ">
          {project.description}
        </p>
      </div>

      <div className=" w-[80%] mx-auto  ">
        <span className="text-lg lg:text-2xl font-light">Tech Stacks : </span>
        {project.tech_Stack.map((techName, index) =>
          index === project.tech_Stack.length - 1
            ? techName + "."
            : techName + ", "
        )}
      </div>
      <div className="w-[80%] mx-auto flex flex-col justify-between items-start gap-5 ">
        <h3 className=" text-lg lg:text-2xl font-light">Contribution :</h3>
        <div className="space-y-4">
          {project.contributions?.map((contribution, index) => (
            <div key={contribution}> - {contribution}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
