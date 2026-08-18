"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface">
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
            PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            FEATURED WORK
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surfaceLight border border-surface hover:border-primary/30 rounded-lg overflow-hidden transition-all"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-surface to-surfaceLight relative overflow-hidden">
                {project.images && project.images.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-display font-bold text-surfaceLight mb-2">
                        {project.id}
                      </div>
                      <div className="text-xs text-textSecondary uppercase tracking-widest">
                        Project Preview
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Year and Type */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-primary">
                    {project.year}
                  </span>
                  <span className="text-xs px-3 py-1 bg-surface rounded-full text-textSecondary">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Scope */}
                <p className="text-textSecondary mb-4">
                  {project.scope}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-surface rounded text-textSecondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Role */}
                <div className="pt-4 border-t border-surface">
                  <div className="text-xs text-textSecondary mb-2 uppercase tracking-wide">
                    Role
                  </div>
                  <div className="text-sm text-text">
                    {project.role}
                  </div>
                </div>

                {/* Action */}
                <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium group/link cursor-pointer">
                  <span>VIEW PROJECT DETAILS</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover/link:translate-x-1 transition-transform" 
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Note about placeholder data */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-textSecondary max-w-2xl mx-auto">
            Note: Project details are placeholders. Update the portfolio data with actual project information including images, challenges, solutions, and results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
