import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { SKILLS, CERTIFICATIONS } from '@/data/skills';
import { EDUCATION, EXPERIENCE } from '@/data/education';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 border-t border-border bg-background">
      <Container>
        <AnimatedElement delay={0}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-2.5 py-1 bg-surface border border-border rounded">
                <Code2 className="text-accentPurple w-4 h-4" />
                <span className="text-xs text-accentPurple font-mono uppercase tracking-wider">BACKGROUND</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-text">
              Technical Profile
            </h2>
            <p className="text-base text-subtext max-w-2xl font-mono">
              // Systems engineer specializing in embedded systems and full-stack development
            </p>
          </div>
        </AnimatedElement>

        {/* Education */}
        <div className="mb-20">
          <AnimatedElement delay={0.1}>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-accentBlue w-5 h-5" />
              <h3 className="text-2xl font-display font-bold text-text">EDUCATION</h3>
            </div>
          </AnimatedElement>
          {EDUCATION.map((edu, idx) => (
            <AnimatedElement key={idx} delay={0.2 + idx * 0.1}>
              <div className="group relative border border-border bg-surface/50 rounded-lg p-6 mb-4 hover:border-accentBlue/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-display font-bold text-text mb-1">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-sm text-subtext font-mono">{edu.school}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-background border border-border text-xs font-mono text-accentBlue whitespace-nowrap">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-subtext">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-accentBlue mt-0.5 flex-shrink-0">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-20">
          <AnimatedElement delay={0.3}>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="text-accentOrange w-5 h-5" />
              <h3 className="text-2xl font-display font-bold text-text">EXPERIENCE</h3>
            </div>
          </AnimatedElement>
          {EXPERIENCE.map((exp, idx) => (
            <AnimatedElement key={idx} delay={0.4 + idx * 0.1}>
              <div className="group relative border border-border bg-surface/50 rounded-lg p-6 mb-4 hover:border-accentOrange/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-display font-bold text-text mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-subtext font-mono">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-background border border-border text-xs font-mono text-accentOrange whitespace-nowrap">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-subtext mb-4 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2 mb-4 text-sm text-subtext">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-accentOrange mt-0.5 flex-shrink-0">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-background/50 text-muted border border-border/50 hover:border-accentOrange/50 hover:text-accentOrange transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-20">
          <AnimatedElement delay={0.5}>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="text-accentPurple w-5 h-5" />
              <h3 className="text-2xl font-display font-bold text-text">TECHNICAL_STACK</h3>
            </div>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-4">
            {SKILLS.map((skillGroup, idx) => (
              <AnimatedElement key={skillGroup.category} delay={0.6 + idx * 0.1}>
                <div className="group border border-border bg-surface/50 rounded-lg p-4 hover:border-accentPurple/50 transition-all duration-300">
                  <h4 className="text-sm font-mono font-semibold text-accentPurple mb-3 uppercase tracking-wide">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-background/50 text-muted border border-border/50 hover:border-accentPurple/50 hover:text-accentPurple transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {CERTIFICATIONS.length > 0 && (
          <AnimatedElement delay={0.8}>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-accentGreen w-5 h-5" />
                <h3 className="text-2xl font-display font-bold text-text">CERTIFICATIONS</h3>
              </div>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="group border border-border bg-surface/50 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 hover:border-accentGreen/50 transition-all duration-300"
                  >
                    <span className="text-sm font-mono font-semibold text-text">
                      {cert.title}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-background border border-border text-xs font-mono text-accentGreen whitespace-nowrap">
                      {cert.status} • {cert.targetDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        )}
      </Container>
    </section>
  );
}