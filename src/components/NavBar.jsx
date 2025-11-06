import { useEffect, useState } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out ${
        isSticky
          ? "top-4 w-[90%] bg-transparent backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl scale-95"
          : "top-0 w-full bg-[rgba(10,10,10,0.85)] border-none shadow-none rounded-none scale-100"
      }`}
    >
      <div className="mx-auto max-w-6xl px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#home" className="font-mono text-xl font-bold text-white">
          Nicolas Seoane
        </a>

        {/* Hamburger Menu */}
        <div
          className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-white hover:underline transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white hover:underline transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white hover:underline transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white hover:underline transition-colors"
          >
            Contact
          </a>
          <a
            href="/cv/NicolasSeoaneCV.pdf"
            download
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 hover:underline transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};
