"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { technologies } from "@/data/portfolio";
import { cn, getProficiencyBadge } from "@/lib/utils";
import { X } from "lucide-react";

export function Technologies() {
  const [selectedTech, setSelectedTech] = useState<number | null>(null);

  return (
    <section id="technologies" className="py-24 bg-background">
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
            TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            TECHNOLOGIES I WORK WITH
          </h2>
        </motion.div>

        {/* Technology Nodes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {technologies.map((tech, index) => (
            <motion.button
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedTech(index)}
              className={cn(
                "p-6 rounded-lg border transition-all text-left group",
                selectedTech === index
                  ? "bg-primary/10 border-primary/50"
                  : "bg-surfaceLight border-surface hover:border-primary/30"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <span className={cn("text-xs px-2 py-1 rounded border", getProficiencyBadge(tech.proficiency))}>
                  {tech.proficiency}
                </span>
              </div>
              <p className="text-xs text-textSecondary">
                {tech.category}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Technology Detail Panel */}
        {selectedTech !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-surfaceLight border border-surface rounded-lg p-6 lg:p-8 relative"
          >
            <button
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 p-2 text-textSecondary hover:text-text transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-display font-bold">
                    {technologies[selectedTech].name}
                  </h3>
                  <span className={cn("text-xs px-3 py-1 rounded border", getProficiencyBadge(technologies[selectedTech].proficiency))}>
                    {technologies[selectedTech].proficiency}
                  </span>
                </div>
                
                <p className="text-textSecondary leading-relaxed mb-6">
                  {technologies[selectedTech].description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                    Typical Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies[selectedTech].applications.map((app) => (
                      <span
                        key={app}
                        className="px-3 py-2 bg-surface rounded-md text-sm text-textSecondary"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-surface rounded-lg p-6">
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                  Quick Info
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-textSecondary mb-1">Category</div>
                    <div className="font-medium">{technologies[selectedTech].category}</div>
                  </div>
                  <div>
                    <div className="text-xs text-textSecondary mb-1">Proficiency Level</div>
                    <div className={cn("font-medium", getProficiencyBadge(technologies[selectedTech].proficiency).split(' ')[1])}>
                      {technologies[selectedTech].proficiency}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
