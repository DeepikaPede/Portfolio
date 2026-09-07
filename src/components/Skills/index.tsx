import { skills } from "../../data/portfolio";

const categories = ["Language", "Framework", "Data", "Tool"] as const;

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="max-w-content mx-auto px-6 py-20">
        <h2 className="font-display text-2xl text-text">Skills</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category}>
              <p className="font-mono text-xs text-muted">{category}</p>
              <ul className="mt-3 space-y-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li key={skill.name} className="text-sm text-text">
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
