
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Web Developer",
];

const Intro = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    setText(roles[index].substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="min-h-screen bg-black text-white flex items-center px-6 md:px-16 lg:px-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Md. Ragib
            </span>
          </h1>

          {/* TYPING EFFECT */}
          <h2 className="mt-4 text-xl sm:text-2xl text-cyan-400 h-8">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Passionate Software Developer building modern, responsive and
            interactive web applications.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <Link
              href="/project"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center mt-10 md:mt-0">

          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-cyan-400/30 blur-3xl rounded-full"></div>

          <img
            src="/profile.jpeg"
            alt="profile"
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-400 shadow-xl hover:scale-105 transition"
          />

        </div>

      </div>
    </section>
  );
};

export default Intro;