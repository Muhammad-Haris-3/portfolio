"use client";

import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { contactDetails, contactLinks } from '@/content/portfolio';

export function Contact() {
  const emailVal = contactDetails.find(d => d.label === 'Email')?.value || 'hariskhokhar975@gmail.com';
  const whatsappVal = contactDetails.find(d => d.label === 'WhatsApp')?.value || 'MuhammadHarisKhokhar';
  const locationVal = contactDetails.find(d => d.label === 'Location')?.value || 'Multan, Pakistan';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with prefilled details
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
    window.location.href = `mailto:${emailVal}?subject=Portfolio Inquiry from ${name}&body=From: ${email}%0D%0A%0D%0A${message}`;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Let's discuss how data can drive your business forward</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <a href={`mailto:${emailVal}`} className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-semibold">Email</p>
                    <p className="text-white group-hover:text-yellow-500 transition-colors font-medium">{emailVal}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-semibold">WhatsApp</p>
                    <p className="text-white font-medium">{whatsappVal}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-semibold">Location</p>
                    <p className="text-white font-medium">{locationVal}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Opportunities Focus:</h3>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-pulse"></span>
                  Data Analytics & Science Roles
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  Dashboard Engineering (Tableau/Power BI)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                  SQL & Python Scripting Projects
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                  Data Storytelling & Reporting
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-500/30 shadow-2xl shadow-yellow-500/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 text-white placeholder-gray-500 transition-all font-medium"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 text-white placeholder-gray-500 transition-all font-medium"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 text-white placeholder-gray-500 resize-none transition-all font-medium"
                  placeholder="Tell me about your analytics needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
