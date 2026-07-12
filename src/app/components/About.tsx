"use client";

import { GraduationCap, Award, BarChart3 } from 'lucide-react';
import { profile, highlights } from '@/content/portfolio';
import { ImageWithFallback } from './figma/ImageWithFallback';

const iconMap: Record<string, any> = {
  "Education": GraduationCap,
  "Coursera Tracks": Award,
  "Projects": BarChart3,
};

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Transforming raw data into strategic insights</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc3NjY3NjY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace Desk"
              className="relative rounded-2xl shadow-2xl shadow-yellow-500/20 border border-yellow-500/20 w-full h-[380px] object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          <div className="space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl text-white font-semibold">My Background</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {profile.intro}
              </p>
              <h3 className="text-2xl text-white font-semibold pt-2">Current Focus</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {profile.currentlyWorkingOn}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm">
                Data Storytelling
              </div>
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm">
                Python & R Analytics
              </div>
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm">
                Machine Learning
              </div>
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm">
                A/B Testing & Statistics
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.label] || BarChart3;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-6 text-center hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all hover:scale-105 group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-all">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-sm text-yellow-500 uppercase tracking-widest font-semibold mb-2">{item.label}</div>
                <div className="text-sm text-gray-400">{item.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
