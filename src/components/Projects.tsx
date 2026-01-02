import { ExternalLink, Github, Star } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { PROJECTS } from '@/data/projects';

export default function Projects() {

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
              Systems engineering projects spanning embedded systems, full-stack development, and AI/ML applications.
            </p>
          </div>
        </AnimatedElement>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => {
            // Featured project (STM32) spans 2 columns on desktop
            const isFeatured = idx === 0;

            return (
              <AnimatedElement key={project.slug} delay={idx + 1}>
                <div
                  className={`group relative h-full cursor-pointer rounded-xl border border-border/40 bg-panel/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-accentBlue/50 hover:shadow-glow-blue hover:scale-[1.02] flex flex-col ${
                    isFeatured ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Top Accent Border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accentBlue via-accentPurple to-accentOrange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-text group-hover:text-accentBlue transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        {isFeatured && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-accentOrange/20 text-accentOrange border border-accentOrange/30">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium shrink-0 ${
                        project.area === 'Embedded'
                          ? 'bg-accentPurple/20 text-accentPurple border border-accentPurple/30'
                          : project.area === 'Full-Stack'
                          ? 'bg-accentBlue/20 text-accentBlue border border-accentBlue/30'
                          : project.area === 'AI/ML'
                          ? 'bg-accentGreen/20 text-accentGreen border border-accentGreen/30'
                          : 'bg-surface/50 text-subtext border border-border/30'
                      }`}>
                        {project.area}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-subtext leading-relaxed mb-6 flex-1">
                      {project.blurb}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-surface/80 text-muted border border-border/50 hover:border-accentBlue/50 hover:text-text hover:bg-surface transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.links?.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 text-xs font-medium text-subtext hover:text-accentBlue hover:border-accentBlue/50 hover:bg-accentBlue/5 transition-all duration-300"
                        >
                          <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                          Repo
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accentOrange/80 to-accentOrange text-background text-xs font-semibold hover:shadow-glow-orange hover:scale-105 transition-all duration-300"
                        >
                          <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/5 to-accentPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
