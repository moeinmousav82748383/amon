import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface Props {
  title: string
  description: string
  href: string
  icon: LucideIcon
  accent?: string
}

export default function ServiceCard({ title, description, href, icon: Icon, accent = 'gold' }: Props) {
  const accentClass = accent === 'cyan' 
    ? 'from-cosmic-cyan/20 to-transparent border-cosmic-cyan/20 hover:border-cosmic-cyan/40' 
    : accent === 'purple'
    ? 'from-cosmic-purple/20 to-transparent border-cosmic-purple/20 hover:border-cosmic-purple/40'
    : 'from-cosmic-gold/20 to-transparent border-cosmic-gold/20 hover:border-cosmic-gold/40'

  const iconColor = accent === 'cyan' ? 'text-cosmic-cyan' : accent === 'purple' ? 'text-cosmic-purple' : 'text-cosmic-gold'

  return (
    <Link href={href} className={`group block glass p-6 md:p-8 bg-gradient-to-b ${accentClass} transition-all duration-300 hover:-translate-y-1`}>
      <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-5 ${iconColor}`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-cosmic-gold transition">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      <div className="mt-5 text-sm font-medium text-cosmic-gold opacity-0 group-hover:opacity-100 transition">
        مشاهده جزئیات ←
      </div>
    </Link>
  )
}
