import { currentlyData } from "../../data/currently";

const items = [
  { label: "Learning", value: currentlyData.learning, icon: "📚" },
  { label: "Reading", value: currentlyData.reading, icon: "📖" },
  { label: "Building", value: currentlyData.building, icon: "🔨" },
  { label: "Listening", value: currentlyData.listening, icon: "🎧" },
];

export default function Currently() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-200 dark:border-neutral-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-neutral-900 dark:text-white">
        Currently
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="glass p-6 flex flex-col items-center text-center">
            <span className="text-3xl mb-3">{item.icon}</span>
            <p className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
              {item.label}
            </p>
            <p className="font-medium text-neutral-800 dark:text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}