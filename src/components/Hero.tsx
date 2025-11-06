import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import TypingTitles from './TypingTitles';
import { PROFILE } from '@/data/links';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accentBlue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accentPurple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accentOrange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 max-w-4xl w-full space-y-8">
          <AnimatedElement delay={0}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="text-accentBlue w-5 h-5 animate-pulse" />
                <p className="text-accentBlue text-sm font-medium tracking-wider uppercase">
                  Hey, I'm
                </p>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-gradient-animate leading-tight">
                {PROFILE.name}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accentBlue via-accentPurple to-accentOrange rounded-full"></div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={1}>
            <div className="text-xl md:text-2xl font-medium text-text min-h-[2rem]">
              <TypingTitles titles={PROFILE.titles} speed={60} pauseBetween={2500} />
            </div>
          </AnimatedElement>

          <AnimatedElement delay={2}>
            <p className="text-xl md:text-2xl text-subtext leading-relaxed max-w-3xl font-light">
              {PROFILE.tagline}
            </p>
          </AnimatedElement>

          <AnimatedElement delay={3}>
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-accentBlue to-accentPurple text-background font-semibold rounded-xl hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get in touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                className="px-8 py-4 glass-strong font-semibold rounded-xl hover:bg-panel hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                View my work
              </a>
            </div>
          </AnimatedElement>

          {/* Scroll Indicator */}
          <AnimatedElement delay={4}>
            <div className="pt-16 flex flex-col items-center gap-2 opacity-60">
              <span className="text-xs text-muted uppercase tracking-wider">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-muted rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-accentBlue rounded-full animate-bounce"></div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  );
}