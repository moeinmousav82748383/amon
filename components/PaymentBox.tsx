'use client'

import { CreditCard, Copy, Check, Send } from 'lucide-react'
import { useState } from 'react'

const CARD = '6219861971517403'
const CARD_NAME = 'حجتی برندق'

export default function PaymentBox({ amount }: { amount?: string }) {
  const [copied, setCopied] = useState(false)

  const copyCard = async () => {
    try {
      await navigator.clipboard.writeText(CARD)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="glass glass-hover p-6 md:p-8 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-cosmic-gold/20 flex items-center justify-center">
          <CreditCard className="w-5 h-5 text-cosmic-gold" />
        </div>
        <div>
          <h3 className="font-bold text-lg">پرداخت کارت به کارت</h3>
          <p className="text-xs text-zinc-400">پس از واریز، رسید را به ربات ارسال کنید</p>
        </div>
      </div>

      {amount && (
        <div className="mb-5 p-3 rounded-xl bg-cosmic-gold/10 border border-cosmic-gold/20 text-center">
          <span className="text-sm text-zinc-400">مبلغ قابل پرداخت:</span>
          <div className="text-2xl font-bold text-cosmic-gold mt-1">{amount}</div>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5">
          <div>
            <div className="text-xs text-zinc-500 mb-1">شماره کارت</div>
            <div className="font-mono text-lg tracking-wider text-white dir-ltr text-left">{CARD}</div>
          </div>
          <button
            onClick={copyCard}
            className="p-2.5 rounded-lg bg-white/5 hover:bg-cosmic-gold/20 transition"
            title="کپی"
          >
            {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-zinc-400" />}
          </button>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/5">
          <div className="text-xs text-zinc-500 mb-1">به نام</div>
          <div className="font-medium text-white">{CARD_NAME}</div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <a
          href="https://t.me/Amonroobot"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm"
        >
          <Send size={18} />
          ثبت سفارش و ارسال رسید در ربات
        </a>
        <p className="text-xs text-center text-zinc-500 leading-relaxed">
          پس از واریز، به ربات تلگرام مراجعه کرده و رسید خود را ارسال کنید تا سفارش تأیید شود.
        </p>
      </div>
    </div>
  )
}
