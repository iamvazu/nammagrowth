'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-bg-deep border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-orange flex items-center justify-center font-bold text-white shadow-lg shadow-brand-indigo/20">
                                N
                            </div>
                            <span className="text-xl font-extrabold tracking-tighter text-white">
                                NAMMA GROWTH
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            We build automated revenue engines for Bangalore&apos;s most ambitious businesses.
                            From Koramangala to the world.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-indigo transition-all">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Our Engine</h4>
                        <ul className="space-y-4">
                            {[
                                'AI WhatsApp Automation',
                                'Performance Marketing',
                                'Programmatic SEO',
                                'Local SEO Mastery',
                                'Web Development'
                            ].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-500 hover:text-brand-orange text-sm transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Micro-Markets</h4>
                        <ul className="space-y-4">
                            {[
                                'Koramangala Solutions',
                                'HSR Layout Strategies',
                                'Indiranagar Growth',
                                'Whitefield Enterprise',
                                'Electronic City'
                            ].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-500 hover:text-brand-indigo text-sm transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get in Touch</h4>
                        <div className="flex items-center gap-3 text-slate-400">
                            <Phone className="w-4 h-4 text-brand-orange" />
                            <span className="text-sm">+91 80 XXXX XXXX</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400">
                            <Mail className="w-4 h-4 text-brand-indigo" />
                            <span className="text-sm">growth@nammagrowth.in</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400">
                            <MapPin className="w-4 h-4 text-brand-orange" />
                            <span className="text-sm">WeWork, Koramangala, Bangalore</span>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-xs">
                        © {currentYear} Namma Growth AI Marketing Agency. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-slate-600 hover:text-white text-xs">Privacy Policy</Link>
                        <Link href="#" className="text-slate-600 hover:text-white text-xs">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
