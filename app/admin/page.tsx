'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutDashboard, Package, Settings, LogOut,
  Users, ShoppingCart, TrendingUp, Eye
} from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('amon_admin')
    if (auth !== 'true') {
      router.replace('/admin/login')
    } else {
      setReady(true)
    }
  }, [router])

  const logout = () => {
    localStorage.removeItem('amon_admin')
    router.push('/admin/login')
  }

  if (!ready) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-zinc-400">در حال بررسی دسترسی...</div>
      </div>
    )
  }

  const stats = [
    { label: 'بازدید امروز', value: '—', icon: Eye, color: 'text-cosmic-cyan' },
    { label: 'سفارش‌ها (ربات)', value: 'از ربات', icon: ShoppingCart, color: 'text-cosmic-gold' },
    { label: 'کاربران ربات', value: 'از ربات', icon: Users, color: 'text-cosmic-purple' },
    { label: 'اشتراک VIP', value: 'فعال', icon: TrendingUp, color: 'text-green-400' },
  ]

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <LayoutDashboard className="text-cosmic-gold" />
              پنل مدیریت AMON
            </h1>
            <p className="text-sm text-zinc-400 mt-1">مدیریت محتوا و تنظیمات سایت</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition text-sm"
          >
            <LogOut size={16} />
            خروج
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="glass p-5">
              <s.icon className={`w-6 h-6 ${s.color} mb-3`} />
              <div className="text-xl font-bold">{s.value}</div>
              <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link href="/admin/products" className="glass glass-hover p-6 group">
            <Package className="w-8 h-8 text-cosmic-gold mb-4 group-hover:scale-110 transition" />
            <h3 className="font-bold text-lg mb-1">مدیریت محصولات</h3>
            <p className="text-sm text-zinc-400">افزودن، ویرایش و حذف سرویس‌ها و پکیج‌ها</p>
          </Link>

          <Link href="/admin/settings" className="glass glass-hover p-6 group">
            <Settings className="w-8 h-8 text-cosmic-cyan mb-4 group-hover:scale-110 transition" />
            <h3 className="font-bold text-lg mb-1">تنظیمات</h3>
            <p className="text-sm text-zinc-400">شماره کارت، قیمت VIP، لینک‌ها و ...</p>
          </Link>

          <a
            href="https://t.me/Amonroobot"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover p-6 group"
          >
            <ShoppingCart className="w-8 h-8 text-cosmic-purple mb-4 group-hover:scale-110 transition" />
            <h3 className="font-bold text-lg mb-1">مدیریت سفارش‌ها</h3>
            <p className="text-sm text-zinc-400">سفارش‌ها از طریق ربات تلگرام مدیریت می‌شوند</p>
          </a>
        </div>

        <div className="mt-10 glass p-6 text-sm text-zinc-400">
          <p className="mb-2"><strong className="text-white">نکته:</strong> سفارش‌های واقعی (اکانت، VIP) از طریق ربات تلگرام <code className="text-cosmic-gold">@Amonroobot</code> ثبت و تأیید می‌شوند.</p>
          <p>این پنل برای مدیریت محتوای سایت و تنظیمات نمایشی طراحی شده است.</p>
        </div>
      </div>
    </div>
  )
}
