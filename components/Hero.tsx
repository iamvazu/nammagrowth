'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-dark mb-8 border border-white/10"
                >
                    <span className="text-sm font-medium text-slate-300">
                        ⭐ 4.9/5 from 100+ Indian businesses | Response in 2 hours
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter"
                >
                    Scale Your Business <br />
                    with <span className="text-brand-orange italic">AI-Powered</span> Marketing
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    From Bangalore to Boston, we build autonomous revenue engines that
                    generate leads while you sleep. India&apos;s first AI-native marketing agency.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button className="btn-premium group">
                        Get Free Growth Audit
                        <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="px-8 py-4 rounded-full font-bold glass hover:bg-white/20 transition-all border border-white/10">
                        View Client Results
                    </button>
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
                >
                    {[
                        { label: 'Revenue Generated', value: '₹50Cr+' },
                        { label: 'Avg ROI Improvement', value: '300%' },
                        { label: 'AI Bots Running', value: '24/7' },
                        { label: 'PSEO Pages Created', value: '500+' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-6 glass-dark rounded-2xl border border-white/5">
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold leading-tight">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
