import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Me Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              Komal Sewda is a passionate CSE final year student, certified AI enthusiast, and MERN stack developer building smart, scalable, and socially impactful projects.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('achievements')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-left"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Let's Connect Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Let's Connect</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                Email: <a 
                  href="mailto:sewdaakomal78@gmail.com" 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  sewdaakomal78@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                Phone: <a 
                  href="tel:+917878181647" 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  +91 7878181647
                </a>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/komalsewda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  GitHub
                </a>
                <span className="text-gray-500">|</span>
                <a
                  href="https://www.linkedin.com/in/komal-sewda-274a35256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/komal-sewda-274a35256"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/komalsewda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:sewdaakomal78@gmail.com"
            className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Komal Sewda. Designed with <span className="text-yellow-400">💡</span> passion and <span className="text-blue-400">🚀</span> purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;