import { useState } from "react";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formspreeEndpoint = "https://formspree.io/f/mlgkbnap";
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24 border-t border-neutral-200 dark:border-neutral-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white">
        Get In Touch
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-12 text-lg">
        Currently open to freelance opportunities and full‑time roles. Let's build something great together.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-2">Email</h3>
            <a href="mailto:your.email@example.com" className="text-xl text-neutral-900 dark:text-white hover:underline">
              abassmustapha31@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-2">Location</h3>
            <p className="text-xl text-neutral-900 dark:text-white">Your City, Country</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-2">Social</h3>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "X"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-6 py-3 bg-neutral-900 text-white dark:bg-white dark:text-black font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-green-600 dark:text-green-500 text-sm">Message sent! I'll get back to you soon.</p>}
          {status === "error" && <p className="text-red-600 dark:text-red-500 text-sm">Something went wrong. Please email me directly.</p>}
        </form>
      </div>
    </section>
  );
}