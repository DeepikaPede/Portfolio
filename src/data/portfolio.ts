// TODO: Replace these placeholder values with your real information.
// This is the ONLY file you need to edit to personalize the site.

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  category: "Language" | "Framework" | "Data" | "Tool";
}

export const profile = {
  name: "Your Name", // TODO: replace
  role: "Data & AI Developer",
  tagline:
    "I build applications that turn raw data into decisions — from AI-powered interfaces to the pipelines that feed them.",
  email: "you@example.com", // TODO: replace
  github: "https://github.com/yourusername", // TODO: replace
  linkedin: "https://linkedin.com/in/yourusername", // TODO: replace
  about:
    "I'm a developer focused on the intersection of data engineering and applied AI. I like building things end to end — from a clean data model, through an API, to an interface people actually enjoy using. This site itself was built as part of a hands-on AI-assisted development course; the projects below are being built out as I complete each one.",
};

// TODO: Replace with your real projects as you build and deploy them.
export const projects: Project[] = [
  {
    title: "AI Chatbot with Claude API",
    description:
      "A conversational interface backed by the Claude API, with streaming responses and a secure server-side proxy so the API key never touches the browser.",
    tech: ["React", "TypeScript", "Node.js", "Claude API"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Interactive Sales Dashboard",
    description:
      "A data visualization dashboard with KPI cards, trend charts, and a date-range filter, built to make monthly performance legible at a glance.",
    tech: ["React", "TypeScript", "Recharts", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "ML Recommendation Engine",
    description:
      "A recommendation service that scores and ranks items from user interaction data, exposed behind a simple API for other apps to query.",
    tech: ["Python", "Pandas", "scikit-learn", "FastAPI"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Data Pipeline Automation Tool",
    description:
      "A scheduled ETL pipeline that ingests, cleans, and loads data on a recurring basis, with logging and failure alerts built in.",
    tech: ["Python", "PostgreSQL", "SQL", "Cron"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const skills: Skill[] = [
  { name: "Python", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "Node.js", category: "Framework" },
  { name: "FastAPI", category: "Framework" },
  { name: "PostgreSQL", category: "Data" },
  { name: "Pandas", category: "Data" },
  { name: "Recharts", category: "Data" },
  { name: "Claude API", category: "Tool" },
  { name: "Git", category: "Tool" },
  { name: "Vercel", category: "Tool" },
];
