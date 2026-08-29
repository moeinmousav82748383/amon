'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Zap } from 'lucide-react'

const ADMIN_PASS = 'amon2024' // رمز پیش‌فرض — بعداً تغییر دهید

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASS) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('amon_admin', 'true')
      }
      router.push('/admin')
    } else {
      setError('رمز عبور اشتباه است')
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="glass p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cosmic-gold to-yellow-600 flex items-center justify-center mb-4">
            <Zap className="w-7 h-7 text-cosmic-black" />
          </div>
          <h1 className="text-2xl font-bold">ورود به پنل ادمین</h1>
          <p className="text-sm text-zinc-400 mt-1">فقط برای مدیران مجموعه AMON</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">رمز عبور</label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError('') }}
                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pr-11 pl-4 text-white focus:outline-none focus:border-cosmic-gold/50 transition"
                placeholder="رمز عبور را وارد کنید"
                dir="ltr"
              />
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>

          <button type="submit" className="btn-glow w-full py-3.5 rounded-xl">
            ورود
          </button>
        </form>
      </div>
    </div>
  )
}
