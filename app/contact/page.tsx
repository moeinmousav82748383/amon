import { Send, MessageCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">تماس با ما</h1>
          <p className="text-zinc-400">ما از طریق تلگرام همیشه در دسترس هستیم</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <a
            href="https://t.me/Amonroobot"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover p-6 flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-cosmic-gold/15 flex items-center justify-center mb-4 group-hover:bg-cosmic-gold/25 transition">
              <Send className="w-6 h-6 text-cosmic-gold" />
            </div>
            <h3 className="font-bold text-lg mb-1">ربات رسمی</h3>
            <p className="text-sm text-zinc-400 mb-3">ثبت سفارش و ارسال رسید</p>
            <span className="text-cosmic-gold text-sm font-medium">@Amonroobot</span>
          </a>

          <a
            href="https://t.me/Moein481"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover p-6 flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-cosmic-cyan/15 flex items-center justify-center mb-4 group-hover:bg-cosmic-cyan/25 transition">
              <MessageCircle className="w-6 h-6 text-cosmic-cyan" />
            </div>
            <h3 className="font-bold text-lg mb-1">پشتیبانی</h3>
            <p className="text-sm text-zinc-400 mb-3">سوالات و مشاوره</p>
            <span className="text-cosmic-cyan text-sm font-medium">@Moein481</span>
          </a>
        </div>

        <div className="glass p-6 flex items-start gap-4">
          <Clock className="w-6 h-6 text-cosmic-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold mb-1">ساعات پاسخگویی</h4>
            <p className="text-sm text-zinc-400">پشتیبانی از طریق تلگرام تقریباً ۲۴ ساعته فعال است. معمولاً در کمتر از چند ساعت پاسخ دریافت می‌کنید.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
