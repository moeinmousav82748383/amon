import { TrendingUp, CheckCircle, Sparkles } from 'lucide-react'
import PaymentBox from '@/components/PaymentBox'

export default function VipPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-cosmic-cyan text-sm font-medium mb-4">
            <TrendingUp size={18} />
            AMON TRADE VIP
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">اشتراک سیگنال VIP</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            سیگنال‌های روزانه کریپتو و فارکس با سود بالا و ضرر نزدیک به صفر. معاملات امن و حرفه‌ای.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="glass p-6 md:p-8 text-center border-cosmic-cyan/20">
              <div className="text-sm text-zinc-400 mb-2">قیمت اشتراک</div>
              <div className="text-4xl md:text-5xl font-black text-cosmic-cyan mb-1">۸٬۰۰۰٬۰۰۰</div>
              <div className="text-zinc-500">تومان</div>
            </div>

            <div className="glass p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="text-cosmic-cyan" size={20} />
                مزایای عضویت VIP
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {[
                  'سیگنال روزانه کریپتو و فارکس',
                  'سود بالا با ریسک کنترل‌شده',
                  'دسترسی به کانال خصوصی',
                  'پشتیبانی اختصاصی',
                  'آپدیت مداوم استراتژی‌ها',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-cosmic-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://t.me/Amonroobot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow w-full flex items-center justify-center py-4 rounded-2xl"
            >
              خرید اشتراک از ربات
            </a>
          </div>

          <PaymentBox amount="۸٬۰۰۰٬۰۰۰ تومان" />
        </div>
      </div>
    </div>
  )
}
