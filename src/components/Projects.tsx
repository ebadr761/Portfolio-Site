import { ExternalLink, Github, Cpu } from 'lucide-react';
import { useRef, useState, MouseEvent } from 'react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { PROJECTS } from '@/data/projects';

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;

    const rect = gridRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="work" className="relative py-32 px-6 border-t border-border bg-background">
      <Container>
        <AnimatedElement delay={0}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-2.5 py-1 bg-surface border border-border rounded">
                <Cpu className="text-accentOrange w-4 h-4" />
                <span className="text-xs text-accentOrange font-mono uppercase tracking-wider">PORTFOLIO</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-text">
              Systems Engineering Projects
            </h2>
            <p className="text-base text-subtext max-w-2xl font-mono">
              // Embedded systems, full-stack development, and AI/ML applications
            </p>
          </div>
        </AnimatedElement>

        {/* Bento Grid Layout with Spotlight Effect */}
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          } as React.CSSProperties}
        >
          {PROJECTS.map((project, idx) => {
            // Featured project (STM32) spans 2 columns on desktop
            const isFeatured = idx === 0;

            // Status indicator color
            const getStatusColor = () => {
              if (project.status === 'Complete') return 'bg-accentGreen';
              if (project.status === 'In Progress') return 'bg-yellow-500';
              return 'bg-muted';
            };

            return (
              <AnimatedElement key={project.slug} delay={idx * 0.1 + 0.2}>
                <div
                  className={`group relative h-full rounded-lg border border-border bg-surface/50 backdrop-blur-sm overflow-hidden transition-all duration-300 flex flex-col spotlight-card ${
                    isFeatured ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Spotlight Effect Border */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none spotlight-border"></div>

                  {/* Card Content */}
                  <div className="relative p-6 flex flex-col flex-1 z-10">
                    {/* Header with Status */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor()} animate-pulse`}></div>
                          <span className="text-xs font-mono text-muted uppercase">{project.status}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-2">
                          {project.title}
                        </h3>
                      </div>
                      <span className={`px-2 py-1 rounded text-[10px] font-mono font-semibold shrink-0 border ${
                        project.area === 'Embedded'
                          ? 'bg-accentPurple/10 text-accentPurple border-accentPurple/30'
                          : project.area === 'Full-Stack'
                          ? 'bg-accentBlue/10 text-accentBlue border-accentBlue/30'
                          : project.area === 'AI/ML'
                          ? 'bg-accentGreen/10 text-accentGreen border-accentGreen/30'
                          : 'bg-surface text-subtext border-border'
                      }`}>
                        {project.area.toUpperCase()}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-subtext leading-relaxed mb-6 flex-1">
                      {project.blurb}
                    </p>

                    {/* Tech Stack Tags - LED Style */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-background/50 text-muted border border-border/50 hover:border-accentBlue/50 hover:text-accentBlue transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {project.links?.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded border border-border text-[11px] font-mono font-medium text-subtext hover:text-accentBlue hover:border-accentBlue/50 hover:bg-accentBlue/5 transition-all duration-200"
                        >
                          <Github size={14} />
                          CODE
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded bg-accentBlue text-background text-[11px] font-mono font-semibold hover:shadow-glow-blue hover:scale-105 transition-all duration-200"
                        >
                          <ExternalLink size={14} />
                          LIVE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
