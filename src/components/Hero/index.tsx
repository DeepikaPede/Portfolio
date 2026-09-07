import { profile } from "../../data/portfolio";

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="max-w-content mx-auto grid gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-teal">{profile.role}</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] text-text sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-sm bg-amber px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-muted"
            >
              Contact me
            </a>
          </div>
        </div>

        <DataPulse />
      </div>
    </section>
  );
}

function DataPulse() {
  return (
    <div className="rounded-sm border border-border bg-surface p-6">
      <div className="flex items-center justify-between text-xs text-muted">
        <span className="font-mono">throughput.live</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
          streaming
        </span>
      </div>
      <svg
        viewBox="0 0 320 120"
        className="mt-4 w-full"
        role="img"
        aria-label="Animated data throughput line chart"
      >
        <polyline
          points="0,90 30,70 60,80 90,40 120,55 150,20 180,45 210,30 240,50 270,25 300,35 320,15"
          fill="none"
          stroke="#233052"
          strokeWidth="2"
        />
        <polyline
          points="0,90 30,70 60,80 90,40 120,55 150,20 180,45 210,30 240,50 270,25 300,35 320,15"
          fill="none"
          stroke="#F5A623"
          strokeWidth="2"
          strokeDasharray="500"
          strokeDashoffset="500"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="500"
            to="0"
            dur="2.4s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1"
          />
        </polyline>
      </svg>
      <div className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4 text-xs">
        <div>
          <p className="font-mono text-lg text-text">248k</p>
          <p className="text-muted">records / day</p>
        </div>
        <div>
          <p className="font-mono text-lg text-text">99.2%</p>
          <p className="text-muted">pipeline uptime</p>
        </div>
        <div>
          <p className="font-mono text-lg text-text">4</p>
          <p className="text-muted">projects shipped</p>
        </div>
      </div>
    </div>
  );
}
