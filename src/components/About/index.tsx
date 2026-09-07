import { profile } from "../../data/portfolio";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="max-w-content mx-auto grid gap-8 px-6 py-20 lg:grid-cols-[auto_1fr] lg:gap-16">
        <h2 className="font-display text-2xl text-text">About</h2>
        <p className="max-w-[60ch] text-base leading-relaxed text-muted">
          {profile.about}
        </p>
      </div>
    </section>
  );
}
