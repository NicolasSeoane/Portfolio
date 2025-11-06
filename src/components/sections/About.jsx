import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"];
  const backendSkills = [
    ".NET",
    "EntityFramework",
    "Node.js",
    "Express",
    "Prisma",
    "SQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-4 border-blue-500/70 border-double hover:-translate-y-1 transition-all">
            <p className="text-grey-300 mb-6">
              I’m a Full Stack Developer skilled in .NET, Node.js, and React. I
              love building clean, efficient web applications and turning ideas
              into real, user-focused solutions. Always learning, always
              improving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-6 mt-8">
            <div className="p-6 rounded-xl border-4 border-blue-500/70 border-double hover:-translate-y-1 transition-all my-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4 text-grey-300">
                <h4 className="text-lg font-semibold text-white mb-2">
                  IT Analiyst —
                  <span className="text-blue-400"> ORT university </span>
                  <span className="text-sm text-gray-400">(2020 - 2023)</span>
                </h4>
                <ul className="space-y-2 text-gray-300 text-md leading-relaxed list-disc list-inside marker:text-blue-400">
                  <li>
                    Focused on software engineering and full stack development.
                  </li>
                  <li>
                    Relevant Coursework: Data Structures, Algorithms,
                    Object-oriented programming, Web Development, Database
                    Management
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
            <div className="p-6 rounded-xl border-4 border-blue-500/70 border-double hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-grey-300">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Full Stack Developer —
                  <span className="text-blue-400"> IBM Uruguay </span>
                  <span className="text-sm text-gray-400">
                    (Oct 2021 – Aug 2023)
                  </span>
                </h4>

                <ul className="space-y-2 text-gray-300 text-md leading-relaxed list-disc list-inside marker:text-blue-400">
                  <li>
                    Developed and maintained a desktop application for the
                    financial sector, built on a Java-based client platform,
                    enabling account management, financial reporting, and
                    payment processing.
                  </li>
                  <li>
                    Designed and implemented a full stack web application with
                    .NET, Entity Framework, SQL and Angular, streamlining
                    internal processes and reducing execution times for key
                    client tasks.
                  </li>
                  <li>
                    Fixed critical bugs and improved application performance,
                    ensuring stability and scalability of production systems.
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="/cv/NicolasSeoaneCV.pdf"
              download
              className="block w-fit mx-auto mt-8 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 hover:underline transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
