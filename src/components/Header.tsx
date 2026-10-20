import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { home } from "../content";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10, 10, 15, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0, 245, 255, 0.1)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-heading text-lg font-semibold tracking-tight text-primary"
          style={{ textShadow: "0 0 12px hsl(var(--primary) / 0.5)" }}
        >
          {home.nav.wordmark}
        </motion.a>

        <motion.nav
          aria-label="Main navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="hidden items-center gap-8 md:flex"
        >
          {home.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="group relative text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:[text-shadow:0_0_8px_hsl(var(--primary)/0.6)]"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </motion.nav>

        <motion.a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="hidden items-center rounded border border-primary/50 px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] md:inline-flex"
        >
          {home.nav.cta}
        </motion.a>
      </div>
    </header>
  );
}
