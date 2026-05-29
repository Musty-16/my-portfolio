import { useState, useMemo } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Derive all unique tech tags from projects
  const allTechs = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tech.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-neutral-900 dark:text-white">
        Featured Projects
      </h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setActiveFilter(tech)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === tech
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}