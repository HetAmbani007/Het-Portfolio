"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiAmazon as SiAws,
  SiGitlab,
  SiGithub,
  SiBitbucket,
  SiJirasoftware,
  SiDocker,
} from "react-icons/si";
import Link from "next/link";
import Particles from "@/components/Prism";

export default function Hero() {
  const domains = [
    "E-commerce",
    "Healthcare",
    "Inventory Management",
    "Finance",
    "Taxation",
    "SaaS Platforms",
  ];

  return (
    <section className="relative w-full min-h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={150}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-0 pt-28 md:pt-40 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Het Ambani
          </span>{" "}
          <span className="inline-block animate-wave">👋</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A passionate Frontend Developer specializing in React, Next.js, and
          React Native. I build scalable, high-performance applications using
          Redux, TypeScript, and AWS. Experienced in creating responsive user
          interfaces, integrating RESTful and GraphQL APIs, and optimizing
          application performance. I also have hands-on experience in mobile app
          development with React Native, delivering user-friendly apps for both
          Android and iOS. Currently working as a{" "}
          <strong>System Engineer at TCS</strong>, I am committed to turning
          ideas into code that scales and drives value for businesses.
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-md md:text-lg text-gray-300 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          "From MVPs to production-grade apps, I turn concepts into code that
          scales."
        </motion.p>

        {/* Stats */}
        <motion.div
          className="mt-10 flex justify-center gap-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div>
            <h3 className="text-4xl font-bold text-blue-400">+15</h3>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">3+</h3>
            <p className="text-gray-300">Years of Experience</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link
            href="/projects"
            className="px-5 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition flex items-center gap-2"
          >
            View My Work <BsArrowRight />
          </Link>
          <Link
            href="/contact"
            className="p-4 border border-gray-400 text-gray-200 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        className="relative z-10 mt-32 w-full max-w-6xl mx-auto px-4 sm: lg:px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-200 text-center mb-6">
          Tech Stack & Tools
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-center">
          {[
            {
              icon: SiJavascript,
              name: "JavaScript",
              color: "hover:text-yellow-400",
            },
            {
              icon: SiTypescript,
              name: "TypeScript",
              color: "hover:text-blue-500",
            },
            { icon: SiReact, name: "React", color: "hover:text-cyan-400" },
            { icon: SiNextdotjs, name: "Next.js", color: "hover:text-white" },
            {
              icon: SiNodedotjs,
              name: "Node.js",
              color: "hover:text-green-500",
            },
            {
              icon: SiFirebase,
              name: "Firebase",
              color: "hover:text-yellow-500",
            },
            { icon: SiMongodb, name: "MongoDB", color: "hover:text-green-400" },
            { icon: SiAws, name: "AWS", color: "hover:text-orange-400" },
            { icon: SiGitlab, name: "GitLab", color: "hover:text-orange-500" },
            { icon: SiGithub, name: "GitHub", color: "hover:text-white" },
            {
              icon: SiBitbucket,
              name: "Bitbucket",
              color: "hover:text-blue-400",
            },
            {
              icon: SiJirasoftware,
              name: "Jira",
              color: "hover:text-blue-500",
            },
            { icon: SiDocker, name: "Docker", color: "hover:text-blue-400" },
          ].map(({ icon: Icon, name, color }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-gray-300 transition transform hover:scale-105"
            >
              <Icon className={`text-4xl ${color}`} />
              <span className="text-sm md:text-base">{name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Domains Section */}
      <motion.div
        className="relative z-10 mt-16 px-4 sm: lg:px-0 mb-20 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-200 text-center mb-6">
          Domains I’ve Worked On
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {domains.map((domain, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-md hover:scale-105 transform transition"
            >
              {domain}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
