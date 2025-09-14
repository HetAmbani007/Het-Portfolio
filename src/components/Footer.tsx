import { Linkedin } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const company = {
  name: "Het Ambani",
  description:
    "Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.",
  logo: "/logo.webp",
};

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/het-ambani/" },
  { icon: FaGithub, href: "https://github.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
];

const servicesLinks = [
  { text: "Web App", href: "#" },
  { text: "Mobile Application Development", href: "#" },
  { text: "DevOps", href: "#" },
];

const contactInfo = [
  { icon: FaEnvelope, text: "hetambani541@gmail.com" },
  { icon: FaPhone, text: "+91 9426872481" },
  { icon: FaMapMarkerAlt, text: "Ahmedabad, Gujarat, India" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 flex items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-white text-xl font-bold">
                {company.name?.charAt(0) || "H"}
              </div>
              <span className="text-2xl font-bold">{company.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {company.description}
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-full border border-gray-600 hover:bg-blue-500 hover:text-white transition transform hover:scale-110"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {contactInfo.map(({ icon: Icon, text }, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Icon className="text-blue-400" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; 2025 {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
