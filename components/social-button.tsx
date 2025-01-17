import { type LucideIcon } from 'lucide-react'

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-muted text-muted-foreground hover:text-foreground transition-colors rounded-full"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  )
}
