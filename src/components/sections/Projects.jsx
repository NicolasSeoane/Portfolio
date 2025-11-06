import { RevealOnScroll } from "../RevealOnScroll";
import { Project } from "../Project";

const projects = [
  {
    id: 1,
    title: "What Can I Watch",
    description: "WhatCanIWatch helps you decide what to watch next, using the TMDB and OpenAI, you can find your next movie!",
    image: "/projects/Popular.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "OpenAI", "JWT", "Google OAuth"],
    demoUrl: "https://whatcaniwatch.vercel.app/",
    githubUrl: "https://github.com/NicolasSeoane/WhatCanIWatch",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                skills={project.tags}
                projectLink={project.demoUrl}
                github={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
