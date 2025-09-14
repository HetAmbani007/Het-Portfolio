import Hero from "@/components/Hero";
import Task from "@/components/task";
import type { Metadata } from "next";

// ✅ SEO Optimized Metadata
export const metadata: Metadata = {
  title: "Het Ambani | Software Developer | React & Next.js Specialist",
  description:
    "Het Ambani is a skilled Frontend Developer and Software Engineer with expertise in React.js, React Native, Next.js, and modern web technologies. Explore projects, skills, and professional journey.",
  keywords: [
    "Het Ambani",
    "Frontend Developer",
    "React.js Developer",
    "React Native Developer",
    "Next.js Developer",
    "Software Engineer",
    "Web Developer",
    "UI Developer",
  ],
  openGraph: {
    title: "Het Ambani | Frontend Developer | React & Next.js Specialist",
    description:
      "Het Ambani is a Software Engineer specializing in Frontend Development with expertise in React.js, React Native, and Next.js.",
    url: "https://yourdomain.com",
    siteName: "Het Ambani Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Het Ambani Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Het Ambani | Frontend Developer | React & Next.js Specialist",
    description:
      "Het Ambani is a Software Engineer skilled in React.js, React Native, Next.js, and frontend development.",
    images: ["https://yourdomain.com/og-image.png"],
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Task /> */}
    </div>
  );
}
