import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
  totalProjects?: number;
}

export const ProjectCard = ({ project, className = "", totalProjects = 6 }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`group relative block w-full ${className}`}>
      <Link to={`/projetos/${project.slug}`} className="block overflow-hidden">
        {/* THUMBNAIL CONTAINER */}
        <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden bg-concrete-900/10 rounded-sm border border-foreground/10">
          {/* Subtle Skeleton/Placeholder before load */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-concrete-100 animate-pulse" />
          )}

          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } grayscale group-hover:grayscale-0`}
          />

          {/* DARK GRADIENT OVERLAY ON HOVER FOR TYPOLOGY REVEAL */}
          <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/90 via-concrete-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* TOP BADGES */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <span className="font-mono text-xs uppercase tracking-widest bg-concrete-900/90 text-white px-3 py-1 border border-white/10 font-medium">
              {project.category}
            </span>
            <span className={`font-mono text-xs uppercase tracking-widest px-3 py-1 text-white font-bold border ${
              project.status === "Executado" 
                ? "bg-primary/90 border-primary" 
                : "bg-amber-600/90 border-amber-500"
            }`}>
              {project.status}
            </span>
          </div>

          {/* HOVER STRUCTURAL TYPOLOGY REVEAL OVERLAY */}
          <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end transform transition-transform duration-500">
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-1.5 opacity-90 group-hover:translate-x-1 transition-transform font-bold">
              <Layers className="w-4 h-4" />
              <span>Tipologia Estrutural</span>
            </div>
            
            <p className="font-display text-base md:text-lg font-bold text-white leading-tight tracking-tight text-pretty mb-3 opacity-95 group-hover:text-white transition-colors">
              {project.structuralTypology}
            </p>

            <div className="flex items-center justify-between text-concrete-300 font-mono text-xs uppercase tracking-wider pt-2 border-t border-white/15 font-medium">
              <span>{project.area}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA & TITLE */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
              {project.title}
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
            </h3>
            <p className="text-xs text-concrete-500 font-mono uppercase tracking-widest mt-1">
              {project.location} · {project.type.split("·")[0]}
            </p>
          </div>

          <div className="font-mono text-xs font-bold text-primary tracking-widest shrink-0 pt-1">
            [{project.index} / {String(totalProjects).padStart(2, "0")}]
          </div>
        </div>
      </Link>
    </div>
  );
};
