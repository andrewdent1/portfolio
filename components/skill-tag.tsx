interface SkillTagProps {
  children: React.ReactNode;
}

export function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm mr-2 mb-2">
      {children}
    </span>
  )
}
