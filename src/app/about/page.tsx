"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const journey = [
  {
    year: "2025",
    role: "System Engineer",
    company: "Tata Consultancy Services",
    duration: "Jan 2025 – Present",
    location: "Gandhinagar, India",
    points: [
      "Managing client communication for requirements gathering and project planning.",
      "Utilized Redux for managing complex application state.",
      "Played a key role in a financial project as a Front-end Developer, enhancing application performance.",
      "Implemented CI/CD pipelines for faster deployment and automated testing.",
      "Worked with AWS services like S3, Lambda, and DynamoDB for cloud-based solutions.",
      "Optimized Next.js applications for SSR and improved SEO performance.",
    ],
  },
  {
    year: "2023",
    role: "Software Engineer",
    company: "Distinction Dev",
    duration: "Oct 2023 – May 2024",
    location: "Ahmedabad, India",
    points: [
      "Developed scalable front-end and back-end applications using Node JS and React JS.",
      "Created reusable React components to break down complex UI elements.",
      "Implemented and deployed serverless back-end application using AWS Lambda.",
      "Set up automated CI/CD workflows using GitLab pipelines.",
      "Optimized Next.js pages for performance and SEO.",
      "Integrated cloud storage and serverless functions for faster response times.",
    ],
  },
  {
    year: "2022",
    role: "Software Engineer",
    company: "Simform Solutions",
    duration: "Jan 2022 – Sep 2023",
    location: "Ahmedabad, India",
    points: [
      "Implemented pixel-perfect user interfaces for cross-platform mobile applications.",
      "Enhanced application performance and user experience by optimizing REST API calls.",
      "Utilized Redux-toolkit for state management.",
      "Actively participated in open-source development.",
      "Worked on server-side rendering optimization using Next.js.",
      "Configured CI/CD pipelines for mobile and web applications deployment.",
    ],
  },
];

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-20 pt-32">
      {/* About Me Section */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[600px]">
            <Image
              src="/profile.jpeg"
              alt="Het Ambani"
              width={600}
              height={600}
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-300 text-sm sm:text-base">
            I'm a passionate Software Engineer currently working as a{" "}
            <strong>System Engineer at TCS</strong>. I have 3+ years of
            experience in frontend development, specializing in building
            scalable and high-performance web and mobile applications.
          </p>

          <p className="text-gray-300 text-sm sm:text-base">
            My expertise spans across{" "}
            <strong>
              JavaScript, TypeScript, React.js, Next.js, React Native, Firebase,
              and AWS
            </strong>
            . I enjoy turning complex requirements into seamless user
            experiences and writing clean, maintainable code.
          </p>

          <p className="text-gray-300 text-sm sm:text-base">
            Over the years, I’ve had the opportunity to collaborate with{" "}
            <strong>international clients</strong>, delivering real-world
            projects that meet global standards. I’m constantly exploring new
            technologies and best practices to enhance the solutions I build.
          </p>

          <p className="text-gray-300 text-sm sm:text-base">
            In addition to frontend development, I have hands-on experience in{" "}
            <strong>DevOps practices</strong>. I have set up{" "}
            <strong>CI/CD pipelines using GitLab</strong>, worked with AWS
            services like S3, Lambda, and DynamoDB, and ensured smooth
            cloud-based delivery of applications.
          </p>
        </motion.div>
      </div>

      {/* Professional Journey Timeline */}
      <div className="max-w-4xl w-full relative">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded"></div>

        <ul className="ml-16 space-y-16">
          {journey.map((item, idx) => {
            const controls = useAnimation();
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            useEffect(() => {
              if (inView) controls.start({ opacity: 1, x: 0 });
            }, [controls, inView]);

            return (
              <motion.li
                ref={ref}
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                animate={controls}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-8 top-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full border-2 border-white shadow-lg"></div>

                {/* Year */}
                <span className="text-blue-400 font-bold text-lg">
                  {item.year}
                </span>

                {/* Content */}
                <div className="mt-2 pl-0">
                  <h4 className="text-white font-semibold text-lg">
                    {item.role} @ {item.company}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.duration} – {item.location}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-300 text-sm space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
