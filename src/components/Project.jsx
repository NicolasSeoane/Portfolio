import { FaGithub, FaLink } from "react-icons/fa";

export const Project = ({
  id,
  title,
  description,
  image,
  skills,
  projectLink,
  github,
}) => {
  return (
    <div
      key={id}
      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
    >
      <div className="h-48 overflow-hidden">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((tag) => (
            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1"> {title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <a
              href={projectLink}
              target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <FaLink size={20} />
            </a>
            <a
              href={github}
              target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
