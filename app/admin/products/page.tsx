'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Plus, Trash2, Edit2, Save, X } from 'lucide-react'

type Product = {
  id: string
  title: string
  price: string
  category: string
  description: string
}

const DEFAULT: Product[] = [
  { id: '1', title: 'اکانت نمونه GAME', price: '۵۰۰٬۰۰۰', category: 'game', description: 'توضیحات نمونه' },
  { id: '2', title: 'اشتراک VIP ماهانه', price: '۸٬۰۰۰٬۰۰۰', category: 'vip', description: 'سیگنال روزانه' },
  { id: '3', title: 'پکیج طراحی حرفه‌ای', price: '۱۲ میلیون', category: 'net', description: 'وبسایت کامل' },
]

export default function AdminProducts() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [editing, setEditing] = useState<Product | null>(null)
  const [form, setForm] = useState({ title: '', price: '', category: 'game', description: '' })

  useEffect(() => {
    if (localStorage.getItem('amon_admin') !== 'true') {
      router.replace('/admin/login')
      return
    }
    const saved = localStorage.getItem('amon_products')
    setProducts(saved ? JSON.parse(saved) : DEFAULT)
  }, [router])

  const save = (list: Product[]) => {
    setProducts(list)
    localStorage.setItem('amon_products', JSON.stringify(list))
  }

  const addProduct = () => {
    if (!form.title.trim()) return
    const newP: Product = {
      id: Date.now().toString(),
      ...form,
    }
    save([newP, ...products])
    setForm({ title: '', price: '', category: 'game', description: '' })
  }

  const updateProduct = () => {
    if (!editing) return
    save(products.map(p => p.id === editing.id ? { ...editing } : p))
    setEditing(null)
  }

  const remove = (id: string) => {
    if (confirm('حذف شود؟')) {
      save(products.filter(p => p.id !== id))
    }
  }

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/admin" className="p-2 rounded-lg hover:bg-white/5 transition">
            <ArrowRight size={20} />
          </Link>
          <h1 className="text-2xl font-bold">مدیریت محصولات</h1>
        </div>

        {/* Add Form */}
        <div className="glass p-6 mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Plus size={18} className="text-cosmic-gold" />
            افزودن محصول جدید
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              placeholder="عنوان"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cosmic-gold/40"
            />
            <input
              placeholder="قیمت"
              value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })}
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cosmic-gold/40"
            />
            <select
              value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cosmic-gold/40"
            >
              <option value="game">GAME</option>
              <option value="vip">VIP</option>
              <option value="net">NET</option>
            </select>
            <input
              placeholder="توضیح کوتاه"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cosmic-gold/40"
            />
          </div>
          <button onClick={addProduct} className="btn-glow mt-4 px-6 py-2.5 rounded-xl text-sm">
            افزودن
          </button>
        </div>

        {/* List */}
        <div className="space-y-3">
          {products.map(p => (
            <div key={p.id} className="glass p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {editing?.id === p.id ? (
                <div className="flex-1 grid sm:grid-cols-2 gap-2">
                  <input
                    value={editing.title}
                    onChange={e => setEditing({ ...editing, title: e.target.value })}
                    className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    value={editing.price}
                    onChange={e => setEditing({ ...editing, price: e.target.value })}
                    className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              ) : (
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    {p.category.toUpperCase()} • {p.price} • {p.description}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                {editing?.id === p.id ? (
                  <>
                    <button onClick={updateProduct} className="p-2 rounded-lg bg-green-500/20 text-green-400">
                      <Save size={16} />
                    </button>
                    <button onClick={() => setEditing(null)} className="p-2 rounded-lg bg-white/5">
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditing(p)} className="p-2 rounded-lg hover:bg-white/5 text-zinc-400">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => remove(p.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-red-400">
                      <Trash2 size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
