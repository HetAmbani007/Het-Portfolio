"use client";
import React, { useState, useEffect } from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

// All icons as inline SVG components
const SparklesIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3l1.5 1.5L5 6l-1.5-1.5L5 3zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM12 10.5l-1.5-1.5L12 7.5 13.5 9 12 10.5zM5.5 12L4 13.5 2.5 12 4 10.5 5.5 12zM19.5 12L21 13.5 19.5 15 18 13.5 19.5 12zM12 15.5L10.5 17 12 18.5 13.5 17 12 15.5zM5 21l1.5-1.5L5 18l-1.5 1.5L5 21zM19 21l1.5-1.5L19 18l-1.5 1.5L19 21z"
    />
  </svg>
);

const CodeBracketIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ArrowRightIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const ArrowDownTrayIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const ArrowTopRightOnSquareIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const EnvelopeIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const CheckCircleIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const PaperAirplaneIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const Bars3Icon = ({ className }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Generate particles after hydration to avoid SSR mismatch
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }));
    setParticles(generatedParticles);
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
    "Tailwind CSS",
    "Redux",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(29, 78, 216, 0.15), transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/90 border-b border-white/10 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Portfolio
          </div>

          <div className="hidden md:flex space-x-8">
            {["Projects", "About", "Experience"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 font-semibold text-lg drop-shadow-md ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-blue-300 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // 👈 toggle menu
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 px-6 py-4 flex flex-col space-y-4">
            {["Projects", "About", "Experience"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)} // close after click
                className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-8 py-20 pt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            {/* Greeting */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-blue-400 text-sm font-medium">
                <SparklesIcon className="w-4 h-4" />
                <span>Hello, I'm</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                John Doe
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 font-light">
                Full Stack Developer & UI/UX Designer
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              I craft exceptional digital experiences through clean code and
              intuitive design. Specialized in building scalable web
              applications that solve real-world problems and deliver
              outstanding user experiences.
            </p>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200 flex items-center">
                <CodeBracketIcon className="w-5 h-5 mr-2 text-blue-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-gray-300 hover:border-blue-400/40 hover:text-white transition-all duration-300 hover:scale-105 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 50 + 800}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center">
                View My Work
                <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-6 py-3 border border-gray-600 rounded-lg font-medium hover:border-gray-400 hover:bg-white/5 transition-all duration-300 hover:scale-105 flex items-center">
                <ArrowDownTrayIcon className="mr-2 w-4 h-4" />
                Download CV
              </button>
            </div>

            {/* Stats */}
            <div
              className={`flex space-x-8 pt-4 transition-all duration-1000 delay-900 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Completed", value: "50+" },
                { label: "Happy Clients", value: "30+" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Animated border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 animate-pulse" />

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <div className="w-full h-96 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">JD</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Upload your image here
                    </p>
                  </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse" />
                  Available for work
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Connect With Me Section */}
      <section
        className={`relative z-10 py-20 px-8 transition-all duration-1000 delay-1200 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Connect With Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from
              you. Drop me a message and let's create something amazing
              together!
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 hover:border-gray-600/50 transition-all duration-300">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-300 font-medium block">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 font-medium block">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 font-medium block">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/30 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 font-medium block">
                  Message *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 mr-2 text-green-400" />
                  Usually respond within 24 hours
                </div>

                <button
                  type="submit"
                  className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center"
                >
                  Send Message
                  <PaperAirplaneIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Quick Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="text-center text-gray-400 text-sm mb-4">
                Or reach out directly
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:john@example.com"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  john@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`relative z-10 transition-all duration-1000 delay-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="px-8 py-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 John Doe. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[
                {
                  icon: LinkedinIcon,
                  href: "https://linkedin.com/in/johndoe",
                  label: "LinkedIn",
                },
                {
                  icon: GithubIcon,
                  href: "https://github.com/johndoe",
                  label: "GitHub",
                },
                {
                  icon: EnvelopeIcon,
                  href: "mailto:john@example.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  className={`group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 1200}ms` }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <ArrowTopRightOnSquareIcon className="w-3 h-3 absolute -top-1 -right-1 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
