import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: "Chatbot",
    description: "Developed an intelligent chatbot using Oracle Cloud Infrastructure and Large Language Models (LLMs). Implemented RAG with LangChain for enhanced conversational capabilities.",
    tech: ["Python", "TensorFlow", "LLMs", "LangChain", "Oracle Cloud Infrastructure"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    links: {
      // github: "#"
    }
  },
  {
    title: "Ft_linear_regression",
    description: "Implemented a machine learning program using simple linear regression from scratch to predict car prices based on mileage. Applied gradient descent algorithm for parameter optimization.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1600&auto=format&fit=crop",
    links: {
      github: "https://github.com/HoudaChairi/Ft_linear_regression"
    }
  },
  {
    title: "Python for Data Science",
    description: "Completed an intensive program focusing on Python applications in AI/ML. Developed projects using data analysis, visualization, and machine learning libraries.",
    tech: ["Python", "NumPy", "Pillow", "Pandas", "Matplotlib", "AI/ML"],
    image: "./src/images/python1.jpg",
    links: {
      github: "https://github.com/HoudaChairi/Python_for_Data_Science"
    }
  },
  {
    title: "Ft_transcendence",
    description: "A real-time multiplayer Pong game platform featuring user authentication, a chat system, competitive gameplay, and AI-powered opponent models for enhanced single-player experiences.",
    tech: ["HTML", "CSS3", "Javascript", "Python", "Django", "Postgres", "Docker", "OAuth"],
    image: "./src/images/pingpong.png",
    links: {
      github: "https://github.com/HoudaChairi/Ft_transcendence",
      // live: "#"
    }
  },
  {
    title: "Ft_webserv",
    description: "A custom HTTP/1.1 web server implementation supporting multiple HTTP methods, CGI execution, and concurrent connections.",
    tech: ["C++", "HTTP/1.1", "Socket Programming", "CGI"],
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1600&auto=format&fit=crop",
    links: {
      github: "https://github.com/HoudaChairi/42Webserv"
    }
  },
  {
    title: "Inception",
    description: "Developed a containerized multi-service application using Docker and Docker Compose, including a WordPress site running on PHP-FPM, Nginx, and MariaDB, ensuring efficient deployment and scalability.",
    tech: ["Docker", "Docker Compose", "Nginx", "WordPress", "MariaDB"],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1600&auto=format&fit=crop",
    links: {
      github: "https://github.com/HoudaChairi/42_Inception"
    }
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen bg-dark-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects, demonstrating problem-solving skills and coding expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-dark-800 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/90 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="w-8 h-8 text-purple-400" />
                  <div className="flex space-x-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-dark-700 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

