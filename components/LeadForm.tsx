'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export default function LeadForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('loading')

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const res = await fetch('/api/growth-audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (res.ok) setStatus('success')
            else setStatus('error')
        } catch (err) {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-dark p-12 rounded-[2rem] text-center border border-brand-indigo/30"
            >
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
                <p className="text-slate-400">Our growth experts will analyze your business and reach out within 24 hours.</p>
            </motion.div>
        )
    }

    return (
        <div className="glass-dark p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 blur-3xl rounded-full" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                        <input
                            required
                            name="name"
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Work Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="john@company.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Company</label>
                        <input
                            name="company"
                            placeholder="Namma SaaS"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Monthly Budget</label>
                        <select
                            name="budget"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white appearance-none"
                        >
                            <option value="25k-50k">₹25,000 - ₹50,000</option>
                            <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                            <option value="1L+">₹1,00,000+</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">How can we help?</label>
                    <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your growth goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white resize-none"
                    />
                </div>

                <button
                    disabled={status === 'loading'}
                    className="btn-premium w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {status === 'loading' ? 'Processing...' : (
                        <>
                            Request Free Audit
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>

                {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or WhatsApp us.</p>
                )}
            </form>
        </div>
    )
}
