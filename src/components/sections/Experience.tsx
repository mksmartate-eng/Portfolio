"use client";

import { motion } from "framer-motion";
import { experience, education, timeline } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
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
            EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            PROFESSIONAL JOURNEY
          </h2>
        </motion.div>

        {/* Timeline - Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-surfaceLight hidden md:block" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-1.5 z-10" />
                  
                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="inline-block">
                      <div className="text-2xl font-display font-bold text-primary mb-1">
                        {item.year}
                      </div>
                      <div className="text-lg font-semibold">{item.title}</div>
                      <div className="text-textSecondary">{item.description}</div>
                    </div>
                  </div>
                  
                  {/* Empty Space for Alternating Layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detailed Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <Briefcase size={24} className="text-primary" />
            WORK EXPERIENCE
          </h3>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surfaceLight border border-surface rounded-lg p-6 lg:p-8"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-xl font-display font-semibold mb-2">
                      {exp.position}
                    </h4>
                    <div className="text-primary font-medium">
                      {exp.company}
                    </div>
                    <div className="text-textSecondary text-sm mt-1">
                      {exp.location}
                    </div>
                  </div>
                  <div className="text-sm font-mono text-textSecondary">
                    {exp.period.start} — {exp.period.end}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wide text-textSecondary mb-3">
                    Responsibilities
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-textSecondary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-surface rounded-full text-textSecondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="pt-6 border-t border-surface">
                    <div className="text-xs uppercase tracking-wide text-textSecondary mb-3">
                      Key Achievements
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-textSecondary">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <GraduationCap size={24} className="text-primary" />
            EDUCATION
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surfaceLight border border-surface rounded-lg p-6"
              >
                <div className="text-sm font-mono text-primary mb-2">
                  {edu.period.start} — {edu.period.end}
                </div>
                <h4 className="text-lg font-display font-semibold mb-2">
                  {edu.degree}
                </h4>
                <div className="text-text mb-3">{edu.institution}</div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
