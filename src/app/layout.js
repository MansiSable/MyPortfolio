import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mansi | Full Stack Developer",
  description:
    "Full Stack Developer specializing in TypeScript, Express.js, and Next.js with expertise in React, HTML, CSS, JavaScript, and ORM tools like Sequelize and Prisma. Experienced in MySQL, MongoDB, PostgreSQL, AWS, Firebase, and Strapi. Dedicated to building robust, user-friendly digital solutions.",
  openGraph: {
    title: "Mansi | Full Stack Developer",
    description:
      "Full Stack Developer specializing in TypeScript, Express.js, and Next.js with expertise in React, HTML, CSS, JavaScript, and ORM tools like Sequelize and Prisma. Experienced in MySQL, MongoDB, PostgreSQL, AWS, Firebase, and Strapi. Dedicated to building robust, user-friendly digital solutions.",
    images: [
      {
        url: "/opengraph.png",
        width: 800,
        height: 600,
        alt: "Mansi-Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body
        className={inter.className + "flex min-h-screen flex-col bg-[#121212]"}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
