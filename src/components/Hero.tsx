import { ArrowRight, Terminal } from 'lucide-react';
import { useState } from 'react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import BootSequence from './BootSequence';
import { PROFILE } from '@/data/links';

export default function Hero() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accentBlue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accentPurple/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 max-w-4xl w-full space-y-8">
          {/* Terminal Header */}
          <AnimatedElement delay={0}>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-md">
                <Terminal className="w-4 h-4 text-accentGreen" />
                <span className="text-xs font-mono text-muted">system.boot</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-accentGreen/50"></div>
              </div>
            </div>
          </AnimatedElement>

          {/* Boot Sequence */}
          <AnimatedElement delay={0.5}>
            <div className="bg-surface/50 border border-border rounded-lg p-6 backdrop-blur-sm">
              <BootSequence onComplete={() => setBootComplete(true)} />
            </div>
          </AnimatedElement>

          {/* Action Buttons - Show after boot */}
          {bootComplete && (
            <AnimatedElement delay={0}>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="group px-6 py-3 bg-accentBlue text-background font-mono text-sm font-semibold rounded-md hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  ESTABLISH_CONNECTION()
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#work"
                  className="px-6 py-3 border border-border text-text font-mono text-sm font-semibold rounded-md hover:border-accentBlue hover:bg-surface transition-all duration-300 flex items-center gap-2"
                >
                  VIEW_PROJECTS()
                </a>
              </div>
            </AnimatedElement>
          )}

          {/* Metadata Tags */}
          {bootComplete && (
            <AnimatedElement delay={0.3}>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-2.5 py-1 bg-surface/80 border border-border rounded text-xs font-mono text-muted">
                  LOCATION: {PROFILE.location}
                </span>
                <span className="px-2.5 py-1 bg-surface/80 border border-accentGreen/30 rounded text-xs font-mono text-accentGreen">
                  STATUS: AVAILABLE_MAY_2026
                </span>
                <span className="px-2.5 py-1 bg-surface/80 border border-border rounded text-xs font-mono text-muted">
                  DURATION: 4-16_MONTHS
                </span>
              </div>
            </AnimatedElement>
          )}

          {/* Scroll Indicator */}
          {bootComplete && (
            <AnimatedElement delay={0.6}>
              <div className="pt-8 pb-8 flex flex-col items-center gap-2 opacity-40">
                <span className="text-xs text-muted font-mono uppercase tracking-wider">SCROLL_DOWN</span>
                <div className="w-5 h-8 border border-border rounded-sm flex items-start justify-center p-1">
                  <div className="w-1 h-2 bg-accentBlue rounded-full animate-bounce"></div>
                </div>
              </div>
            </AnimatedElement>
          )}
        </div>
      </Container>
    </section>
  );
}