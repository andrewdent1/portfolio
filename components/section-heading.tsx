interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-emerald-600 dark:text-emerald-500 font-medium text-sm tracking-widest uppercase mb-8">
      {children}
    </h2>
  )
}
