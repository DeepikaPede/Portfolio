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
  name: "Deepika Pede", // TODO: replace
  role: "Senior  Associate - Data  Science",
  tagline:
    "I build end-to-end AI and data solutions that transform complex information into actionable intelligence, scalable applications, and measurable business impact",
  email: "pededeepika@gmail.com", // TODO: replace
  github: "https://github.com/DeepikaPede", // TODO: replace
  about:
    "I am a Senior Associate [Data Science]  professional with 3+ years of experience building end-to-end AI solutions that transform complex data into actionable intelligence and business value.Building intelligent AI and data solutions that connect information, automation, and decision-making to create measurable business impact.",
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
  { name: "MongoDB", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "Langchain", category: "Framework" },
  { name: "Langgraph", category: "Framework" },
  { name: "FastAPI", category: "Framework" },
  { name: "Docker", category: "Frameework" },
  { name: "Pandas", category: "Data" },
  { name: "Recharts", category: "Data" },
  { name: "Claude API", category: "Tool" },
  { name: "Github", category: "Tool" },
  { name: "Vercel", category: "Tool" },
];
