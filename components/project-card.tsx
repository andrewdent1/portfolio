interface ProjectCardProps {
  title: string;
  website: string;
  description: string;
  date: string;
  technologies: string[];
  projectLink?: string;
}

export function ProjectCard({ title, website, description, date, technologies, projectLink }: ProjectCardProps) {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors"
            >
              {website.replace('https://', '')}
            </a>
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/70 transition-colors"
              >
                View Project
              </a>
            )}
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">{date}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
