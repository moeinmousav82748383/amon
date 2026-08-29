import { Zap, Target, Heart, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">درباره AMON</h1>
          <p className="text-zinc-400 leading-relaxed">
            برند آمون با تمرکز بر کیفیت، امنیت و پشتیبانی واقعی شکل گرفته است.
          </p>
        </div>

        <div className="glass p-8 md:p-10 mb-10 leading-relaxed text-zinc-300 space-y-4">
          <p>
            <strong className="text-white">AMON</strong> یک مجموعه چندوجهی است که در سه حوزه اصلی فعالیت می‌کند:
            فروش اکانت‌های بازی، ارائه سیگنال‌های حرفه‌ای کریپتو و فارکس، و طراحی وبسایت‌های مدرن.
          </p>
          <p>
            هدف ما ایجاد تجربه‌ای امن، شفاف و سریع برای مشتریان است. تمام سفارش‌ها از طریق ربات تلگرام مدیریت می‌شوند
            تا ارتباط مستقیم و پشتیبانی واقعی حفظ شود.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Target, title: 'ماموریت', desc: 'ارائه خدمات با کیفیت و قابل اعتماد در حوزه دیجیتال و مالی' },
            { icon: Heart, title: 'ارزش‌ها', desc: 'شفافیت، امنیت، پشتیبانی واقعی و احترام به مشتری' },
            { icon: Award, title: 'کیفیت', desc: 'تست دقیق محصولات و به‌روزرسانی مداوم خدمات' },
            { icon: Zap, title: 'سرعت', desc: 'تحویل سریع سفارش‌ها و پاسخگویی به موقع' },
          ].map((item, i) => (
            <div key={i} className="glass p-6">
              <item.icon className="w-8 h-8 text-cosmic-gold mb-3" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
