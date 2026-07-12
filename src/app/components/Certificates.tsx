"use client";

import { Award, ExternalLink, Calendar, BookOpen } from "lucide-react";
import { specializationCertificates } from "@/content/portfolio";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">
            Professional certifications, job simulations, and learning tracks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializationCertificates.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all hover:scale-[1.02] group text-left"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-xl group-hover:from-yellow-500/30 group-hover:to-yellow-600/20 transition-all">
                    <Award className="w-7 h-7 text-yellow-500" />
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${cert.status === "Completed" ? "bg-green-500/15 border-green-500/30 text-green-400" : "bg-yellow-500/15 border-yellow-500/30 text-yellow-400"}`}
                  >
                    {cert.status}
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-yellow-500 transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    {cert.summary}
                  </p>
                </div>

                <div className="border-t border-yellow-500/15 pt-5 mb-6">
                  <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    Specialization Courses
                  </h4>
                  <div className="max-h-56 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    {cert.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-black/40 border border-yellow-500/10 rounded-xl hover:border-yellow-500/20 transition-all"
                      >
                        {course.href ? (
                          <a
                            href={course.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-gray-300 hover:text-yellow-500 flex items-center justify-between gap-2 transition-colors"
                          >
                            <span>{course.name}</span>
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        ) : (
                          <span className="text-xs font-medium text-gray-500 block">
                            {course.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Verify Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
