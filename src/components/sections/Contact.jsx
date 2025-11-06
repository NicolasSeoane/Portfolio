import { FaArrowRight } from "react-icons/fa";
import { IoIosMail, IoIosMailOpen } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "nicolas97seoane@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // vuelve a false después de 2s
  };

  return (
    <section
      id="contact"
      className="min-h-screen/2 flex items-center justify-center rounded-t-2xl bg-gradient-to-b from-blue-600 to-blue-500 py-20 text-white"
    >
      <RevealOnScroll>
        <div className="text-center space-y-8 w-full max-w-5xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s make your next project{" "}
            <span className="inline-block animate-bounce">👋</span> together
          </h2>
          <p className="text-lg font-medium">{email}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Email */}
            <button
              onClick={handleCopy}
              className={`group flex items-center justify-between bg-black rounded-2xl px-6 py-6 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                ${
                  copied
                    ? "bg-green-600 hover:bg-green-700"
                    : ""
                }
            `}>
              <div className="flex items-center gap-3">
                {copied ? <IoIosMailOpen size={24}/> : <IoIosMail size={24}/>}
                {copied ? <span className="text-lg font-semibold">Email copied!</span> : <span className="text-lg font-semibold">Copy my Email</span>}
                              
              </div>
              <FaArrowRight
                size={22}
                className="transform transition-transform duration-200 group-hover:-rotate-45"
              />
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nicolas-seoane"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-black rounded-2xl px-6 py-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <FaLinkedin size={24} />
                <span className="text-lg font-semibold">
                  Send message on LinkedIn
                </span>
              </div>
              <FaArrowRight
                size={22}
                className="transform transition-transform duration-200 group-hover:-rotate-45"
              />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
