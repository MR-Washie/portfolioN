// "use client";
// import React from "react";


// const skills = {
//   "Programming Languages": [
//     { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
//     { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
//     { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   ],

//   "Developer Tools": [
//     { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
//     { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
//     { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
//   ],

//   Frameworks: [
//     { name: "Next", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
//     { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
//     { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//   ],

//   "Cloud / Database": [
//     { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//     { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
//   ],
// };

// const coursework = [
//   "Data Structures & Algorithms",
//   "Object-Oriented Programming",
//   "Operating System",
//   "DBMS",
//   "Web Development",
//   "Complexity Analysis",
// ];

// const interests = [
//   "Competitive Programming",
//   "Full Stack Web Development",
// ];

// const Skills = () => {
//   return (
//     <section className="min-h-screen bg-black text-white px-8 py-20">

//       <h1 className="text-center text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
//         My Skills
//       </h1>

//       {/* SKILL CARDS */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

//         {Object.entries(skills).map(([title, items], i) => (
//           <div
//             key={i}
//             className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
//           >
//             <h2 className="text-xl font-semibold mb-6 text-cyan-400">{title}</h2>

//             <div className="grid grid-cols-3 gap-6">
//               {items.map((skill, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center gap-2 hover:scale-110 transition"
//                 >
//                   <img className="h-12 w-12" src={skill.img}  />
//                   <span className="text-sm text-gray-300">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* COURSEWORK */}
//       <div className="max-w-6xl mx-auto mt-16 bg-white/5 rounded-2xl p-8 border border-white/10">

//         <h2 className="text-xl text-purple-400 font-semibold mb-4">Coursework</h2>

//         <div className="flex flex-wrap gap-3">
//           {coursework.map((c, i) => (
//             <span
//               key={i}
//               className="px-4 py-1 bg-purple-400/10 border border-purple-400/30 rounded-full text-sm"
//             >
//               {c}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* INTERESTS */}
//       <div className="max-w-6xl mx-auto mt-10 bg-white/5 rounded-2xl p-8 border border-white/10">

//         <h2 className="text-xl text-cyan-400 font-semibold mb-4">Area of Interest</h2>

//         <div className="flex gap-4 flex-wrap">
//           {interests.map((item, i) => (
//             <span
//               key={i}
//               className="px-5 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-xl"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
    
//     </section>
//   );
// };

// export default Skills;


"use client";
import React from "react";


const skills = {
  "Programming Languages": [
    { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ],

  "Developer Tools": [
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  ],

  Frameworks: [
    { name: "Next", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ],

  "Cloud / Database": [
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
};

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Operating System",
  "DBMS",
  "Web Development",
  "Complexity Analysis",
];

const interests = [
  "Competitive Programming",
  "Full Stack Web Development",
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20">

      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        My Skills
      </h1>

      {/* SKILL CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

        {Object.entries(skills).map(([title, items], i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6 text-cyan-400">{title}</h2>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {items.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 hover:scale-110 transition"
                >
                  <img className="h-10 w-10 sm:h-12 sm:w-12" src={skill.img}  />
                  <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* COURSEWORK */}
      <div className="max-w-6xl mx-auto mt-12 sm:mt-16 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">

        <h2 className="text-lg sm:text-xl text-purple-400 font-semibold mb-4">Coursework</h2>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {coursework.map((c, i) => (
            <span
              key={i}
              className="px-3 sm:px-4 py-1 bg-purple-400/10 border border-purple-400/30 rounded-full text-xs sm:text-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* INTERESTS */}
      <div className="max-w-6xl mx-auto mt-8 sm:mt-10 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">

        <h2 className="text-lg sm:text-xl text-cyan-400 font-semibold mb-4">Area of Interest</h2>

        <div className="flex gap-3 sm:gap-4 flex-wrap">
          {interests.map((item, i) => (
            <span
              key={i}
              className="px-4 sm:px-5 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-xl text-xs sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default Skills;