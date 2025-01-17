interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
}

export function ExperienceItem({ company, position, period }: ExperienceItemProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-lg">{company}</h3>
          <p className="text-muted-foreground">{position}</p>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
      </div>
    </div>
  )
}

