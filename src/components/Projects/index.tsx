import { projects, type Project } from "../../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="max-w-content mx-auto px-6 py-20">
        <h2 className="font-display text-2xl text-text">Projects</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-sm border border-border bg-surface p-6 transition-colors hover:border-muted">
      <h3 className="font-display text-lg text-text">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-surfaceLight px-2 py-1 font-mono text-xs text-teal"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-4 text-sm">
        <a
          href={project.githubUrl}
          className="text-muted transition-colors hover:text-text"
        >
          View code
        </a>
        <a
          href={project.liveUrl}
          className="text-amber transition-colors hover:text-text"
        >
          Open live demo
        </a>
      </div>
    </div>
  );
}
