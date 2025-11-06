import React from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle, ArrowUpRight } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { PROFILE } from '@/data/links';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-border bg-gradient-to-b from-surface/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-accentBlue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accentGreen/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <Container>
        <AnimatedElement delay={0}>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="text-accentGreen w-6 h-6" />
              <span className="text-sm text-accentGreen uppercase tracking-wider font-medium">Get in Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient-warm">
              Let's Connect
            </h2>
            <p className="text-xl text-subtext max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, interesting problems, and collaborations. Feel free to reach out!
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={1}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="group relative glass rounded-2xl p-8 hover:glass-strong hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-5 overflow-hidden"
            >
              <div className="relative p-4 rounded-xl bg-accentBlue/10 group-hover:bg-accentBlue/20 transition-all duration-300">
                <Mail size={28} className="text-accentBlue" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted uppercase tracking-wider mb-1">Email</p>
                <p className="text-text font-semibold text-lg">{PROFILE.email}</p>
              </div>
              <ArrowUpRight className="text-accentBlue opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </a>

            {/* Phone */}
            <a
              href={`tel:${PROFILE.phone}`}
              className="group relative glass rounded-2xl p-8 hover:glass-strong hover:shadow-glow-orange hover:scale-105 transition-all duration-300 flex items-center gap-5 overflow-hidden"
            >
              <div className="relative p-4 rounded-xl bg-accentOrange/10 group-hover:bg-accentOrange/20 transition-all duration-300">
                <Phone size={28} className="text-accentOrange" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted uppercase tracking-wider mb-1">Phone</p>
                <p className="text-text font-semibold text-lg">{PROFILE.phone}</p>
              </div>
              <ArrowUpRight className="text-accentOrange opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass rounded-2xl p-8 hover:glass-strong hover:shadow-glow-purple hover:scale-105 transition-all duration-300 flex items-center gap-5 overflow-hidden"
            >
              <div className="relative p-4 rounded-xl bg-accentPurple/10 group-hover:bg-accentPurple/20 transition-all duration-300">
                <Linkedin size={28} className="text-accentPurple" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="text-text font-semibold text-lg">Ebad ur Rehman</p>
              </div>
              <ArrowUpRight className="text-accentPurple opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </a>

            {/* GitHub */}
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass rounded-2xl p-8 hover:glass-strong hover:shadow-soft-lg hover:scale-105 transition-all duration-300 flex items-center gap-5 overflow-hidden"
            >
              <div className="relative p-4 rounded-xl bg-accentGreen/10 group-hover:bg-accentGreen/20 transition-all duration-300">
                <Github size={28} className="text-accentGreen" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted uppercase tracking-wider mb-1">GitHub</p>
                <p className="text-text font-semibold text-lg">@ebadr761</p>
              </div>
              <ArrowUpRight className="text-accentGreen opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </a>
          </div>
        </AnimatedElement>
      </Container>
    </section>
  );
}