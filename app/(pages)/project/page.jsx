

import { db } from "@/app/lib/db";
import React from "react";
import Image from "next/image";

const Project = async () => {

    const [project] = await db.execute("select * from project order by created_at desc")

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20">

      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        Projects
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

        {project.map((p) => (
          <div
            key={p.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-500"
          >

            <img
              src={p.image || "/no-image.png"}
              className="h-44 sm:h-48 md:h-40 w-full object-cover"
              alt={p.title}
            />

            <div className="p-4 sm:p-5">

              <h2 className="text-lg sm:text-xl font-semibold text-cyan-400">
                {p.title}
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                {p.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.technology.split(",").map((t, index) => (
                  <span
                    key={index}
                    className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 sm:gap-4 mt-6">

                <a
                  href={p.github_link}
                  target="_blank"
                  className="flex-1 text-center py-2 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition text-xs sm:text-sm"
                >
                  GitHub
                </a>

                <a
                  href={p.live_link}
                  target="_blank"
                  className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium text-xs sm:text-sm"
                >
                  Live
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Project;