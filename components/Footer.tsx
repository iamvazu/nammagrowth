'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-bg-deep border-t border-white/5 pt-32 pb-10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-indigo/5 blur-[150px] rounded-full -mb-32 -mr-32" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-orange flex items-center justify-center font-bold text-xl text-white shadow-xl shadow-brand-indigo/20">
                                N
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                NAMMA GROWTH
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed italic max-w-xs">
                            India's first AI-native marketing agency. Building autonomous revenue engines for the next generation of Indian brands.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-indigo/30 hover:bg-white/5 transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1: Engine */}
                    <div>
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px] text-brand-orange">The Engine</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'AI SEO & AEO', href: '/services/ai-seo' },
                                { name: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
                                { name: 'Performance Marketing', href: '/services/google-ads' },
                                { name: 'Programmatic SEO', href: '/services/pseo' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-500 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                                        <div className="w-1 h-1 rounded-full bg-brand-indigo opacity-0 group-hover:opacity-100 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2: Resources */}
                    <div>
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px] text-brand-indigo">Resources</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Case Stories', href: '/case-studies' },
                                { name: 'Growth Blog', href: '/blog' },
                                { name: 'Free Growth Audit', href: '/book-call' },
                                { name: 'SEO Discovery', href: '/discovery/seo' },
                                { name: 'Web Discovery', href: '/discovery/web-design' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-500 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-8">
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px] text-brand-gold">Get in Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-brand-orange" />
                                </div>
                                <span className="text-sm font-bold">+91 80 XXXX XXXX</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-brand-indigo" />
                                </div>
                                <span className="text-sm font-bold">growth@nammagrowth.in</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-brand-gold" />
                                </div>
                                <span className="text-sm italic">Koramangala, Bangalore</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                        © {currentYear} Namma Growth AI. Built for the Indian Digital Era.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-slate-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-slate-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
