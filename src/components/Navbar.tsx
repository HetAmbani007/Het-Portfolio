"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Floating Glassy Navbar */}
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                      bg-black/40 backdrop-blur-md border border-white/20
                      px-8 py-4 rounded-3xl shadow-lg flex items-center justify-between
                      w-[90%] max-w-3xl"
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-400">
          Het Ambani
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-200 font-medium">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="block md:hidden">
          <Bars3Icon
            className="w-8 h-8 text-white cursor-pointer"
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed top-0 right-0 w-72 h-full z-50
                         bg-gradient-to-b from-gray-900 via-gray-800 to-black
                         backdrop-blur-xl border-l border-white/20 shadow-2xl
                         p-6 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <XMarkIcon
                  className="w-7 h-7 text-white cursor-pointer"
                  onClick={() => setDrawerOpen(false)}
                />
              </div>

              {/* Menu Items */}
              <div className="mt-10 space-y-6 text-white font-semibold text-lg">
                <Link
                  href="/about"
                  onClick={() => setDrawerOpen(false)}
                  className="block hover:text-blue-400 transition"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setDrawerOpen(false)}
                  className="block hover:text-blue-400 transition"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="block hover:text-blue-400 transition"
                >
                  Contact
                </Link>
              </div>

              {/* Extra (Optional) Social Links */}
              <div className="mt-auto flex gap-6 pt-10 text-gray-400">
                <a href="#" className="hover:text-blue-400">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-blue-400">
                  GitHub
                </a>
                <a href="#" className="hover:text-blue-400">
                  Twitter
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
