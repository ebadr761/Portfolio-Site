import { Mail, Phone, Linkedin, Github, Terminal, ArrowRight } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { PROFILE } from '@/data/links';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-border bg-background">
      <Container>
        <AnimatedElement delay={0}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-2.5 py-1 bg-surface border border-border rounded">
                <Terminal className="text-accentGreen w-4 h-4" />
                <span className="text-xs text-accentGreen font-mono uppercase tracking-wider">CONTACT</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-text">
              Establish Connection
            </h2>
            <p className="text-base text-subtext max-w-2xl font-mono">
              // Available for 4-16 month internships starting May 2026
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {/* Email */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="group relative border border-border bg-surface/50 rounded-lg p-6 hover:border-accentBlue/50 hover:shadow-glow-blue transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded bg-accentBlue/10 border border-accentBlue/30">
                <Mail size={20} className="text-accentBlue" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-muted font-mono uppercase tracking-wider mb-1">EMAIL</p>
                <p className="text-text font-mono text-sm truncate">{PROFILE.email}</p>
              </div>
              <ArrowRight className="text-accentBlue opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" size={16} />
            </a>

            {/* Phone */}
            <a
              href={`tel:${PROFILE.phone}`}
              className="group relative border border-border bg-surface/50 rounded-lg p-6 hover:border-accentOrange/50 hover:shadow-glow-orange transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded bg-accentOrange/10 border border-accentOrange/30">
                <Phone size={20} className="text-accentOrange" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-muted font-mono uppercase tracking-wider mb-1">PHONE</p>
                <p className="text-text font-mono text-sm">{PROFILE.phone}</p>
              </div>
              <ArrowRight className="text-accentOrange opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-border bg-surface/50 rounded-lg p-6 hover:border-accentPurple/50 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded bg-accentPurple/10 border border-accentPurple/30">
                <Linkedin size={20} className="text-accentPurple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-muted font-mono uppercase tracking-wider mb-1">LINKEDIN</p>
                <p className="text-text font-mono text-sm">linkedin.com/in/rehmane</p>
              </div>
              <ArrowRight className="text-accentPurple opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" size={16} />
            </a>

            {/* GitHub */}
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-border bg-surface/50 rounded-lg p-6 hover:border-accentGreen/50 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded bg-accentGreen/10 border border-accentGreen/30">
                <Github size={20} className="text-accentGreen" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-muted font-mono uppercase tracking-wider mb-1">GITHUB</p>
                <p className="text-text font-mono text-sm">github.com/ebadr761</p>
              </div>
              <ArrowRight className="text-accentGreen opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" size={16} />
            </a>
          </div>
        </AnimatedElement>
      </Container>
    </section>
  );
}