import React, { useEffect, useRef, useState } from 'react';
import { Download, Eye, Laptop, Cpu, Brain, Globe, Code } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useAnimateOnScroll('fade-left');
  const textRef = useAnimateOnScroll('fade-right');

  const roles = [
    "Final Year CSE Student",
    "AI Developer", 
    "MERN Stack Builder",
    "Volleyball Champion"
  ];

  const roleIcons = [Laptop, Brain, Code, Globe];

  // Typewriter effect for roles
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let charIndex = 0;
    setDisplayText('');
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentRoleText.length) {
        setDisplayText(currentRoleText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Wait 2 seconds before moving to next role
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole, roles.length]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden transition-all duration-500"
      style={{
        background: 'radial-gradient(ellipse at center, #a5f1d4 0%, #e0f7fa 50%, #a5f1d4 100%)'
      }}
    >
      {/* Dark mode background */}
      <div className="dark:block hidden absolute inset-0 transition-all duration-500" 
           style={{
             background: 'radial-gradient(ellipse at center, #112240 0%, #0a192f 50%, #112240 100%)'
           }} />
      
      {/* Floating Binary Code Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400 dark:text-lime-400 font-mono text-xs animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M10,20 Q30,10 50,20 T90,20 M20,40 Q40,30 60,40 T90,40 M10,60 Q30,50 50,60 T90,60 M20,80 Q40,70 60,80 T90,80"
            stroke="currentColor"
            strokeWidth="0.1"
            fill="none"
            className="text-emerald-400 dark:text-lime-400 animate-pulse"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Profile Image with 3D Sphere */}
          <div 
            ref={profileRef} 
            className="flex justify-center lg:justify-start opacity-0 translate-x-8 transition-all duration-1000 order-2 lg:order-1"
          >
            <div className="relative">
              {/* 3D Rotating Sphere */}
              <div className="w-96 h-96 relative">
                <div className="absolute inset-0 animate-sphere-rotate">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 dark:from-lime-200/20 dark:to-emerald-200/20 backdrop-blur-sm border border-emerald-300/50 dark:border-lime-300/50 shadow-2xl" />
                </div>
                
                {/* Profile Image - Fixed Position */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  <img
                      src="/src/assets/c913fd6f-193f-4ba4-9773-ba64c70c10fc.jpg"
                    alt="Komal Sewda"
                    className="w-full h-full object-cover"
                  />
                  </div>
                  
                  {/* Neon Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400/30 dark:bg-lime-400/30 blur-2xl animate-pulse" />
                </div>
              </div>

              {/* Floating 3D Icons */}
              <div className="absolute -top-8 -right-8 w-16 h-16 animate-orbit-1">
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-cyan-500 dark:from-lime-500 dark:to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-14 h-14 animate-orbit-2">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-emerald-500 dark:to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-12 w-12 h-12 animate-orbit-3">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div 
            ref={textRef} 
            className="flex-1 text-center lg:text-left space-y-8 opacity-0 translate-x-[-2rem] transition-all duration-1000 order-1 lg:order-2"
          >
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-lime-400 dark:via-emerald-400 dark:to-cyan-400 animate-gradient">
                Komal Sewda
              </span>
            </h1>
            </div>
            
            {/* Animated Role Display */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <div className="flex items-center space-x-3 text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 dark:from-lime-500 dark:to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  {React.createElement(roleIcons[currentRole], { 
                    className: "w-6 h-6 text-white" 
                  })}
                </div>
                <span className="font-medium min-h-[1.5em] flex items-center">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-lime-500 dark:to-emerald-500 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-lime-600 dark:to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Eye size={20} className="relative z-10" />
                <a 
                  href="https://drive.google.com/file/d/1rrT24ype6c-7SyEZ-Fezzb4lJYoun3fn/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative z-10 flex items-center gap-2"
                >
                  👁 View Resume
                </a>
              </button>
              
              <button className="group relative px-8 py-4 border-2 border-emerald-500 dark:border-lime-500 text-emerald-600 dark:text-lime-400 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center gap-3 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-emerald-500 dark:bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={20} className="relative z-10 group-hover:text-white" />
                <a 
                  href="https://drive.google.com/uc?export=download&id=1rrT24ype6c-7SyEZ-Fezzb4lJYoun3fn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative z-10 flex items-center gap-2 group-hover:text-white"
                >
                  ⬇ Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;