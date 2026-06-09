export default function ProjectCard({ title, description, tech, liveUrl, githubUrl, image, type = 'web' }) {
  const isMobile = type === 'mobile';
  
  return (
    <div className="glass overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Conditional image area */}
      {isMobile ? (
        // Phone mockup for mobile projects
        <div className="flex justify-center pt-6 pb-2 bg-neutral-100 dark:bg-neutral-800">
          <div className="relative w-[180px] h-[360px]">
            {/* Phone frame */}
            <div className="absolute inset-0 rounded-[2rem] border-4 border-neutral-300 dark:border-neutral-600 bg-neutral-900 dark:bg-black shadow-lg pointer-events-none" />
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-10" />
            {/* Screen */}
            <div className="absolute inset-[4px] rounded-[1.7rem] overflow-hidden bg-white dark:bg-neutral-900">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-400 text-xs">
                  App Preview
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Original web project image (unchanged)
        <div className="h-48 w-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="text-neutral-400 dark:text-neutral-600 text-sm">No preview</div>
          )}
        </div>
      )}

      {/* Card content (unchanged) */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={liveUrl}
            className="text-sm text-neutral-900 dark:text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo →
          </a>
          <a
            href={githubUrl}
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}