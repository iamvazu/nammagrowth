'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Clock, Shield, CheckCircle2, ArrowRight, PlayCircle, BarChart3, MessageSquare, Search, Languages, Database, Laptop, Smartphone, AlertCircle, ShoppingCart, Calendar } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import LeadForm from '@/components/LeadForm'

export default function AIAgentsClient() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Namma Growth AI Agents | Autonomous Marketing Agents That Work 24/7",
        "description": "Hire AI agents to run your marketing. Our Ads Agent manages Google & Meta campaigns autonomously. 24/7 optimization, India-trained, ₹50Cr+ ad spend managed.",
        "url": "https://nammagrowth.in/ai-agents"
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <main className="min-h-screen bg-bg-deep">
            <JsonLd data={pageSchema} />
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <motion.div
                                {...fadeIn}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark mb-8 border border-white/10"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-slate-300 tracking-wider">
                                    LIVE: 47 AGENTS RUNNING NOW | ₹2.3CR MANAGED TODAY
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]"
                            >
                                Hire <span className="text-brand-orange italic">AI Agents</span>, Not Agencies
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl"
                            >
                                Namma Growth deploys autonomous AI agents that run your Google Ads, Meta campaigns, and SEO—24/7, without sleep, without salaries. Trained on ₹50Cr+ Indian ad spend. First month free.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link href="#contact" className="btn-premium flex items-center gap-2">
                                    Deploy Your First Agent <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button className="px-8 py-4 rounded-full font-bold glass hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5 text-brand-orange" />
                                    Watch 2-Min Demo
                                </button>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative glass-dark rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
                            >
                                <div className="grid grid-cols-2 h-[450px]">
                                    <div className="bg-slate-900/50 p-8 flex flex-col items-center justify-center text-center border-r border-white/5 relative">
                                        <div className="absolute top-4 left-6 text-[10px] font-black text-slate-600 uppercase tracking-widest">Human Agency</div>
                                        <div className="text-5xl mb-4">😴</div>
                                        <div className="text-sm font-bold text-slate-400">Status: Asleep</div>
                                        <div className="mt-4 p-3 bg-white/5 rounded-2xl text-[10px] text-slate-500 italic">
                                            "I'll check the dashboard at 10 AM tomorrow."
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4">
                                            <div className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                                        </div>
                                        <div className="absolute top-4 left-6 text-[10px] font-black text-brand-orange uppercase tracking-widest">Namma AI Agent</div>

                                        <div className="space-y-4 pt-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-brand-indigo/20 flex items-center justify-center text-brand-indigo border border-brand-indigo/20">
                                                    <Zap className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-white">Campaign Optimized</div>
                                                    <div className="text-[10px] text-slate-500">47 times in last hour</div>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                                                <div className="flex justify-between items-center text-[10px]">
                                                    <span className="text-slate-500">Bids Adjusted</span>
                                                    <span className="text-green-500">+124</span>
                                                </div>
                                                <div className="flex justify-between items-center text-[10px]">
                                                    <span className="text-slate-500">Budget Reallocated</span>
                                                    <span className="text-brand-orange">₹43,200</span>
                                                </div>
                                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-brand-indigo"
                                                        animate={{ width: ['0%', '100%'] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange border border-brand-orange/20">
                                                    <BarChart3 className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-white">Real-time ROAS</div>
                                                    <div className="text-[10px] text-brand-gold">4.2x → 5.8x (+38%)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE PROBLEM SECTION */}
            <section className="py-32 bg-slate-900/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Your Marketing Team Is <span className="text-slate-500 italic">Asleep.</span> Your Competitors <span className="text-brand-orange">Aren't.</span></h2>
                            <p className="text-slate-400 text-xl">Traditional agencies work 10 AM - 7 PM. Your ad spend works 24/7.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Competitors steal your traffic", desc: "While you sleep, competitors adjust bids and capture your highest-intent customers." },
                                { title: "Budget burns on bad ads", desc: "Ad costs spike instantly. Humans find out after thousands of rupees are already wasted." },
                                { title: "Missed high-intent searches", desc: "Indian customers shop at 3 AM. If your manual rules aren't perfect, you're missing out." },
                                { title: "Slow response to trends", desc: "Trends emerge and fade before your team wakes up. AI catches them in milliseconds." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-8 glass-dark rounded-3xl border border-white/5"
                                >
                                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                                        <AlertCircle className="w-5 h-5 text-brand-orange" />
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 p-8 rounded-3xl bg-brand-indigo/10 border border-brand-indigo/30 text-center"
                        >
                            <p className="text-white text-lg font-bold">The result? You're paying for "AI-powered agencies" where humans use AI tools slowly. <span className="text-brand-indigo">Not true automation.</span></p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE SOLUTION: MEET OUR AGENTS */}
            <section id="agents" className="py-32 relative">
                <div className="container mx-auto px-6 text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6">Meet the <span className="text-brand-indigo">Namma Agent Fleet</span></h2>
                    <p className="text-slate-500">Specialized autonomous workers for every growth channel.</p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Agent 1: ADS AGENT */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-dark rounded-[3rem] p-10 border border-white/5 flex flex-col h-full relative group"
                        >
                            <div className="absolute top-8 right-8 px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-black uppercase tracking-widest">Available Now</div>
                            <Bot className="w-16 h-16 text-brand-orange mb-8" />
                            <h3 className="text-3xl font-black mb-6">ADS AGENT</h3>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Connects to Google & Meta APIs",
                                    "Monitors performance every 15 min",
                                    "Adjusts bids & budgets automatically",
                                    "Pauses underperformers in real-time",
                                    "Scales winners before they cool",
                                    "Generates daily performance reports"
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-brand-orange mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 mb-8">
                                <h4 className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.2em] mb-3">India-Specific Intelligence</h4>
                                <p className="text-xs text-slate-500 leading-relaxed italic">"Knows Diwali/Eid patterns, UPI vs COD conversion, and optimizes for Tier 2/3 city audiences."</p>
                            </div>

                            <div className="space-y-4 pt-10 border-t border-white/5">
                                <div className="flex justify-between items-center px-2">
                                    <span className="text-slate-500 text-sm">Autonomous</span>
                                    <span className="text-white font-bold">₹29,999<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <Link href="#contact" className="btn-premium w-full text-center block">Deploy Ads Agent</Link>
                            </div>
                        </motion.div>

                        {/* Agent 2: SEO AGENT */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-dark rounded-[3rem] p-10 border border-white/5 flex flex-col h-full relative"
                        >
                            <div className="absolute top-8 right-8 px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-black uppercase tracking-widest">Available Now</div>
                            <Search className="w-16 h-16 text-brand-indigo mb-8" />
                            <h3 className="text-3xl font-black mb-6">SEO AGENT</h3>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Generates 100s of PSEO pages",
                                    "Researches keywords & writes content",
                                    "Auto-publishes to your CMS",
                                    "Builds internal linking structures",
                                    "Tracks rankings & updates content",
                                    "Handles vernacular SEO (10+ languages)"
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-brand-indigo mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 mb-8">
                                <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.2em] mb-3">India-Specific Intelligence</h4>
                                <p className="text-xs text-slate-500 leading-relaxed italic">"Writes in Hinglish, Tamil, Telugu. Understands 'near me' intent in Bangalore vs Mumbai."</p>
                            </div>

                            <div className="space-y-4 pt-10 border-t border-white/5">
                                <div className="flex justify-between items-center px-2">
                                    <span className="text-slate-500 text-sm">Estimated</span>
                                    <span className="text-white font-bold">₹49,999<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <Link href="#contact" className="px-8 py-4 rounded-full font-bold glass hover:bg-white/10 transition-all border border-white/10 w-full text-center block">Join Waitlist</Link>
                            </div>
                        </motion.div>

                        {/* Agent 3: CHAT AGENT */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-dark rounded-[3rem] p-10 border border-white/5 flex flex-col h-full relative"
                        >
                            <div className="absolute top-8 right-8 px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-black uppercase tracking-widest">Available Now</div>
                            <MessageSquare className="w-16 h-16 text-brand-gold mb-8" />
                            <h3 className="text-3xl font-black mb-6">CHAT AGENT</h3>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Manages WhatsApp API 24/7",
                                    "Answers inquiries instantly",
                                    "Qualifies leads with smart questions",
                                    "Books appointments automatically",
                                    "Handles order tracking & support",
                                    "Escalates complex cases to humans"
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 mb-8">
                                <h4 className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.2em] mb-3">India-Specific Intelligence</h4>
                                <p className="text-xs text-slate-500 leading-relaxed italic">"Speaks 10 Indian languages. Integrates UPI links. Knows when NOT to message during festivals."</p>
                            </div>

                            <div className="space-y-4 pt-10 border-t border-white/5">
                                <div className="flex justify-between items-center px-2">
                                    <span className="text-slate-500 text-sm">Estimated</span>
                                    <span className="text-white font-bold">₹19,999<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <Link href="#contact" className="px-8 py-4 rounded-full font-bold glass hover:bg-white/10 transition-all border border-white/10 w-full text-center block">Join Waitlist</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-32 bg-slate-900/40 relative border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 italic underline decoration-brand-orange underline-offset-8">Deploy in 5 <span className="not-italic">Minutes.</span></h2>
                        <p className="text-slate-400">Work autonomously forever.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { step: "01", icon: Laptop, title: "CONNECT", time: "2 min", desc: "Link ad accounts, analytics, CRM. One-click integrations." },
                            { step: "02", icon: Database, title: "TRAIN", time: "3 min", desc: "Agent learns your goals, CPA, voice, and industry constraints." },
                            { step: "03", icon: Zap, title: "DEPLOY", time: "Instant", desc: "Agent starts monitoring and optimizing immediately." },
                            { step: "04", icon: BarChart3, title: "MONITOR", time: "Live", desc: "Check activity anytime. Get daily reports and alerts." },
                            { step: "05", icon: Clock, title: "SCALE", time: "Ongoing", desc: "Add more agents as you grow. They work together. " }
                        ].map((item, i) => (
                            <div key={i} className="relative p-8 glass-dark rounded-[2rem] border border-white/5 group hover:border-brand-indigo/30 transition-all">
                                <div className="text-4xl font-black text-white/5 absolute top-4 right-6 group-hover:text-brand-indigo/10 transition-colors">{item.step}</div>
                                <item.icon className="w-10 h-10 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-[10px] font-black text-brand-indigo mb-4 uppercase tracking-[0.2em]">{item.time}</p>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPARISON TABLE */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black mb-16 text-center">Agent vs. <span className="text-brand-indigo">Agency</span></h2>

                        <div className="glass-dark rounded-[3rem] border border-white/10 overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="p-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Capability</th>
                                        <th className="p-8 text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800/20">Traditional Agency</th>
                                        <th className="p-8 text-[10px] font-black text-brand-orange uppercase tracking-widest underline decoration-brand-orange">Namma AI Agent</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[
                                        ["Availability", "10 AM - 7 PM, weekdays", "24/7/365, no holidays"],
                                        ["Response Time", "Hours to days", "15 minutes"],
                                        ["Optimization Frequency", "Weekly reviews", "Every 15 minutes"],
                                        ["Cost", "₹75,000-3,00,000/month", "₹29,999/month flat"],
                                        ["Scalability", "Hire more people", "Click to add accounts"],
                                        ["Learning", "Human learns slowly", "AI improves continuously"],
                                        ["Bias", "\"We've always done it this way\"", "Data-driven decisions only"]
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-8 font-bold text-slate-300">{row[0]}</td>
                                            <td className="p-8 text-slate-500 italic bg-slate-800/10">{row[1]}</td>
                                            <td className="p-8 font-bold text-white group">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* LIVE DASHBOARD SIMULATION */}
            <section className="py-32 bg-bg-deep overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black mb-6">See What Your Agent Did <span className="text-brand-indigo italic">Today</span></h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Our agents provide full transparency. Every action is logged, explained, and summarized into actionable metrics.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "ROAS Improvement", value: "+34%" },
                                    { label: "Cost Per Acquisition", value: "-28%" },
                                    { label: "Time Saved", value: "127 Hours" },
                                    { label: "Human Intervention", value: "None" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 glass-dark rounded-2xl border border-white/5">
                                        <div className="text-3xl font-bold text-brand-orange mb-1">{stat.value}</div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="glass-dark rounded-[2.5rem] border border-brand-indigo/30 p-8 shadow-[0_0_50px_rgba(99,102,241,0.1)] relative">
                                <div className="absolute -top-4 -right-4 p-4 rounded-2xl glass-dark border border-white/10 text-brand-gold animate-bounce">
                                    <Bot className="w-8 h-8" />
                                </div>
                                <h4 className="text-xs font-black text-white uppercase tracking-widest mb-8 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                                    Live Activity Log
                                </h4>

                                <div className="space-y-6 font-mono text-xs">
                                    <div className="flex gap-4">
                                        <span className="text-slate-600">14:34</span>
                                        <span className="text-slate-300">ADS AGENT: Paused <span className="text-brand-orange">"Mumbai Sales"</span> campaign (CTR dropped &lt; 0.5%)</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-slate-600">14:15</span>
                                        <span className="text-slate-300">ADS AGENT: Reallocated <span className="text-green-500">₹12,500</span> budget to winning Meta creative</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-slate-600">13:45</span>
                                        <span className="text-slate-300">ADS AGENT: Generated daily performance report for <span className="text-brand-indigo">Q1 Growth Bundle</span></span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-slate-600">13:12</span>
                                        <span className="text-slate-300">ADS AGENT: Added <span className="text-brand-gold">23 new negative keywords</span> from search term report</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-slate-600">12:58</span>
                                        <span className="text-slate-300">ADS AGENT: 15-min optimization cycle complete. <span className="text-green-500">No human intervention needed.</span></span>
                                    </div>
                                </div>

                                <div className="mt-10 pt-10 border-t border-white/5 grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Budget Saved Today</div>
                                        <div className="text-2xl font-black text-white">₹43,200</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Decisions Made</div>
                                        <div className="text-2xl font-black text-white">1,247</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="py-32 bg-slate-900/20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black mb-20 text-center">Agent vs. <span className="text-brand-orange italic underline decoration-white underline-offset-8">Human</span> Results</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                client: "D2C Fashion Brand, Mumbai",
                                challenge: "Ad costs spike at midnight",
                                human: "Agency asleep, wasted ₹1,20,000 in 6 hours.",
                                agent: "Detected spike at 12:03 AM. Paused at 12:08 AM. Total waste: ₹4,200.",
                                result: "Saved ₹1,15,800 in one night.",
                                icon: ShoppingCart
                            },
                            {
                                client: "Electronics Brand, Bangalore",
                                challenge: "Diwali traffic patterns unpredictable",
                                human: "Daily checks missed 3 AM surge on Dhanteras.",
                                agent: "Detected 3 AM surge. Auto-increased budgets by 40%. Scaled back at 6 AM.",
                                result: "₹8.5L additional revenue, 23% lower CAC.",
                                icon: Zap
                            },
                            {
                                client: "SaaS Company, Hyderabad",
                                challenge: "Ad fatigue after 2 weeks",
                                human: "Same creatives ran 3 weeks (CTR 0.8%). New ones in 5 days.",
                                agent: "Detected CTR drop day 14. Generated 12 new variants. CTR back to 2.4% in 48h.",
                                result: "Continuous performance with zero effort.",
                                icon: Laptop
                            }
                        ].map((item, i) => (
                            <div key={i} className="glass-dark rounded-[3rem] p-10 border border-white/5 flex flex-col h-full hover:border-brand-indigo/30 transition-all">
                                <item.icon className="w-12 h-12 text-brand-orange mb-8" />
                                <h3 className="text-2xl font-black mb-2">{item.client}</h3>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8">{item.challenge}</p>

                                <div className="space-y-6 mb-10 flex-grow">
                                    <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                                        <div className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Human Agency</div>
                                        <p className="text-slate-400 text-xs italic">{item.human}</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-green-500/5 border border-green-500/10">
                                        <div className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-1">Our AI Agent</div>
                                        <p className="text-slate-200 text-xs font-medium">{item.agent}</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/30 text-center">
                                    <div className="text-white font-bold">{item.result}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="py-40 bg-bg-deep" id="pricing">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black mb-6">Hire Your <span className="text-brand-indigo italic">Agent</span></h2>
                        <p className="text-slate-500">No long-term contracts. First month free.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Free */}
                        <div className="glass-dark rounded-[3rem] p-12 border border-white/5 flex flex-col relative overflow-hidden group">
                            <h3 className="text-2xl font-black mb-2">ADS AGENT - FREE</h3>
                            <div className="text-4xl font-black text-white mb-8">₹0<span className="text-sm font-normal text-slate-500 ml-1">/month</span></div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {[
                                    "Connect 1 ad account",
                                    "View insights & recommendations",
                                    "Manual implementation",
                                    "Email support",
                                    "Performance reports",
                                    "Safety audit log"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-slate-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="#contact" className="px-8 py-4 rounded-full font-bold glass bg-white/5 hover:bg-white/10 transition-all border border-white/10 text-center group-hover:bg-white/20">Start Free</Link>
                        </div>

                        {/* Autonomous */}
                        <div className="glass-dark rounded-[3rem] p-12 border-2 border-brand-indigo relative shadow-[0_0_80px_rgba(99,102,241,0.1)] flex flex-col">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-indigo rounded-b-2xl text-[10px] font-black uppercase tracking-widest text-white">Most Popular</div>
                            <h3 className="text-2xl font-black mb-2">ADS AGENT - AUTONOMOUS</h3>
                            <div className="text-4xl font-black text-white mb-8">₹29,999<span className="text-sm font-normal text-slate-500 ml-1">/month</span></div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {[
                                    "Up to ₹10L monthly spend",
                                    "Full autonomous management",
                                    "15-min optimization cycles",
                                    "WhatsApp alerts & daily reports",
                                    "Approval mode available",
                                    "1 primary user seat"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="#contact" className="btn-premium w-full text-center">Deploy Agent Now</Link>
                        </div>

                        {/* Scale */}
                        <div className="glass-dark rounded-[3rem] p-12 border border-white/5 flex flex-col group">
                            <h3 className="text-2xl font-black mb-2">ADS AGENT - SCALE</h3>
                            <div className="text-4xl font-black text-white mb-8">₹79,999<span className="text-sm font-normal text-slate-500 ml-1">/month</span></div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {[
                                    "Up to ₹50L monthly spend",
                                    "AI creative generation (20/mo)",
                                    "Multi-account management",
                                    "Advanced attribution models",
                                    "Priority human support",
                                    "5 user seats + API access"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-brand-indigo" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="#contact" className="px-8 py-4 rounded-full font-bold glass bg-white/5 hover:bg-white/10 transition-all border border-white/10 text-center group-hover:bg-white/20">Talk to Sales</Link>
                        </div>

                        {/* Open Claw Build */}
                        <div className="md:col-span-3 mt-12 glass-dark rounded-[3rem] p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-bg-deep to-brand-orange/5">
                            <div className="max-w-xl text-left">
                                <div className="px-4 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-[10px] font-black uppercase tracking-widest self-start mb-4 inline-block">Custom Implementations</div>
                                <h3 className="text-3xl font-black mb-4">OPEN CLAW BUILDS</h3>
                                <p className="text-slate-400 text-sm italic">Custom AI agents for any repetitive business workflow. Finance, HR, Operations, or Sales—if it repeats, we build an agent for it.</p>
                            </div>
                            <div className="text-center md:text-right">
                                <Link href="/solutions/open-claw-builds" className="btn-premium inline-block">Build Custom Agent</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECURITY & CONTROL */}
            <section className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black mb-8">You're Always in <span className="text-brand-orange uppercase-none italic">Control</span></h2>
                            <p className="text-slate-400 text-lg mb-12">Agents work for you, not around you. We've built industry-leading guardrails to ensure your brand and budget are safe.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Approval Mode", desc: "Agent suggests, you approve every change via WhatsApp.", icon: CheckCircle2 },
                                    { title: "Hard Budget Caps", desc: "Hard limits agent can NEVER exceed, no matter what.", icon: Shield },
                                    { title: "Instant Kill Switch", desc: "Pause agent instantly via one WhatsApp command.", icon: AlertCircle },
                                    { title: "Full Audit Log", desc: "Every action logged, timestamped, and explained.", icon: Laptop }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-indigo flex-shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="glass-dark p-10 rounded-[3rem] border border-white/5">
                                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                    <Shield className="text-green-500 w-8 h-8" />
                                    Security & Data
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "SOC 2 Type II certified infrastructure",
                                        "Data stored in India (AWS Mumbai region)",
                                        "GDPR and DPDP Act 2023 compliant",
                                        "We NEVER train models on your specific data for other clients"
                                    ].map(item => (
                                        <li key={item} className="flex items-center gap-4 text-slate-300">
                                            <div className="w-2 h-2 rounded-full bg-brand-orange" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-black mb-16 text-center">Frequently Asked <span className="text-brand-indigo">Questions</span></h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Is this just an AI tool I have to use?",
                                a: "No. This is an autonomous agent. You set goals and constraints, it executes. You monitor, not manage."
                            },
                            {
                                q: "What if the agent makes a mistake?",
                                a: "Agents have safety guardrails. Major decisions (budget increases >20%, new campaign launches) can require approval. You can rollback any change instantly."
                            },
                            {
                                q: "How is this different from Smart Bidding in Google Ads?",
                                a: "Smart Bidding optimizes bids. Our agent optimizes everything: bids, budgets, audiences, creatives, scheduling, landing pages—and coordinates across Google AND Meta."
                            },
                            {
                                q: "Will this replace my marketing team?",
                                a: "It replaces repetitive execution work. Your team focuses on strategy, creative direction, and big decisions. Most clients redeploy team members to higher-value work."
                            },
                            {
                                q: "How quickly can I see results?",
                                a: "Most clients see improvement within 48-72 hours. Full optimization takes 2 weeks as the agent learns your specific audience patterns."
                            }
                        ].map((item, i) => (
                            <div key={i} className="glass-dark p-8 rounded-3xl border border-white/5">
                                <h4 className="text-lg font-bold text-white mb-4">{item.q}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section id="contact" className="py-40 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto glass-dark p-12 md:p-24 rounded-[4rem] border border-brand-indigo/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/10 blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 blur-[120px]" />

                        <div className="flex flex-col lg:flex-row gap-20 relative z-10">
                            <div className="lg:w-1/2">
                                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                                    Stop Paying Agencies to <span className="text-brand-orange italic underline">Sleep.</span>
                                </h2>
                                <p className="text-slate-400 text-xl mb-12">
                                    Join 50+ Indian companies already using Namma Growth agents. First month free. No credit card required.
                                </p>

                                <div className="space-y-4 mb-12">
                                    {[
                                        "Setup in 5 minutes",
                                        "See results in 48 hours",
                                        "No long-term contracts",
                                        "24/7 Human-in-the-loop support"
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-3 text-white font-bold">
                                            <CheckCircle2 className="text-brand-indigo w-6 h-6" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 italic text-slate-400 text-sm">
                                    "Namma Growth is building the autonomous workforce for Indian businesses. Agents first. More coming."
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
