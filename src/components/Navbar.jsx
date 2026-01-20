import { useEffect, useState } from "react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "tokenomics", "roadmap", "faq"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-[1400px] mx-auto px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.xzp9p856ppnBYZiT9sguWAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="AHF"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-widest">
          {[
            ["HOME", "home"],
            ["ABOUT", "about"],
            ["TOKENOMICS", "tokenomics"],
            ["ROADMAP", "roadmap"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative transition ${
                active === id
                  ? "text-gold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scrollTo("home")}
          className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition"
        >
          <span className="text-sm font-semibold">Get Started</span>
        </button>
      </div>
    </nav>
  );
}
