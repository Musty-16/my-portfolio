import { Link } from "react-scroll";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center px-6 pt-20">
      <div className="glass p-8 md:p-12 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <p className="text-neutral-500 dark:text-neutral-400 mb-4 text-lg">👋 Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-neutral-900 dark:text-white">
               Akintola Mustapha
          </h1>
          <h2 className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl">
            Full‑stack engineer specializing in React and Node. I help startups turn
            complex requirements into fast, scalable web applications.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block cursor-pointer
                         bg-neutral-900 text-white hover:bg-neutral-800
                         dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              View Projects
            </Link>
            <Button href="/resume.pdf" variant="outline">View Resume</Button>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block cursor-pointer
                         border border-neutral-300 text-neutral-900 hover:bg-neutral-100
                         dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass p-2">
            <img
              src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
              alt="Your Name"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
