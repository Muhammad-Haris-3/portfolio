"use client";

import { BarChart3, Brain, Database, Check } from 'lucide-react';
import { skills } from '@/content/portfolio';

const categoryIconMap: Record<string, any> = {
  "Data Analytics": BarChart3,
  "Learning Focus": Brain,
  "Tools": Database,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Tools, languages, and methodologies I leverage daily</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => {
            const Icon = categoryIconMap[category.category] || BarChart3;
            return (
              <div 
                key={category.category} 
                className="p-8 bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/40 transition-all hover:scale-105 group text-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-lg group-hover:from-yellow-500/30 group-hover:to-yellow-600/20 transition-all">
                    <Icon className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center gap-3 group-hover:text-gray-100 transition-colors">
                      <span className="w-5 h-5 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-yellow-500" />
                      </span>
                      <span className="text-base font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
