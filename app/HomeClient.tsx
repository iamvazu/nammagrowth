'use client'

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, TrendingUp, Search, Code, Smartphone, Zap, Clock, Shield, CheckCircle2, ArrowRight, Laptop, MessageSquare, BarChart3, AlertCircle } from "lucide-react";

export default function HomeClient() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Namma Growth",
        "url": "https://nammagrowth.in",
        "logo": "https://nammagrowth.in/logo.png",
        "description": "Deploy AI agents that run your marketing 24/7. Ads Agent manages Google & Meta autonomously. SEO Agent creates content. Chat Agent handles sales. India-trained."
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="min-h-screen bg-bg-deep">
            <JsonLd data={organizationSchema} />
            <Navbar />

            {/* NEW HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] animate-pulse" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-dark mb-8 border border-white/10"
                    >
                        <span className="text-sm font-medium text-slate-300">
                            🤖 47 agents active now | ₹2.3Cr optimized today | 4.9/5 from 50+ companies
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
                    >
                        Your Marketing Runs Itself <br />
                        <span className="text-brand-orange italic">While You Sleep</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Namma Growth deploys autonomous AI agents that manage your ads, SEO, and customer conversations—24/7, without salaries, without mistakes. Built for Indian businesses, trained on ₹50Cr+ local ad spend.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link href="/ai-agents" className="btn-premium group">
                            Meet the Agents
                            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="px-8 py-4 rounded-full font-bold glass hover:bg-white/20 transition-all border border-white/10">
                            See Live Demo
                        </button>
                    </motion.div>

                    {/* Animated Activity Live Feed */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-24 max-w-2xl mx-auto glass-dark p-6 rounded-3xl border border-white/5 text-left font-mono text-xs overflow-hidden h-32 relative"
                    >
                        <div className="absolute top-3 left-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Activity Dashboard</span>
                        </div>
                        <div className="pt-8 space-y-2">
                            <motion.div
                                animate={{ y: [0, -40, -80, -120] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="space-y-4"
                            >
                                <p className="text-brand-orange">2:34 PM | Ads Agent | Paused underperforming campaign for Mumbai Fashion (saved ₹12,000)</p>
                                <p className="text-brand-indigo">2:31 PM | Ads Agent | Increased budget 40% for Bangalore Electronics (detected surge)</p>
                                <p className="text-brand-gold">2:28 PM | SEO Agent | Published "Best SEO Agency in Hyderabad" (auto-generated)</p>
                                <p className="text-green-500">2:25 PM | Chat Agent | Qualified lead for SaaS company (score: 87/100)</p>
                                <p className="text-brand-orange">2:34 PM | Ads Agent | Paused underperforming campaign for Mumbai Fashion (saved ₹12,000)</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* OLD WAY vs AGENT WAY */}
            <section className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Agencies Use AI Tools. <span className="text-brand-indigo">We Built AI Agents.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div {...fadeIn} className="p-10 glass-dark rounded-[3rem] border border-red-500/10 grayscale opacity-60">
                            <h4 className="text-2xl font-black mb-8 text-red-400">Old Way (Agencies)</h4>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 text-slate-500">❌ Humans using AI tools slowly</li>
                                <li className="flex items-center gap-4 text-slate-500">❌ 10 AM - 7 PM availability</li>
                                <li className="flex items-center gap-4 text-slate-500">❌ Weekly optimization cycles</li>
                                <li className="flex items-center gap-4 text-slate-500">❌ ₹75,000-3,00,000/month retainers</li>
                                <li className="flex items-center gap-4 text-slate-500">❌ "We'll get back to you tomorrow"</li>
                            </ul>
                        </motion.div>

                        <motion.div {...fadeIn} className="p-10 glass-dark rounded-[3rem] border border-brand-indigo/30 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                            <h4 className="text-2xl font-black mb-8 text-brand-indigo font-serif">Agent Way (Namma Growth)</h4>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 text-white font-bold">✅ Fully autonomous execution</li>
                                <li className="flex items-center gap-4 text-white font-bold">✅ 24/7/365 availability</li>
                                <li className="flex items-center gap-4 text-white font-bold">✅ Optimization every 15 minutes</li>
                                <li className="flex items-center gap-4 text-white font-bold">✅ ₹29,999/month flat pricing</li>
                                <li className="flex items-center gap-4 text-white font-bold">✅ "Already done. Check your dashboard."</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MEET THE AGENTS */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Choose Your Agent. <span className="text-brand-orange italic">Deploy in 5 Min.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "ADS AGENT",
                                status: "Available Now",
                                statusColor: "text-green-500 bg-green-500/10 border-green-500/20",
                                desc: "Manages Google Ads & Meta autonomously. Optimizes bids, budgets, audiences every 15 minutes.",
                                price: "From ₹29,999/month",
                                icon: Bot,
                                href: "/ai-agents",
                                cta: "Deploy"
                            },
                            {
                                name: "SEO AGENT",
                                status: "Beta - Join Waitlist",
                                statusColor: "text-brand-gold bg-brand-gold/10 border-brand-gold/20",
                                desc: "Generates 100s of SEO pages automatically. Writes, publishes, ranks content. PSEO at scale.",
                                price: "Coming Soon",
                                icon: Search,
                                href: "/ai-agents",
                                cta: "Join Waitlist"
                            },
                            {
                                name: "CHAT AGENT",
                                status: "Beta - Join Waitlist",
                                statusColor: "text-brand-gold bg-brand-gold/10 border-brand-gold/20",
                                desc: "Handles WhatsApp, Instagram, web chat 24/7. Qualifies leads, books meetings, closes sales.",
                                price: "Coming Soon",
                                icon: MessageSquare,
                                href: "/ai-agents",
                                cta: "Join Waitlist"
                            }
                        ].map((agent, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                whileHover={{ y: -10 }}
                                className="glass-dark p-10 rounded-[3rem] border border-white/5 flex flex-col h-full group"
                            >
                                <div className={`self-start px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border mb-8 ${agent.statusColor}`}>
                                    {agent.status}
                                </div>
                                <agent.icon className="w-16 h-16 text-brand-orange mb-8 group-hover:scale-110 transition-transform" />
                                <h3 className="text-3xl font-black mb-6">{agent.name}</h3>
                                <p className="text-slate-400 mb-10 leading-relaxed">{agent.desc}</p>
                                <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                                    <span className="text-xs font-bold text-slate-500">{agent.price}</span>
                                    <Link href={agent.href} className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] hover:text-brand-orange transition-colors">
                                        {agent.cta} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-32 bg-slate-900/40">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Connect (2 min)", desc: "Link your accounts. Google Ads, Meta, Shopify, CRM. One-click setup." },
                            { step: "02", title: "Configure (3 min)", desc: "Set goals, budgets, constraints. Agent learns your business." },
                            { step: "03", title: "Deploy", desc: "Agent goes live. Starts monitoring and optimizing immediately." },
                            { step: "04", title: "Monitor", desc: "Dashboard shows real-time activity. Daily reports. Alerts for major decisions." }
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeIn} className="relative p-8 glass-dark rounded-3xl border border-white/5">
                                <div className="text-6xl font-black text-white/5 absolute top-4 right-6">{item.step}</div>
                                <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PERFORMANCE METRICS */}
            <section className="py-32 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black mb-8">Real Results <br />from <span className="text-brand-indigo">Real Agents</span></h2>
                            <p className="text-slate-400 text-lg mb-12">Average performance improvements across our fleet of AI agents.</p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                            {[
                                { label: "ROAS", val: "+34% average" },
                                { label: "CPA", val: "-28% average" },
                                { label: "Budget Waste", val: "-67%" },
                                { label: "Response Time", val: "8 Minutes" }
                            ].map((m, i) => (
                                <div key={i} className="p-8 glass-dark rounded-3xl border border-white/5 text-center">
                                    <div className="text-2xl font-black text-brand-orange mb-2">{m.val}</div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="py-32 bg-bg-deep overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-4xl md:text-6xl font-black underline decoration-brand-orange decoration-8 underline-offset-12">Case Studies</h2>
                        <Link href="/case-studies" className="text-sm font-bold text-white hover:text-brand-orange underline">View All →</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Midnight Crisis",
                                desc: "D2C brand's ad costs spiked 400% at 2 AM. Human agency asleep. Namma Growth Agent paused campaigns in 5 minutes. Saved ₹1,15,800."
                            },
                            {
                                title: "Festival Surge",
                                desc: "Electronics company missed 3 AM Diwali traffic for 3 years. Namma Growth Agent detected surge, scaled budgets, captured ₹8,50,000 revenue."
                            },
                            {
                                title: "Creative Fatigue",
                                desc: "SaaS CTR dropped from 2.1% to 0.8%. Human agency took 5 days to respond. Namma Growth Agent generated new creatives in 2 hours. CTR back to 2.4%."
                            }
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeIn} className="p-10 glass-dark rounded-[3rem] border border-white/5 h-full flex flex-col">
                                <h4 className="text-2xl font-black mb-6 text-brand-gold italic">Case {i + 1}: {item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow">{item.desc}</p>
                                <Link href="/case-studies" className="text-[10px] font-black uppercase tracking-widest text-white hover:text-brand-orange">Read Full Story →</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECURITY */}
            <section className="py-32 bg-slate-900/40 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto glass-dark p-12 md:p-20 rounded-[4rem] border border-brand-indigo/20">
                        <h2 className="text-4xl font-black mb-12 text-center">You're the Boss. <span className="text-brand-indigo italic">Always.</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { title: "Approval Mode", desc: "Agent suggests, you approve." },
                                { title: "Budget Caps", desc: "Hard limits that cannot be exceeded." },
                                { title: "Kill Switch", desc: "Pause instantly via WhatsApp." },
                                { title: "Full Audit", desc: "Every action logged and explained." }
                            ].map((it, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{it.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">{it.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING PREVIEW */}
            <section className="py-40">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-12">Hire an Agent for Less Than a <br /><span className="text-brand-orange italic">Junior Employee</span></h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { plan: "Free", price: "₹0/month", feature: "Insights only" },
                            { plan: "Autonomous", price: "₹29,999/month", feature: "Full automation" },
                            { plan: "Scale", price: "₹79,999/month", feature: "+Creative generation" }
                        ].map((p, i) => (
                            <div key={i} className="p-8 glass-dark rounded-[2.5rem] border border-white/5 w-64">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{p.plan}</div>
                                <div className="text-2xl font-black text-white mb-2">{p.price}</div>
                                <div className="text-xs text-slate-500 italic mb-8">{p.feature}</div>
                                <Link href="/ai-agents" className="text-[10px] font-black uppercase text-brand-indigo hover:text-brand-orange underline">See Full Pricing</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section id="contact" className="py-40 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto glass-dark p-12 md:p-20 rounded-[4rem] border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/10 blur-[100px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[100px] rounded-full" />

                        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                            <div className="lg:w-1/2">
                                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                                    Your Competitors Are Already Using <span className="text-brand-indigo italic">Agents.</span> Are You?
                                </h2>
                                <p className="text-slate-400 text-xl leading-relaxed mb-12">
                                    Join 50+ Indian companies running autonomous marketing with Namma Growth. First month free. No credit card required.
                                </p>

                                <div className="space-y-4 mb-12">
                                    <div className="flex items-center gap-3 text-slate-300 font-bold uppercase-none">
                                        <CheckCircle2 className="text-brand-indigo w-5 h-5" />
                                        <span>Setup in 5 minutes</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300 font-bold uppercase-none">
                                        <CheckCircle2 className="text-brand-indigo w-5 h-5" />
                                        <span>Cancel anytime</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300 font-bold uppercase-none">
                                        <CheckCircle2 className="text-brand-indigo w-5 h-5" />
                                        <span>Human support 24/7</span>
                                    </div>
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
    );
}
