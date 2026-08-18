"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, contactFormOptions } from "@/data/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", projectType: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            LET&apos;S BUILD
            <br />
            SOMETHING INTELLIGENT.
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Interested in professional opportunities in Germany within Smart Home, KNX, Loxone and Building Automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8">
              GET IN TOUCH
            </h3>

            <div className="space-y-6 mb-12">
              {/* Email */}
              {personalInfo.email !== "[ADD_YOUR_EMAIL]" && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-surfaceLight border border-surface rounded-lg hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-textSecondary uppercase tracking-wide">Email</div>
                    <div className="font-medium">{personalInfo.email}</div>
                  </div>
                </a>
              )}

              {/* Phone */}
              {personalInfo.phone !== "[ADD_YOUR_PHONE]" && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 bg-surfaceLight border border-surface rounded-lg hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-textSecondary uppercase tracking-wide">Phone</div>
                    <div className="font-medium">{personalInfo.phone}</div>
                  </div>
                </a>
              )}

              {/* Location */}
              {personalInfo.location !== "[ADD_YOUR_LOCATION]" && (
                <div className="flex items-center gap-4 p-4 bg-surfaceLight border border-surface rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-textSecondary uppercase tracking-wide">Location</div>
                    <div className="font-medium">{personalInfo.location}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {personalInfo.linkedin !== "[ADD_LINKEDIN_URL]" && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surfaceLight border border-surface rounded-lg flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all group"
                >
                  <Linkedin size={24} className="text-textSecondary group-hover:text-primary transition-colors" />
                </a>
              )}
              
              {personalInfo.github !== "[ADD_GITHUB_URL]" && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surfaceLight border border-surface rounded-lg flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all group"
                >
                  <Github size={24} className="text-textSecondary group-hover:text-primary transition-colors" />
                </a>
              )}
            </div>

            {/* Availability Badge */}
            {personalInfo.availableForWork && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-primary">AVAILABLE FOR OPPORTUNITIES</span>
                </div>
                <p className="text-sm text-textSecondary">
                  Open to Smart Home & Building Automation positions in Germany and EU.
                  {personalInfo.relocationReady && " Relocation ready."}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-surfaceLight border border-surface rounded-lg p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    PROJECT TYPE
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="">Select a project type</option>
                    {contactFormOptions.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full px-8 py-4 bg-primary hover:bg-primaryDark disabled:bg-surfaceLight disabled:text-textSecondary text-background font-semibold rounded-md transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>SENDING...</>
                  ) : submitted ? (
                    <>MESSAGE SENT ✓</>
                  ) : (
                    <>
                      <Send size={18} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
