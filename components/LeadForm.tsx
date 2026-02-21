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
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Phone (WhatsApp)</label>
                        <input
                            required
                            name="phone"
                            placeholder="+91 98765 43210"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Industry</label>
                        <select
                            name="industry"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white appearance-none"
                        >
                            <option value="saas">SaaS & Tech</option>
                            <option value="real-estate">Real Estate</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="ecommerce">D2C / E-commerce</option>
                            <option value="education">Education</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Location in Bangalore</label>
                        <select
                            name="location"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white appearance-none"
                        >
                            <option value="koramangala">Koramangala</option>
                            <option value="hsr">HSR Layout</option>
                            <option value="indiranagar">Indiranagar</option>
                            <option value="whitefield">Whitefield</option>
                            <option value="other">Other / Pan India</option>
                        </select>
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
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Biggest Challenge</label>
                    <select
                        name="challenge"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-indigo transition-colors text-white appearance-none"
                    >
                        <option value="leads">Generating Qualified Leads</option>
                        <option value="seo">Ranking on Google</option>
                        <option value="automation">Automating Customer Chat</option>
                        <option value="ads">Improving Ad ROAS</option>
                        <option value="branding">Brand Building</option>
                    </select>
                </div>

                <button
                    disabled={status === 'loading'}
                    className="btn-premium w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {status === 'loading' ? 'Processing...' : (
                        <>
                            Get My Free Audit — Response in 2 Hours
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
