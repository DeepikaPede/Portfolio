import { profile } from "../../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="max-w-content mx-auto flex flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted sm:flex-row">
        <p>
          © {year} {profile.name}
        </p>
        <p className="font-mono">Built with React, TypeScript & Tailwind</p>
      </div>
    </footer>
  );
}
