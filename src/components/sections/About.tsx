"use client";

import { motion } from "framer-motion";
import { professionalSummary, services } from "@/data/portfolio";
import { 
  Home, Building2, Network, Cpu, Lightbulb, Thermometer, 
  Shield, Music2, Monitor, Link 
} from "lucide-react";

const iconMap: Record<string, any> = {
  home: Home,
  building: Building2,
  network: Network,
  cpu: Cpu,
  lightbulb: Lightbulb,
  thermometer: Thermometer,
  shield: Shield,
  music: Music2,
  monitor: Monitor,
  link: Link,
};

export function About() {
  return (
    <section id="about" className="py-24 bg-surface">
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
            ABOUT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            {professionalSummary.headline}
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl leading-relaxed whitespace-pre-line">
            {professionalSummary.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24"
        >
          {professionalSummary.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-surfaceLight border border-surface rounded-lg p-4 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-textSecondary uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What I Do - Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-display font-semibold mb-8">
            WHAT I DO
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Home;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-surfaceLight border border-surface hover:border-primary/30 rounded-lg p-6 transition-all cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  
                  {/* ID */}
                  <div className="text-xs font-mono text-primary/60 mb-2">
                    {service.id}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-base font-semibold mb-3 line-clamp-1">
                    {service.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-textSecondary mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-surface rounded text-textSecondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
