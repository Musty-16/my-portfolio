import { useFadeIn } from "../../hooks/useFadeIn";

export default function FadeInSection({ children, className = "" }) {
  const [ref, isVisible] = useFadeIn(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}