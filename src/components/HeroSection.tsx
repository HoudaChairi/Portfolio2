import React, { useEffect, useState } from 'react';
import { Code2, Terminal, Sparkles, FileText } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = '1337 Student';
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('https://HoudaChairi.github.io/assets/pdf/ChairiHouda.pdf', '_blank');
  };

  return (
    <div id="home" className="min-h-screen bg-dark-900 text-white relative">
      <ParticlesBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
            <div className="space-y-6 max-w-xl w-full">
              <div className="flex items-center space-x-2">
                <Terminal className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-mono text-purple-400">Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold space-y-2">
                <span className="block">AI/ML Engineer</span>
                <span className="gradient-text">{text}</span>
                <span className="typing-cursor"></span>
              </h1>
              
              <p className="text-lg text-gray-400 leading-relaxed">
              Aspiring AI/ML engineer and student at 1337 Coding School,
              passionate about solving challenges through AI and machine learning while advancing expertise in the field.
              </p>
              
              <div className="flex items-center space-x-4">
                <button
                onClick={() => scrollToSection('#projects')}
                 className="bg-gradient-to-r from-purple-400 to-cyan-400 
                  px-6 py-3 rounded-lg font-semibold hover:opacity-90 
                  transition-all duration-300 flex items-center space-x-2 shadow-lg">
                  <Code2 className="w-5 h-5" />
                  <span>View Projects</span>
                </button>
                <button
                 onClick={() => scrollToSection('#contact')}
                 className="border border-purple-400 px-6 py-3 rounded-lg 
                  font-semibold hover:bg-purple-400/10 transition-all duration-300
                  flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Contact Me</span>
                </button>
                <button
                  onClick={openResume}
                  className="border border-cyan-400 px-6 py-3 rounded-lg 
                    font-semibold hover:bg-cyan-400/10 transition-all duration-300
                    flex items-center space-x-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
            
            <div className="relative w-full max-w-lg">
              <div className="floating">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 
                    rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 
                    group-hover:duration-200 animate-pulse"></div>
                  <div className="relative bg-dark-800 rounded-lg p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Code Editor-like elements */}
                      <div className="col-span-2 bg-dark-900 rounded-lg p-4 font-mono text-sm shadow-xl">
                        <div className="text-purple-400">class</div>
                        <div className="pl-4">
                          <span className="text-cyan-400">Developer</span> {"{"}
                        </div>
                        <div className="pl-8">
                          <span className="text-gray-400">name:</span> <span className="text-purple-300">Houda CHAIRI</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-gray-400">student at:</span> <span className="text-purple-300">1337</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-gray-400">skills:</span> <span className="text-purple-300">string[C/C++, Python, Django, Docker, Postgres, NumPy, Pandas, Matplotlib]</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-gray-400">passion:</span> <span className="text-purple-300">number</span> = <span className="text-cyan-300">42</span>
                        </div>
                        <div className="pl-4">{"}"}</div>
                      </div>
                      
                      {/* Terminal-like elements */}
                      <div className="col-span-2 bg-dark-900 rounded-lg p-4 font-mono text-sm shadow-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-gray-400">$ npm install success</div>
                        <div className="text-purple-400">$ launching dreams...</div>
                        <div className="text-cyan-400">$ ready for challenges_</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[120%] h-[120%] bg-purple-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 
                bg-cyan-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}