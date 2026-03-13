import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Md. Ragib
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-400">
              Passionate Full Stack Developer building modern and
              responsive web applications.
            </p>
          </div>

          {/* NAV LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/project" className="hover:text-cyan-400 transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">Connect</h3>

            <div className="flex justify-center md:justify-start gap-4 text-lg sm:text-xl">

              <a
                href="https://github.com/MR-Washie"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammad-ragib-281064311"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaTwitter />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-5 sm:pt-6 text-center text-xs sm:text-sm text-gray-500">
          ©️ {new Date().getFullYear()} Md. Ragib. All rights <span><a href="/admin/dashboard" className="cursor-default">reserved.</a></span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;