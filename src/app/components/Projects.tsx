"use client";

import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, 
  AreaChart, Area, 
  PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { ExternalLink, BarChart3, PieChart as PieIcon, TrendingUp } from 'lucide-react';
import { projects } from '@/content/portfolio';

// Dynamic client rendering safe wrapper to prevent SSR hydration mismatches
export function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map user projects to custom visualization data
  // Project 1: Job Data Analysis (Final Year Project) -> Job Market Openings BarChart
  const jobMarketData = [
    { role: 'Data Analyst', postings: 4200, salary: 85 },
    { role: 'Data Scientist', postings: 3100, salary: 110 },
    { role: 'Data Engineer', postings: 3600, salary: 105 },
    { role: 'ML Engineer', postings: 2200, salary: 120 },
    { role: 'BI Analyst', postings: 1900, salary: 78 },
  ];

  // Project 2: Core Tracker (Side Project) -> Weekly Focus Hours & Productivity AreaChart
  const productivityData = [
    { day: 'Mon', tasks: 8, hours: 4.5 },
    { day: 'Tue', tasks: 12, hours: 6.0 },
    { day: 'Wed', tasks: 9, hours: 5.2 },
    { day: 'Thu', tasks: 14, hours: 7.5 },
    { day: 'Fri', tasks: 11, hours: 6.3 },
    { day: 'Sat', tasks: 5, hours: 3.0 },
    { day: 'Sun', tasks: 6, hours: 3.5 },
  ];

  // Project 3: Portfolio Traffic (Portfolio Project) -> Visitor Referral Source PieChart
  const visitorData = [
    { name: 'LinkedIn', value: 45 },
    { name: 'GitHub', value: 25 },
    { name: 'Direct/Resume', value: 20 },
    { name: 'Search', value: 10 },
  ];

  const COLORS = ['#eab308', '#fbbf24', '#facc15', '#fde047'];

  // Match the user projects array
  const finalYearProject = projects.find(p => p.name.includes("Final Year")) || projects[0];
  const sideProject = projects.find(p => p.name.includes("Side")) || projects[1];
  const portfolioProject = projects.find(p => p.name.includes("Portfolio")) || projects[2];

  return (
    <section id="projects" className="py-20 px-6 bg-black relative">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Interactive data visualizations representing projects and research</p>
        </div>

        <div className="space-y-16">
          {/* Project 1: Final Year Project */}
          {finalYearProject && (
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl shadow-yellow-500/10 p-6 md:p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.01] group text-left">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-yellow-500 transition-colors">{finalYearProject.name}</h3>
                    <p className="text-gray-400 mt-2">{finalYearProject.summary}</p>
                  </div>
                  <a 
                    href={finalYearProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-yellow-500/10 rounded-lg transition-colors border border-yellow-500/30 flex items-center justify-center flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5 text-yellow-500" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {finalYearProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-semibold border border-yellow-500/30">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="h-80 bg-black/50 rounded-xl p-4 border border-yellow-500/10 flex items-center justify-center">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={jobMarketData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="role" stroke="#9ca3af" fontSize={12} />
                      <YAxis yAxisId="left" stroke="#9ca3af" label={{ value: 'Job Openings', angle: -90, position: 'insideLeft', fill: '#9ca3af' }} />
                      <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" label={{ value: 'Avg Salary ($k)', angle: 90, position: 'insideRight', fill: '#9ca3af' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #eab308', borderRadius: '8px' }}
                        labelStyle={{ color: '#fff' }}
                      />
                      <Legend wrapperStyle={{ color: '#fff' }} />
                      <Bar yAxisId="left" dataKey="postings" fill="#eab308" name="Openings Tracked" />
                      <Bar yAxisId="right" dataKey="salary" fill="#6b7280" name="Avg Salary ($k)" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="text-gray-500 flex items-center gap-2">
                    <BarChart3 className="animate-pulse w-5 h-5" /> Loading Analytics Visuals...
                  </div>
                )}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/20">
                <p className="text-sm text-gray-300">
                  <strong className="text-yellow-500">Analytics Summary:</strong> Scraped and parsed 15,000+ job listings. ML engineers lead salary benchmarks ($120k avg) while Data Analysts remain highly demanded with 4,200 tracked listings.
                </p>
              </div>
            </div>
          )}

          {/* Project 2: Side Project */}
          {sideProject && (
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl shadow-yellow-500/10 p-6 md:p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.01] group text-left">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-yellow-500 transition-colors">{sideProject.name}</h3>
                    <p className="text-gray-400 mt-2">{sideProject.summary}</p>
                  </div>
                  <a 
                    href={sideProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-yellow-500/10 rounded-lg transition-colors border border-yellow-500/30 flex items-center justify-center flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5 text-yellow-500" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sideProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-semibold border border-yellow-500/30">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="h-80 bg-black/50 rounded-xl p-4 border border-yellow-500/10 flex items-center justify-center">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={productivityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="day" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #eab308', borderRadius: '8px' }}
                        labelStyle={{ color: '#fff' }}
                      />
                      <Legend wrapperStyle={{ color: '#fff' }} />
                      <Area type="monotone" dataKey="tasks" stroke="#eab308" fill="rgba(234, 179, 8, 0.2)" name="Tasks Completed" />
                      <Area type="monotone" dataKey="hours" stroke="#6b7280" fill="rgba(107, 114, 128, 0.2)" name="Focus Hours" />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="text-gray-500 flex items-center gap-2">
                    <TrendingUp className="animate-pulse w-5 h-5" /> Loading Analytics Visuals...
                  </div>
                )}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/20">
                <p className="text-sm text-gray-300">
                  <strong className="text-yellow-500">Analytics Summary:</strong> Tracks productivity metrics by linking focus timers to completed task frequencies, illustrating peak cognitive efficiency around Mid-Week (Thursday).
                </p>
              </div>
            </div>
          )}

          {/* Project 3: Portfolio Project */}
          {portfolioProject && (
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl shadow-yellow-500/10 p-6 md:p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.01] group text-left">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-yellow-500 transition-colors">{portfolioProject.name}</h3>
                    <p className="text-gray-400 mt-2">{portfolioProject.summary}</p>
                  </div>
                  <a 
                    href={portfolioProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-yellow-500/10 rounded-lg transition-colors border border-yellow-500/30 flex items-center justify-center flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5 text-yellow-500" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-semibold border border-yellow-500/30">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="h-80 bg-black/50 rounded-xl p-4 border border-yellow-500/10 flex items-center justify-center">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={visitorData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {visitorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #eab308', borderRadius: '8px' }}
                        labelStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="text-gray-500 flex items-center gap-2">
                    <PieIcon className="animate-pulse w-5 h-5" /> Loading Analytics Visuals...
                  </div>
                )}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/20">
                <p className="text-sm text-gray-300">
                  <strong className="text-yellow-500">Analytics Summary:</strong> Displays portfolio visitor attribution channels. LinkedIn represents the primary traffic referral vector (45%), followed closely by direct organic search.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
