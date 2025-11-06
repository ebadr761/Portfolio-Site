import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { SKILLS, CERTIFICATIONS } from '@/data/skills';
import { EDUCATION, EXPERIENCE } from '@/data/education';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 border-t border-border bg-gradient-to-b from-background to-surface/30">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-accentPurple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accentOrange/10 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <AnimatedElement delay={0}>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="text-accentPurple w-6 h-6" />
              <span className="text-sm text-accentPurple uppercase tracking-wider font-medium">Background</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient-cool">
              About Me
            </h2>
            <p className="text-lg text-subtext max-w-2xl">
              A passionate software engineer with expertise in building scalable systems and innovative solutions.
            </p>
          </div>
        </AnimatedElement>

        {/* Education */}
        <div className="mb-24">
          <AnimatedElement delay={1}>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-accentBlue w-6 h-6" />
              <h3 className="text-3xl font-display font-bold text-text">Education</h3>
            </div>
          </AnimatedElement>
          {EDUCATION.map((edu, idx) => (
            <AnimatedElement key={idx} delay={2 + idx}>
              <div className="group relative glass rounded-2xl p-8 mb-6 hover:glass-strong hover:shadow-soft-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-display font-bold text-text group-hover:text-accentBlue transition-colors">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-lg text-subtext mt-1">{edu.school}</p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-accentBlue/10 text-accentBlue text-sm font-medium whitespace-nowrap">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <ul className="space-y-3 text-subtext">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-accentBlue mt-1 flex-shrink-0">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-24">
          <AnimatedElement delay={3}>
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="text-accentOrange w-6 h-6" />
              <h3 className="text-3xl font-display font-bold text-text">Experience</h3>
            </div>
          </AnimatedElement>
          {EXPERIENCE.map((exp, idx) => (
            <AnimatedElement key={idx} delay={4 + idx}>
              <div className="group relative glass rounded-2xl p-8 mb-6 hover:glass-strong hover:shadow-soft-lg hover:scale-[1.01] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-display font-bold text-text group-hover:text-accentOrange transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-lg text-subtext mt-1">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-accentOrange/10 text-accentOrange text-sm font-medium whitespace-nowrap">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-subtext mb-6 leading-relaxed">{exp.description}</p>
                <ul className="space-y-3 mb-6 text-subtext">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-accentOrange mt-1 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface/50 text-subtext border border-border/30 hover:border-accentOrange/50 hover:text-text transition-all duration-300"
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
        <div className="mb-24">
          <AnimatedElement delay={5}>
            <div className="flex items-center gap-3 mb-10">
              <Code2 className="text-accentPurple w-6 h-6" />
              <h3 className="text-3xl font-display font-bold text-text">Technical Skills</h3>
            </div>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <AnimatedElement key={skillGroup.category} delay={6 + idx}>
                <div className="group glass rounded-2xl p-6 hover:glass-strong hover:shadow-soft transition-all duration-300">
                  <h4 className="text-xl font-display font-semibold text-accentPurple mb-4 group-hover:text-gradient-blue transition-colors">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-lg text-sm font-medium bg-surface/50 border border-border/30 text-subtext hover:border-accentPurple/50 hover:text-text hover:scale-105 transition-all duration-300 cursor-default"
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
          <AnimatedElement delay={7}>
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Award className="text-accentGreen w-6 h-6" />
                <h3 className="text-3xl font-display font-bold text-text">Certifications</h3>
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="group glass rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:glass-strong hover:shadow-soft transition-all duration-300"
                  >
                    <span className="text-lg font-display font-semibold text-text group-hover:text-accentGreen transition-colors">
                      {cert.title}
                    </span>
                    <span className="px-4 py-2 rounded-lg bg-accentGreen/10 text-accentGreen text-sm font-medium whitespace-nowrap">
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