import { Globe, CheckCircle, MessageCircle } from 'lucide-react'

const packages = [
  {
    name: 'پایه',
    price: 'از ۵ میلیون',
    features: ['طراحی ریسپانسیو', 'تا ۵ صفحه', 'فرم تماس', 'سئو اولیه', 'پشتیبانی ۱ ماه'],
  },
  {
    name: 'حرفه‌ای',
    price: 'از ۱۲ میلیون',
    features: ['طراحی اختصاصی', 'تا ۱۲ صفحه', 'پنل مدیریت', 'اتصال درگاه', 'سئو پیشرفته', 'پشتیبانی ۳ ماه'],
    popular: true,
  },
  {
    name: 'ویژه',
    price: 'توافقی',
    features: ['طراحی کاملاً اختصاصی', 'صفحات نامحدود', 'اپلیکیشن وب', 'بهینه‌سازی سرعت', 'پشتیبانی ۶ ماه', 'آموزش کامل'],
  },
]

export default function NetPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-cosmic-purple text-sm font-medium mb-4">
            <Globe size={18} />
            AMON NET
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">طراحی وبسایت حرفه‌ای</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            وبسایت‌های مدرن، سریع و کاملاً ریسپانسیو برای کسب‌وکار شما. از ایده تا اجرا در کنار شما هستیم.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`glass p-6 md:p-8 relative ${pkg.popular ? 'border-cosmic-gold/40 shadow-lg shadow-cosmic-gold/10' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cosmic-gold text-cosmic-black text-xs font-bold">
                  محبوب‌ترین
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-2xl font-bold text-cosmic-gold mb-6">{pkg.price}</div>
              <ul className="space-y-3 text-sm text-zinc-300 mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-cosmic-purple shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/Moein481"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium ${
                  pkg.popular ? 'btn-glow' : 'btn-outline'
                }`}
              >
                <MessageCircle size={16} />
                سفارش این پکیج
              </a>
            </div>
          ))}
        </div>

        <div className="text-center glass p-8 max-w-2xl mx-auto">
          <p className="text-zinc-400 mb-4">
            برای مشاوره رایگان و دریافت پیشنهاد اختصاصی، مستقیم با ادمین در ارتباط باشید.
          </p>
          <a
            href="https://t.me/Moein481"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl"
          >
            ارتباط با @Moein481
          </a>
        </div>
      </div>
    </div>
  )
}
