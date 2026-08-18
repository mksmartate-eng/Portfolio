"use client";

import { motion } from "framer-motion";
import { solutions } from "@/data/portfolio";
import { 
  Lightbulb, Thermometer, Sun, Shield, Key, Music2, Zap, Monitor 
} from "lucide-react";

const iconMap: Record<string, any> = {
  lightbulb: Lightbulb,
  thermometer: Thermometer,
  sun: Sun,
  shield: Shield,
  key: Key,
  music: Music2,
  zap: Zap,
  monitor: Monitor,
};

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-background">
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
            SMART HOME SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            ONE BUILDING.
            <br />
            ENDLESS POSSIBILITIES.
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => {
            const IconComponent = iconMap[solution.icon] || Lightbulb;
            
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-surfaceLight border border-surface hover:border-primary/30 rounded-lg p-8 transition-all overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* ID and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-primary/60">
                      {solution.id}
                    </span>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textSecondary mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {solution.features.slice(0, 5).map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 + featureIndex * 0.05 }}
                        className="flex items-center gap-3 text-sm text-textSecondary"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </motion.div>
                    ))}
                    {solution.features.length > 5 && (
                      <div className="text-xs text-textSecondary pt-2">
                        +{solution.features.length - 5} more features
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
