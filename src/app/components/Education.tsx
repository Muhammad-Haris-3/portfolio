"use client";

import { GraduationCap } from 'lucide-react';
import { education } from '@/content/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">My academic journey and foundation</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent"></div>

          <div className="space-y-12">
            {education.map((exp, index) => (
              <div key={index} className="relative pl-20 text-left">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-black border-4 border-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:scale-110 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-yellow-500" />
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-6 hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/40 transition-all hover:scale-[1.01] group">
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">{exp.school}</h3>
                      <p className="text-yellow-500 font-semibold text-sm mt-1">{exp.degree}</p>
                    </div>
                    <span className="self-start sm:self-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-xs font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
