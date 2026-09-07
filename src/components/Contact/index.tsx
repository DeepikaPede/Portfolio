import { profile } from "../../data/portfolio";

export function Contact() {
  return (
    <section id="contact">
      <div className="max-w-content mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-3xl text-text sm:text-4xl">
          Let's build something.
        </h2>
        <p className="mx-auto mt-4 max-w-[45ch] text-muted">
          Open to opportunities in data engineering and applied AI. The
          fastest way to reach me is email.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm bg-amber px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            className="rounded-sm border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-muted"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            className="rounded-sm border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-muted"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
