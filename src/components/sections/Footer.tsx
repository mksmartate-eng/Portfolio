"use client";

import { motion } from "framer-motion";
import { personalInfo, navigationItems } from "@/data/portfolio";
import { Linkedin, Github, Mail, Download, ChevronUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/cv.pdf";
    link.download = "CV_SmartHomeSpecialist.pdf";
    link.click();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-surfaceLight py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-lg font-display font-semibold tracking-wider inline-block mb-4">
              <span className="text-text">SMART HOME</span>
              <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-textSecondary mb-4">
              {personalInfo.title}
            </p>
            <p className="text-xs text-textSecondary">
              Designing intelligent systems that make buildings respond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigationItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-textSecondary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {personalInfo.linkedin !== "[ADD_LINKEDIN_URL]" && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surfaceLight border border-surface rounded-lg flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-textSecondary group-hover:text-primary transition-colors" />
                </a>
              )}
              
              {personalInfo.github !== "[ADD_GITHUB_URL]" && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surfaceLight border border-surface rounded-lg flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all group"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-textSecondary group-hover:text-primary transition-colors" />
                </a>
              )}
              
              {personalInfo.email !== "[ADD_YOUR_EMAIL]" && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-surfaceLight border border-surface rounded-lg flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all group"
                  aria-label="Email"
                >
                  <Mail size={18} className="text-textSecondary group-hover:text-primary transition-colors" />
                </a>
              )}
            </div>
            
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-primary transition-colors"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surfaceLight flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-textSecondary">
            © {currentYear} {personalInfo.name !== "[ADD_YOUR_NAME]" ? personalInfo.name : "Smart Home Specialist"}. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-textSecondary hover:text-primary transition-colors group"
          >
            Back to top
            <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
