import { Gamepad2, Shield, Zap, CheckCircle } from 'lucide-react'
import PaymentBox from '@/components/PaymentBox'
import Link from 'next/link'

export default function GamePage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-cosmic-gold text-sm font-medium mb-4">
            <Gamepad2 size={18} />
            AMON GAME
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">خرید اکانت بازی</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            اکانت‌های معتبر و تست‌شده با تحویل سریع پس از تأیید پرداخت. تمام سفارش‌ها از طریق ربات تلگرام مدیریت می‌شوند.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="glass p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Shield className="text-cosmic-gold" size={20} />
                چرا AMON GAME؟
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {[
                  'اکانت‌های اورجینال و تست‌شده',
                  'تحویل سریع پس از تأیید رسید',
                  'پشتیبانی کامل بعد از خرید',
                  'قیمت‌های رقابتی و شفاف',
                  'امنیت کامل اطلاعات',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-cosmic-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Zap className="text-cosmic-cyan" size={20} />
                نحوه خرید
              </h3>
              <ol className="space-y-2 text-sm text-zinc-400 list-decimal list-inside">
                <li>وارد ربات تلگرام شوید</li>
                <li>روی «خرید اکانت AMON GAME» بزنید</li>
                <li>کد آگهی را ارسال کنید</li>
                <li>مبلغ را کارت به کارت واریز کنید</li>
                <li>رسید را برای ربات بفرستید</li>
                <li>پس از تأیید، اطلاعات اکانت دریافت کنید</li>
              </ol>
            </div>

            <a
              href="https://t.me/Amonroobot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow w-full flex items-center justify-center py-4 rounded-2xl"
            >
              خرید از ربات تلگرام
            </a>
          </div>

          <PaymentBox />
        </div>
      </div>
    </div>
  )
}
