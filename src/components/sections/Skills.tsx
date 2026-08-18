"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { cn, getProficiencyBadge } from "@/lib/utils";

export function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 bg-surface">
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
            SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            TECHNICAL EXPERTISE
          </h2>
        </motion.div>

        {/* Skills Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-surfaceLight border border-surface rounded-lg p-6"
            >
              <h3 className="text-lg font-display font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-textSecondary">{skill.name}</span>
                    <span className={cn("text-xs px-2 py-1 rounded border", getProficiencyBadge(skill.level))}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-surfaceLight border border-surface rounded-lg p-8"
        >
          <h3 className="text-xl font-display font-semibold mb-4">
            PROFICIENCY LEVELS
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
              <div>
                <div className="font-semibold text-primary mb-1">ADVANCED</div>
                <div className="text-sm text-textSecondary">
                  Deep expertise with extensive hands-on experience in production environments
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-400 mt-1.5" />
              <div>
                <div className="font-semibold text-blue-400 mb-1">PROFICIENT</div>
                <div className="text-sm text-textSecondary">
                  Solid working knowledge with practical project experience
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-secondary mt-1.5" />
              <div>
                <div className="font-semibold text-secondary mb-1">WORKING KNOWLEDGE</div>
                <div className="text-sm text-textSecondary">
                  Familiar with concepts and able to work with guidance
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
