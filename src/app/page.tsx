import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-yellow-500/25 selection:text-white">
      {/* Decorative top grid overlay */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.06),transparent_35%),radial-gradient(circle_at_top_right,rgba(234,179,8,0.04),transparent_30%),linear-gradient(180deg,#000000_0%,#090909_50%,#000000_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(234,179,8,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.015)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20 mask-[linear-gradient(to_bottom,black,transparent_95%)]" />

      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />

      <footer className="py-12 bg-black text-center border-t border-yellow-500/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold tracking-tight text-white uppercase">Muhammad Haris</h3>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Data Analyst Portfolio © 2026</p>
          </div>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </footer>
    </main>
  );
}
