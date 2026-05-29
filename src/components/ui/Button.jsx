export default function Button({ children, href, variant = "primary" }) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block cursor-pointer";
  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
    outline:
      "border border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900",
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
}