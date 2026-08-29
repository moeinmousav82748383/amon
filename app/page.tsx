import Link from 'next/link'
import { Gamepad2, TrendingUp, Globe, ArrowLeft, Star, Users, Shield } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cosmic-gold/30 bg-cosmic-gold/5 text-cosmic-gold text-xs font-medium mb-8">
            <Star size={14} />
            برند رسمی آمون
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-l from-white via-white to-zinc-400 bg-clip-text text-transparent">
              به دنیای
            </span>
            <br />
            <span className="bg-gradient-to-l from-cosmic-gold via-yellow-300 to-cosmic-gold bg-clip-text text-transparent">
              AMON
            </span>
            <span className="text-white"> خوش آمدید</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
            اکانت‌های بازی، سیگنال‌های VIP کریپتو و فارکس با سود بالا، و طراحی وبسایت حرفه‌ای — همه در یک برند معتبر.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/Amonroobot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow px-8 py-4 rounded-2xl text-base w-full sm:w-auto"
            >
              شروع از ربات تلگرام
            </a>
            <Link
              href="/vip"
              className="btn-outline px-8 py-4 rounded-2xl text-base w-full sm:w-auto"
            >
              مشاهده اشتراک VIP
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-6 text-center">
          {[
            { icon: Users, label: 'کاربران فعال', value: '+۲۰۰۰' },
            { icon: Shield, label: 'سفارش موفق', value: '+۱۵۰۰' },
            { icon: Star, label: 'رضایت مشتری', value: '۹۸٪' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <s.icon className="w-6 h-6 text-cosmic-gold mb-1" />
              <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs md:text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات ما</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">سه بخش اصلی برند آمون برای نیازهای مختلف شما</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              title="AMON GAME"
              description="خرید امن و سریع اکانت‌های بازی با پشتیبانی کامل و تحویل آنی پس از تأیید پرداخت."
              href="/game"
              icon={Gamepad2}
              accent="gold"
            />
            <ServiceCard
              title="AMON TRADE VIP"
              description="سیگنال‌های روزانه کریپتو و فارکس با سود بالا و ریسک بسیار کم. دسترسی به کانال خصوصی."
              href="/vip"
              icon={TrendingUp}
              accent="cyan"
            />
            <ServiceCard
              title="AMON NET"
              description="طراحی و پیاده‌سازی وبسایت‌های حرفه‌ای، مدرن و کاملاً ریسپانسیو برای کسب‌وکار شما."
              href="/net"
              icon={Globe}
              accent="purple"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-cosmic-gold/5 via-transparent to-cosmic-cyan/5" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">آماده شروع هستید؟</h2>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                همین الان وارد ربات تلگرام شوید و سفارش خود را ثبت کنید. پشتیبانی ۲۴ ساعته در کنار شماست.
              </p>
              <a
                href="https://t.me/Amonroobot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl"
              >
                ورود به ربات @Amonroobot
                <ArrowLeft size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
