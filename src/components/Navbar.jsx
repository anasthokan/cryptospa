const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="flex gap-8 px-16 py-4 text-sm">
        <button onClick={() => scrollTo("home")}>HOME</button>
        <button onClick={() => scrollTo("about")}>ABOUT</button>
        <button onClick={() => scrollTo("tokenomics")}>TOKENOMICS</button>
        <button onClick={() => scrollTo("roadmap")}>ROADMAP</button>
        <button onClick={() => scrollTo("faq")}>FAQ</button>
      </div>
    </nav>
  );
}
