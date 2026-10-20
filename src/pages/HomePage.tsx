import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { home } from "../content";
import { GridBackground } from "../components/GridBackground";
import { NeonDivider } from "../components/NeonDivider";
import { Section } from "../components/Section";
import { ContactForm } from "../components/ContactForm";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullSubtitle = home.hero.subtitle;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTypedText(fullSubtitle);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullSubtitle.length) {
        setTypedText(fullSubtitle.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [fullSubtitle]);

  return (
    <>
      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center px-6"
        style={{ background: "hsl(var(--background))" }}
      >
        <GridBackground />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 font-mono text-sm tracking-widest text-primary/70 uppercase"
          >
            &gt; hello, world
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="font-heading mb-4 text-5xl leading-tight font-bold text-foreground md:text-7xl"
            style={{ textShadow: "0 0 40px hsl(var(--primary) / 0.15)" }}
          >
            {home.hero.nameParts.map((part, i) => (
              <motion.span
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="mr-3 inline-block"
                style={
                  i === 1
                    ? {
                        color: "hsl(var(--primary))",
                        textShadow: "0 0 20px hsl(var(--primary) / 0.4)",
                      }
                    : undefined
                }
              >
                {part.word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mb-3 min-h-7 font-mono text-lg text-primary md:text-xl"
          >
            {typedText}
            <span className="animate-pulse" aria-hidden="true">
              |
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="mb-10 text-base text-muted-foreground md:text-lg"
          >
            {home.hero.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_0_32px_hsl(var(--primary)/0.7)]"
            >
              {home.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="rounded-lg border border-primary/40 px-7 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              {home.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          aria-hidden="true"
        >
          <span className="font-mono text-xs text-muted-foreground">scroll</span>
          <motion.div
            className="h-8 w-px"
            style={{
              background:
                "linear-gradient(to bottom, hsl(var(--primary) / 0.5), transparent)",
            }}
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      <NeonDivider />

      {/* ── ABOUT ── */}
      <Section id="about">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase"
          >
            &gt; about.me
          </motion.p>
          <h2 className="font-heading mb-12 text-3xl font-bold text-foreground md:text-4xl">
            {home.about.heading}
          </h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              {home.about.paragraph}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {home.about.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-xl border border-primary/20 bg-card p-5 text-center shadow-[0_0_20px_hsl(var(--primary)/0.05)]"
                >
                  <p
                    className="font-heading mb-1 text-3xl font-bold text-primary"
                    style={{ textShadow: "0 0 12px hsl(var(--primary) / 0.4)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <NeonDivider />

      {/* ── SKILLS ── */}
      <Section id="skills">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase"
          >
            &gt; skills.json
          </motion.p>
          <h2 className="font-heading mb-12 text-3xl font-bold text-foreground md:text-4xl">
            {home.skills.heading}
          </h2>
          <div className="flex flex-col gap-8">
            {home.skills.groups.map((group) => (
              <div key={group.id}>
                <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  // {group.label}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {group.items.map((item, idx) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05, ease: "easeOut" }}
                      className="inline-block cursor-default rounded-full border border-primary/30 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-primary hover:bg-primary/8 hover:text-primary hover:shadow-[0_0_10px_hsl(var(--primary)/0.25)]"
                    >
                      {item.name}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <NeonDivider />

      {/* ── PROJECTS ── */}
      <Section id="projects">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase"
          >
            &gt; projects/
          </motion.p>
          <h2 className="font-heading mb-12 text-3xl font-bold text-foreground md:text-4xl">
            {home.projects.heading}
          </h2>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {home.projects.items.map((project, idx) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className="relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_24px_hsl(var(--primary)/0.15)]"
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                    featured
                  </span>
                )}
                <div>
                  <h3 className="font-heading mb-2 text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded bg-muted/80 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 hover:[text-shadow:0_0_8px_hsl(var(--primary)/0.6)]"
                >
                  View Project
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <NeonDivider />

      {/* ── CONTACT ── */}
      <Section id="contact">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase"
          >
            &gt; contact.init()
          </motion.p>
          <h2 className="font-heading mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {home.contact.heading}
          </h2>
          <p className="mb-10 text-base text-muted-foreground">
            {home.contact.subheading}
          </p>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
