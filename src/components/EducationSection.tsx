
import React from 'react';
import { GraduationCap, Award, Terminal, Code2, Brain, BookOpen } from 'lucide-react';

const achievements = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "IT Architect Student at 1337 Coding School",
    description: "Mastered fundamental concepts in software engineering through hands-on projects and peer learning",
    date: "Since Sept. 2022"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Professional License in Management and IT",
    description: "Acquired IT and economics skills, optimizing business operations and decision-making processes.",
    date: "2020 - 2021"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Fundamental License in Economic Sciences and Management",
    description: "Developed a strong foundation in economic sciences and management principles.",
    date: "2017 - 2020"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Baccalaureate in Economic Sciences and Management",
    description: "Completed secondary education with a focus on economic sciences and management.",
    date: "2017"
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen bg-dark-900 py-20">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <GraduationCap className="w-16 h-16 text-purple-400" />
          </div>
          <div className="ml-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Education
            </h2>
            <p className="text-gray-400 mt-2">
              Learning & Growth: My Educational Path
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-400 via-cyan-400 to-purple-400 rounded-full" />

          {/* Achievement Cards */}
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-0 top-0 w-4 h-4 transform md:-translate-x-1/2 bg-dark-900 border-2 border-purple-400 rounded-full" />

              {/* Card */}
              <div className="ml-8 md:ml-0 bg-dark-800 rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 group">
                {/* Date Badge */}
                <div className="absolute -top-3 right-4 px-4 py-1 bg-dark-700 rounded-full text-sm text-purple-400">
                  {achievement.date}
                </div>

                {/* Content */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-dark-700 rounded-lg text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Projects", value: "15+" },
            { label: "Skills", value: "10+" },
            { label: "Level", value: "12" },
            { label: "Rank", value: "Top 10%" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-xl p-6 text-center transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
