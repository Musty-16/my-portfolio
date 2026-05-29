import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-200 dark:border-neutral-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-neutral-900 dark:text-white">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <SkillGroup title="Frontend" items={skills.frontend} />
        <SkillGroup title="Backend" items={skills.backend} />
        <div>
          <SkillGroup title="Tools & DevOps" items={skills.tools} />
          <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <h4 className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-3">
              Currently Learning
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.currentlyLearning.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 glass text-sm text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-300 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 glass text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}