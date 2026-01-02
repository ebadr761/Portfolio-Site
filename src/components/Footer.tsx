import { ArrowUp, Github, Linkedin } from 'lucide-react';
import Container from './Container';
import { PROFILE } from '@/data/links';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border py-12 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: System Info */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accentGreen rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-muted">SYSTEM_ONLINE</span>
          </div>

          {/* Center: Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded border border-border bg-surface/50 text-xs font-mono font-medium text-muted hover:text-accentBlue hover:border-accentBlue/50 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            RETURN_TO_TOP
          </button>

          {/* Right: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-border bg-surface/50 text-muted hover:text-accentBlue hover:border-accentBlue/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-border bg-surface/50 text-muted hover:text-accentOrange hover:border-accentOrange/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-muted text-[10px] font-mono">
            © {new Date().getFullYear()} EBAD_UR_REHMAN • BUILT_WITH [REACT + TAILWIND] • V1.0.0
          </p>
        </div>
      </Container>
    </footer>
  );
}