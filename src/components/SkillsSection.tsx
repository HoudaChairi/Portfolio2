// import React from 'react';
// import { Database, Layout, Container, Code2 } from 'lucide-react';

// const skills = [
//   {
//     category: 'Backend',
//     icon: <Database className="w-6 h-6 text-purple-400" />,
//     items: ['Django', 'SpringBoot', 'PostgreSQL']
//   },
//   {
//     category: 'Frontend',
//     icon: <Layout className="w-6 h-6 text-cyan-400" />,
//     items: ['HTML', 'CSS', 'JavaScript', 'Angular']
//   },
//   {
//     category: 'DevOps',
//     icon: <Container className="w-6 h-6 text-emerald-400" />,
//     items: ['Docker']
//   },
//   {
//     category: 'Core',
//     icon: <Code2 className="w-6 h-6 text-amber-400" />,
//     items: ['C/C++', 'Python', 'Java']
//   }
// ];

// export default function SkillsSection() {
//   return (
//     <section id="skills" className="min-h-screen bg-dark-900 py-20">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
//             Skills & Technologies
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             A comprehensive toolkit shaped by experience and continuous learning
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {skills.map((skill) => (
//             <div
//               key={skill.category}
//               className="group bg-dark-800 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
//             >
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="p-3 bg-dark-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
//                   {skill.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
//               </div>
              
//               <div className="flex flex-wrap gap-2">
//                 {skill.items.map((item) => (
//                   <span
//                     key={item}
//                     className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg 
//                       hover:bg-gradient-to-r hover:from-purple-400/20 hover:to-cyan-400/20 
//                       transition-colors duration-300"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Background decorations */}
//         <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 animate-pulse" />
//         <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/30 rounded-full filter blur-3xl opacity-20 animate-pulse" />
//       </div>
//     </section>
//   );
// }


// -------------------------------------------------

// import React from 'react';
// import { Database, Layout, Container, Code2 } from 'lucide-react';

// const skills = [
//   {
//     category: 'Backend',
//     icon: <Database className="w-6 h-6 text-purple-400" />,
//     items: ['Django', 'SpringBoot', 'PostgreSQL']
//   },
//   {
//     category: 'Frontend',
//     icon: <Layout className="w-6 h-6 text-cyan-400" />,
//     items: ['HTML', 'CSS', 'JavaScript', 'Angular']
//   },
//   {
//     category: 'DevOps',
//     icon: <Container className="w-6 h-6 text-emerald-400" />,
//     items: ['Docker']
//   },
//   {
//     category: 'Core',
//     icon: <Code2 className="w-6 h-6 text-amber-400" />,
//     items: ['C/C++', 'Python', 'Java']
//   }
// ];

// export default function SkillsSection() {
//   return (
//     <section id="skills" className="min-h-screen bg-dark-900 py-20 flex items-center justify-center">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
//             Skills & Technologies
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             A comprehensive toolkit shaped by experience and continuous learning
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {skills.map((skill) => (
//             <div
//               key={skill.category}
//               className="group bg-dark-800 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
//             >
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="p-3 bg-dark-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
//                   {skill.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
//               </div>
              
//               <div className="flex flex-wrap gap-2">
//                 {skill.items.map((item) => (
//                   <span
//                     key={item}
//                     className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg 
//                       hover:bg-gradient-to-r hover:from-purple-400/20 hover:to-cyan-400/20 
//                       transition-colors duration-300"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Background decorations */}
//         <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/30 rounded-full filter blur-3xl opacity-20 animate-pulse" />
//       </div>
//     </section>
//   );
// }


// -------------------------------------------------

import React from 'react';
import { Database, Layout, Container, Code2 } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6 text-amber-400" />,
    items: ['C', 'C++', 'Python']
  },
  {
    category: 'Libraries & Databases',
    icon: <Database className="w-6 h-6 text-green-400" />,
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Postgres', 'Adminer']
  },
  {
    category: 'DevOps',
    icon: <Container className="w-6 h-6 text-emerald-400" />,
    items: ['Docker', 'Git/Github']
  },
  {
    category: 'Frameworks',
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    items: ['Django']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen bg-dark-900 py-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit shaped by experience and continuous learning
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="group bg-dark-800 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-dark-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg
                      hover:bg-gradient-to-r hover:from-purple-400/20 hover:to-cyan-400/20
                      transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}