"use client";

import { useState } from "react";
import { Award, ExternalLink, BookOpen, ChevronDown } from "lucide-react";
import { specializationCertificates } from "@/content/portfolio";

// Cards start collapsed: issuer, name and status only. Summary and course list
// live behind "See more", and everything past the first few behind "See all".
const FEATURED_COUNT = 3;

export function Certificates() {
  const [openName, setOpenName] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll
    ? specializationCertificates
    : specializationCertificates.slice(0, FEATURED_COUNT);

  return (
    <section
      id="certificates"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-gray-900 to-black relative"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-base sm:text-xl text-gray-400">
            Professional certifications, job simulations, and learning tracks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {visible.map((cert) => {
            // Certificates backed by a hosted PDF open the document itself
            // rather than an issuer verification page.
            const isHostedPdf = cert.href.endsWith(".pdf");
            const isOpen = openName === cert.name;

            return (
              <div
                key={cert.name}
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col hover:border-yellow-500/40 transition-colors group text-left"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-xl group-hover:from-yellow-500/30 group-hover:to-yellow-600/20 transition-all">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-500" />
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border whitespace-nowrap ${cert.status === "Completed" ? "bg-green-500/15 border-green-500/30 text-green-400" : "bg-yellow-500/15 border-yellow-500/30 text-yellow-400"}`}
                  >
                    {cert.status}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  {cert.issuer}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-yellow-500 transition-colors leading-tight">
                  {cert.name}
                </h3>

                <button
                  type="button"
                  onClick={() => setOpenName(isOpen ? null : cert.name)}
                  aria-expanded={isOpen}
                  className="mt-4 self-start inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-500 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  {isOpen ? "See less" : "See more"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <>
                    <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                      {cert.summary}
                    </p>

                    {cert.courses.length > 0 && (
                      <div className="border-t border-yellow-500/15 pt-5 mt-5">
                        <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                          <BookOpen className="w-3.5 h-3.5" />
                          Specialization Courses
                        </h4>
                        <div className="space-y-2">
                          {cert.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="p-3 bg-black/40 border border-yellow-500/10 rounded-xl hover:border-yellow-500/20 transition-colors"
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
                    )}
                  </>
                )}

                <div className="pt-5 mt-auto">
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {isHostedPdf ? "View Certificate" : "Verify Credential"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {specializationCertificates.length > FEATURED_COUNT && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              type="button"
              onClick={() => {
                if (showAll) setOpenName(null);
                setShowAll(!showAll);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-yellow-500/40 text-yellow-500 font-semibold hover:bg-yellow-500/10 hover:border-yellow-500 transition-colors cursor-pointer"
            >
              {showAll
                ? "Show fewer"
                : `See all ${specializationCertificates.length} certifications`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
