import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import Container from './Container';
import { buttonColors } from '@/lib/theme';

interface NavItem {
  label: string;
  href: string;
  colorIndex: number;
  isActive?: boolean;
  isHovered?: boolean;
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Work', href: '#work', colorIndex: 0 },
    { label: 'About', href: '#about', colorIndex: 1 },
    { label: 'Contact', href: '#contact', colorIndex: 2 },
  ];

  const navWithAccents = navItems.map((n) => ({
    ...n,
    isHovered: hoveredItem === n.href,
  }));

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-background/95 backdrop-blur-xl shadow-soft border-b border-border/50'
        : 'bg-background/70 backdrop-blur-md border-b border-border/20'
    }`}>
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="#"
            className="group text-2xl font-display font-bold text-gradient-blue hover:scale-110 transition-transform duration-300"
          >
            Ebad
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navWithAccents.map((n) => {
              const colors = buttonColors[n.colorIndex];
              const isHighlighted = n.isHovered;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onMouseEnter={() => setHoveredItem(n.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative text-sm font-semibold transition-all duration-300 hover:scale-110"
                  style={{
                    color: isHighlighted ? colors.text : '#9da5b4',
                  }}
                >
                  {n.label}
                  {isHighlighted && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: colors.text }}
                    ></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Resume + Social links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-subtext hover:text-accentPurple hover:glass-strong hover:scale-105 transition-all duration-300"
            >
              <FileText className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Resume
            </a>
            <a
              href="https://github.com/ebadr761"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg glass text-subtext hover:text-accentBlue hover:glass-strong hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rehmane"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg glass text-subtext hover:text-accentOrange hover:glass-strong hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg glass p-2.5 md:hidden transition-all hover:glass-strong hover:scale-110"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="grid gap-3 pb-4 md:hidden animate-fade-in" onMouseLeave={() => setHoveredItem(null)}>
            {navWithAccents.map((n) => {
              const colors = buttonColors[n.colorIndex];
              const isHighlighted = n.isHovered;

              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setHoveredItem(n.href)}
                  className="rounded-xl glass px-4 py-3 font-medium transition-all duration-300 hover:scale-105 hover:glass-strong"
                  style={{
                    borderColor: isHighlighted ? colors.border : 'transparent',
                    color: isHighlighted ? colors.text : '#9da5b4',
                  }}
                >
                  {n.label}
                </a>
              );
            })}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass text-sm font-medium text-subtext hover:text-accentPurple hover:glass-strong transition-all"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ebadr761"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center p-3 rounded-xl glass text-subtext hover:text-accentBlue hover:glass-strong transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/rehmane"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center p-3 rounded-xl glass text-subtext hover:text-accentOrange hover:glass-strong transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}