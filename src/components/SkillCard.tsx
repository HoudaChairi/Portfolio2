import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  Icon: LucideIcon;
  skills: { name: string; level: number }[];
  gradientFrom: string;
  gradientTo: string;
  delay: number;
}

export default function SkillCard({ title, Icon, skills, gradientFrom, gradientTo, delay }: SkillCardProps) {
  return (
    <div 
      className="group perspective"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative transform-gpu transition-all duration-700 preserve-3d group-hover:rotate-y-180">
        {/* Front of card */}
        <div className="relative h-[300px] backface-hidden">
          <div className="absolute inset-0 bg-dark-800 rounded-2xl p-6 shadow-xl">
            <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <Icon className={`w-16 h-16 text-${gradientFrom}`} />
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map(skill => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 h-[300px] rotate-y-180 backface-hidden">
          <div className="h-full bg-dark-800 rounded-2xl p-6 shadow-xl">
            <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} opacity-10 rounded-2xl`} />
            <div className="h-full flex flex-col space-y-4">
              {skills.map(skill => (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-900 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-transform duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}