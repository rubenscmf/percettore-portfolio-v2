import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
  showIndex?: boolean;
  totalProjects?: number;
}

export const ProjectCard = ({
  project,
  className = "",
  showIndex = true,
  totalProjects,
}: ProjectCardProps) => {
  return (
    <Link
      to={`/projetos/${project.slug}`}
      className={`group relative flex flex-col bg-card border border-foreground/[0.08] hover:border-primary/40 transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* IMAGE CONTAINER WITH CIRCULAR HOVER BADGE (BIMAT REFERENCE STYLE) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-concrete-100">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* STATUS BADGE */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-background/90 backdrop-blur-sm border border-foreground/10 text-foreground font-sans text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
            {project.status}
          </span>
        </div>

        {/* CIRCULAR INTERACTIVE HOVER BADGE */}
        <div className="absolute top-3 right-3 z-10">
          <div className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm border border-foreground/15 text-foreground flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2 font-sans text-[10px] uppercase tracking-[0.2em] text-concrete-500 font-semibold">
            <span>{project.category} · {project.location}</span>
            {showIndex && (
              <span className="text-primary font-bold">
                [{project.index}{totalProjects ? ` / ${String(totalProjects).padStart(2, "0")}` : ""}]
              </span>
            )}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="pt-3 border-t border-foreground/[0.06] flex items-center justify-between text-xs text-concrete-600 font-medium">
          <span>{project.type}</span>
          <span className="font-bold text-foreground">{project.area}</span>
        </div>
      </div>
    </Link>
  );
};
