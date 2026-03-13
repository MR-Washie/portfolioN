


import React from "react";
// import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-16">

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-center">
          <img
            src="about.jpg"
            alt="profile"
            className="h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 object-cover rounded-full border border-cyan-400 shadow-lg hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Hi, I'm <span className="text-cyan-400 font-semibold">Mohammad Ragib</span> — 
            a passionate Full Stack MERN Developer who loves building modern,
            responsive, and interactive web applications.
          </p>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            I specialize in creating beautiful UI with React & Tailwind and powerful
            backend systems using Node, Express, and MongoDB. I enjoy turning ideas
            into real-world projects.
          </p>

          {/* SKILLS */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            {["React", "Tailwind", "Node.js", "MongoDB", "Express", "JavaScript", "Next.js"].map(
              (skill, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center md:justify-start">
            <a href="/ragib_resume.pdf" target="_blank" className="mt-8 px-5 sm:px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition font-semibold text-sm sm:text-base cursor-alias">
              Download Resume
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;