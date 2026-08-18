"use client";

import { motion } from "framer-motion";
import { certifications, learningInProgress, languages } from "@/data/portfolio";
import { Award, BookOpen, Globe } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            PROFESSIONAL CREDENTIALS
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <Award size={24} className="text-primary" />
            CERTIFICATIONS
          </h3>

          {certifications.length > 0 && certifications[0].name !== "[ADD_CERTIFICATION_NAME]" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-surfaceLight border border-surface hover:border-primary/30 rounded-lg p-6 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award size={24} className="text-primary" />
                    </div>
                    {cert.verified && (
                      <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded border border-green-500/20">
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-textSecondary mb-3">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-between text-xs text-textSecondary">
                    <span>{cert.date}</span>
                    {cert.credentialId && (
                      <span className="font-mono">{cert.credentialId}</span>
                    )}
                  </div>
                  
                  {cert.verificationUrl && cert.verificationUrl !== "[ADD_VERIFICATION_URL]" && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs text-primary hover:underline"
                    >
                      Verify Credential
                      <Globe size={12} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-surfaceLight border border-surface rounded-lg p-8 text-center">
              <Award size={48} className="mx-auto mb-4 text-surfaceLight" />
              <h4 className="text-lg font-semibold mb-2">No Certifications Listed</h4>
              <p className="text-textSecondary max-w-md mx-auto">
                Update the portfolio data with your professional certifications (KNX, Loxone, etc.) to display them here.
              </p>
            </div>
          )}
        </motion.div>

        {/* Learning In Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <BookOpen size={24} className="text-primary" />
            CURRENTLY LEARNING
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {learningInProgress.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surfaceLight border border-surface rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.name}</h4>
                    <p className="text-sm text-textSecondary mb-2">{item.category}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {item.status}
                      </span>
                      {item.expectedCompletion && item.expectedCompletion !== "[ADD_DATE]" && (
                        <span className="text-xs text-textSecondary">
                          Expected: {item.expectedCompletion}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <Globe size={24} className="text-primary" />
            LANGUAGES
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surfaceLight border border-surface rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{lang.language}</h4>
                  <span className="text-sm font-mono text-primary">{lang.level}</span>
                </div>
                <p className="text-sm text-textSecondary">{lang.status}</p>
                {!lang.certified && (
                  <div className="mt-3 text-xs text-textSecondary italic">
                    Not officially certified
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
