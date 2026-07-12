"use client";

import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import { profile, links } from '@/content/portfolio';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const githubUrl = links.find(l => l.label === 'GitHub')?.href || 'https://github.com';
  const linkedinUrl = links.find(l => l.label === 'LinkedIn')?.href || 'https://linkedin.com';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black px-6 relative overflow-hidden pt-24 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10 py-12">
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <p className="text-yellow-500 uppercase tracking-widest text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              {profile.role}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Transforming Data Into <span className="text-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">Insights</span>
            </h1>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Hi, I'm <span className="text-white font-semibold">{profile.name}</span>. {profile.intro}
          </p>
          
          <div className="flex gap-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-full hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-full hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hariskhokhar975@gmail.com" className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-full hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20" title="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-105 inline-flex items-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-yellow-500 border border-yellow-500/40 font-semibold rounded-full hover:bg-yellow-500/10 hover:border-yellow-500 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              View Resume
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-yellow-500/15 rounded-full blur-2xl"></div>
            <div className="relative z-10 w-full h-full p-2 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full border border-yellow-500/25 shadow-2xl">
              <ImageWithFallback
                src="/Profile_Picture.jpg"
                alt={profile.name}
                className="w-full h-full object-cover rounded-full shadow-2xl border-2 border-yellow-500/40 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
