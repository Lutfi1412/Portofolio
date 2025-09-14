import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group h-full">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.tittle}
          className="w-full h-48 object-fill transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.tittle}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.deskripsi}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm"
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
