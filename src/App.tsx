import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 lg:pl-20">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;