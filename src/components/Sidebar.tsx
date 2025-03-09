import React from 'react';
import { Home, Code2, Briefcase, GraduationCap, Mail, Menu, X } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: <Home className="w-5 h-5" />, label: 'Home', href: '#home' },
  { icon: <Code2 className="w-5 h-5" />, label: 'Skills', href: '#skills' },
  { icon: <Briefcase className="w-5 h-5" />, label: 'Projects', href: '#projects' },
  { icon: <GraduationCap className="w-5 h-5" />, label: 'Education', href: '#education' },
  { icon: <Mail className="w-5 h-5" />, label: 'Contact', href: '#contact' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-dark-800 text-white lg:hidden hover:bg-dark-700 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav className={`fixed top-0 left-0 h-full bg-dark-800 text-white z-40 transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'} lg:w-20 lg:hover:w-64`}>
        <div className="h-full flex flex-col py-8">
          <div className="px-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex-1 px-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-4 px-4 py-3 text-gray-400 hover:text-white
                  rounded-lg hover:bg-dark-700 transition-all duration-200 group"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                <div className="min-w-[1.25rem]">{item.icon}</div>
                <span className="opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <div className="px-4 py-2">
            <div className="h-px w-full bg-dark-700 mb-4" />
            <div className="text-xs text-gray-500 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
              © 2024 Portfolio
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}