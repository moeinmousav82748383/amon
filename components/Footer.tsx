import Link from 'next/link'
import { Zap, Send, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-cosmic-dark/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cosmic-gold to-yellow-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-cosmic-black" />
              </div>
              <span className="text-lg font-bold">AMON</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              برند رسمی آمون — ارائه اکانت بازی، سیگنال‌های VIP کریپتو و فارکس و خدمات طراحی وبسایت حرفه‌ای.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/game" className="hover:text-cosmic-gold transition">AMON GAME</Link></li>
              <li><Link href="/vip" className="hover:text-cosmic-gold transition">TRADE VIP</Link></li>
              <li><Link href="/net" className="hover:text-cosmic-gold transition">AMON NET</Link></li>
              <li><Link href="/about" className="hover:text-cosmic-gold transition">درباره ما</Link></li>
              <li><Link href="/contact" className="hover:text-cosmic-gold transition">تماس با ما</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">ارتباط</h4>
            <div className="space-y-3">
              <a
                href="https://t.me/Amonroobot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cosmic-cyan transition"
              >
                <Send size={16} />
                ربات رسمی: @Amonroobot
              </a>
              <a
                href="https://t.me/Moein481"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cosmic-cyan transition"
              >
                <MessageCircle size={16} />
                پشتیبانی: @Moein481
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} AMON. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  )
}
