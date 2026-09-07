import { profile } from "../../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/90 backdrop-blur">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg text-text">
          {profile.name.split(" ")[0]}
        </a>
        <nav className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium text-amber transition-colors hover:text-text"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
