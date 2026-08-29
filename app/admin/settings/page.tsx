'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Save } from 'lucide-react'

type Settings = {
  cardNumber: string
  cardName: string
  vipPrice: string
  botUsername: string
  supportUsername: string
}

const DEFAULT: Settings = {
  cardNumber: '6219861971517403',
  cardName: 'حجتی برندق',
  vipPrice: '8000000',
  botUsername: 'Amonroobot',
  supportUsername: 'Moein481',
}

export default function AdminSettings() {
  const router = useRouter()
  const [settings, setSettings] = useState<Settings>(DEFAULT)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('amon_admin') !== 'true') {
      router.replace('/admin/login')
      return
    }
    const s = localStorage.getItem('amon_settings')
    if (s) setSettings(JSON.parse(s))
  }, [router])

  const handleSave = () => {
    localStorage.setItem('amon_settings', JSON.stringify(settings))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/admin" className="p-2 rounded-lg hover:bg-white/5 transition">
            <ArrowRight size={20} />
          </Link>
          <h1 className="text-2xl font-bold">تنظیمات</h1>
        </div>

        <div className="glass p-6 space-y-5">
          {[
            { key: 'cardNumber', label: 'شماره کارت', dir: 'ltr' },
            { key: 'cardName', label: 'نام صاحب کارت' },
            { key: 'vipPrice', label: 'قیمت VIP (تومان)', dir: 'ltr' },
            { key: 'botUsername', label: 'یوزرنیم ربات (بدون @)', dir: 'ltr' },
            { key: 'supportUsername', label: 'یوزرنیم پشتیبانی (بدون @)', dir: 'ltr' },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm text-zinc-400 mb-2">{field.label}</label>
              <input
                value={(settings as any)[field.key]}
                onChange={e => setSettings({ ...settings, [field.key]: e.target.value })}
                dir={field.dir || 'rtl'}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cosmic-gold/40"
              />
            </div>
          ))}

          <button onClick={handleSave} className="btn-glow w-full flex items-center justify-center gap-2 py-3.5 rounded-xl">
            <Save size={18} />
            {saved ? 'ذخیره شد ✓' : 'ذخیره تنظیمات'}
          </button>
        </div>

        <p className="text-xs text-zinc-500 mt-4 text-center">
          این تنظیمات در مرورگر ذخیره می‌شوند. برای تغییرات دائمی در سایت اصلی، کد را ویرایش کنید.
        </p>
      </div>
    </div>
  )
}
