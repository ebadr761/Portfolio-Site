import React, { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { PROJECTS } from '@/data/projects';

export default function Projects() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-32 px-6 border-t border-border bg-gradient-to-b from-surface/30 to-background">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accentPurple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentBlue/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <AnimatedElement delay={0}>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-accentOrange w-6 h-6" />
              <span className="text-sm text-accentOrange uppercase tracking-wider font-medium">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient-blue">
              Featured Work
            </h2>
            <p className="text-lg text-subtext max-w-2xl">
              A selection of projects showcasing my expertise in full-stack development, AI integration, and system design.
            </p>
          </div>
        </AnimatedElement>

        <div className="space-y-8">
          {PROJECTS.map((project, idx) => (
            <AnimatedElement key={project.slug} delay={idx + 1}>
              <div
                className="group relative cursor-pointer rounded-2xl border border-border/50 glass overflow-hidden transition-all duration-500 hover:border-accentBlue/50 hover:shadow-soft-lg hover:scale-[1.02]"
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                {/* Gradient Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accentBlue via-accentPurple to-accentOrange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-3 mb-3">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-text group-hover:text-gradient-blue transition-all duration-300">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Complete'
                            ? 'bg-accentGreen/20 text-accentGreen border border-accentGreen/30'
                            : project.status === 'In Progress'
                            ? 'bg-accentOrange/20 text-accentOrange border border-accentOrange/30'
                            : 'bg-surface/50 text-subtext border border-border/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-lg text-subtext leading-relaxed max-w-3xl">
                        {project.blurb}
                      </p>
                    </div>
                    <span className="px-4 py-2 rounded-lg glass-strong text-xs font-semibold text-accentOrange uppercase tracking-wider whitespace-nowrap">
                      {project.area}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface/50 text-subtext border border-border/30 hover:border-accentBlue/50 hover:text-text transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.links?.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-sm font-medium text-subtext hover:text-accentBlue hover:border-accentBlue/50 hover:bg-accentBlue/5 hover:scale-105 transition-all duration-300"
                      >
                        <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accentOrange/80 to-accentOrange text-background text-sm font-semibold hover:shadow-glow-orange hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/5 to-accentPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </section>
  );
}