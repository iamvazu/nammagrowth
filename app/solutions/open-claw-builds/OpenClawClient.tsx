'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Shield, CheckCircle2, ArrowRight, Wallet, Users, BarChart3, Rocket, Code, Database, Lock, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import LeadForm from '@/components/LeadForm'

export default function OpenClawClient() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Open Claw Custom AI Agent Builds",
        "description": "Custom autonomous AI agents built for specific business workflows including Finance, HR, Sales, and Operations.",
        "provider": {
            "@type": "Organization",
            "name": "Namma Growth"
        }
    };

    const categories = [
        {
            title: "Finance & Accounting",
            icon: Wallet,
            agents: [
                { name: "Invoice Processing Agent", desc: "Reads invoices, extracts line items, validates against PO, enters into accounting.", result: "90% reduction in processing time" },
                { name: "Expense Reconciliation Agent", desc: "Collects receipts, categorizes, checks policy, flags out-of-policy spend.", result: "40 hours/month saved" },
                { name: "Financial Reporting Agent", desc: "Pulls data from ERP/Banks, generates P&L/Balance Sheets, creates presentations.", result: "3-day close reduced to 4 hours" }
            ]
        },
        {
            title: "Human Resources",
            icon: Users,
            agents: [
                { name: "Candidate Screening Agent", desc: "Parses resumes, matches requirements, scores candidates, schedules interviews.", result: "60% reduction in screening time" },
                { name: "Onboarding Agent", desc: "Generates offers, creates accounts, schedules orientation, tracks completion.", result: "3 days → 4 hours setup" },
                { name: "Exit Processing Agent", desc: "Initiates exits, calculates settlements, revokes access, conducts interviews.", result: "Zero compliance errors" }
            ]
        },
        {
            title: "Sales & Marketing",
            icon: Rocket,
            agents: [
                { name: "Lead Research Agent", desc: "Identifies accounts, scrapes LinkedIn, enriches contact data, scores intent.", result: "300 qualified leads/week" },
                { name: "Proposal Gen Agent", desc: "Reads RFPs, pulls case studies, generates custom proposals & pricing.", result: "8 hours → 45 minutes" },
                { name: "Competitive Intel Agent", desc: "Monitors competitor sites/pricing/ads daily, generates weekly reports.", result: "First-mover advantage" }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-bg-deep uppercase-none">
            <JsonLd data={pageSchema} />
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-indigo/10 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark mb-8 border border-white/10"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                            <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                                Custom Autonomous Workforce
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-[8rem] font-black mb-8 leading-[0.9] tracking-tighter"
                        >
                            Every Task. <br />One <span className="text-brand-orange italic">Agent.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl italic"
                        >
                            Open Claw builds custom AI agents for any workflow in your business. Invoice processing. Candidate screening. Competitive monitoring. If a human does it more than twice, we build an agent for it.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="#contact" className="btn-premium flex items-center gap-2">
                                Build Your First Agent <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="#examples" className="px-8 py-4 rounded-full font-bold glass hover:bg-white/10 transition-all border border-white/10">
                                See Agent Examples
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE PHILOSOPHY */}
            <section className="py-32 bg-slate-900/40 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-black mb-8">Don't Hire More People. <br /><span className="text-brand-indigo italic">Deploy More Agents.</span></h2>
                            <blockquote className="p-8 rounded-3xl bg-brand-indigo/10 border border-brand-indigo/30 mb-8">
                                <p className="text-xl text-white font-bold italic leading-relaxed">
                                    "If a skilled employee spends more than 2 hours per week on a repetitive, rules-based task, build an agent for it."
                                </p>
                            </blockquote>
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">What Qualifies for an Agent:</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Repetitive Logic", "Rules-Based", "Digital Inputs", "High Volume", "Time-Consuming"].map(t => (
                                        <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
                                            <CheckCircle2 className="text-green-500 w-4 h-4" />
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="glass-dark p-8 rounded-[3rem] border border-white/10 relative overflow-hidden">
                                <div className="flex justify-between items-center mb-12">
                                    <div className="text-xs font-black uppercase tracking-widest text-slate-500">Manual Workflow</div>
                                    <ArrowRight className="text-brand-orange" />
                                    <div className="text-xs font-black uppercase tracking-widest text-brand-orange">Open Claw Agent</div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <div className="text-slate-400">Manual Data Entry</div>
                                        <div className="text-right">
                                            <div className="text-xl font-black text-white">4 Hours / Day</div>
                                            <div className="text-[8px] text-slate-600 uppercase">Human Speed</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-brand-indigo/30 pb-4">
                                        <div className="text-brand-indigo font-bold">Autonomous Processing</div>
                                        <div className="text-right">
                                            <div className="text-xl font-black text-brand-indigo underline underline-offset-4">4 Minutes / Day</div>
                                            <div className="text-[8px] text-brand-indigo/50 uppercase">Agent Speed</div>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-500 italic text-center pt-4">24/7 execution, zero errors, zero burnout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AGENTS WE'VE BUILT */}
            <section id="examples" className="py-32">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-20 text-center">Agents We've <span className="text-brand-orange italic">Built</span></h2>
                    <div className="space-y-24">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="relative">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-brand-indigo">
                                        <cat.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter">{cat.title}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {cat.agents.map((agent, aidx) => (
                                        <div key={aidx} className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex flex-col hover:border-brand-indigo/30 transition-all h-full">
                                            <h4 className="text-xl font-bold mb-4">{agent.name}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed mb-8 flex-grow">{agent.desc}</p>
                                            <div className="p-4 rounded-2xl bg-brand-indigo/5 border border-brand-indigo/20 text-center">
                                                <div className="text-[10px] font-black text-brand-indigo uppercase tracking-widest mb-1">Impact</div>
                                                <div className="text-sm font-bold text-white">{agent.result}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-32 bg-slate-900/20 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">How <span className="text-brand-indigo">Open Claw</span> Works</h2>
                        <p className="text-slate-500">From discovery to 24/7 autonomous execution in 7 weeks.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { step: "01", title: "Discovery", week: "Week 1", desc: "Shadowing your team, documenting workflows, identifying ROI." },
                            { step: "02", title: "Design", week: "Week 2", desc: "Mapping decision trees, data flows, and technical architecture." },
                            { step: "03", title: "Build", week: "Weeks 3-6", desc: "Developing agent using Open Claw framework with safety guardrails." },
                            { step: "04", title: "Deploy", week: "Week 7", desc: "Migration to production with monitoring of first 100 executions." },
                            { step: "05", title: "Optimize", week: "Ongoing", desc: "Retraining on new data, adding features, scaling capabilities." }
                        ].map((s, i) => (
                            <div key={i} className="p-8 glass-dark rounded-[2.5rem] border border-white/5 relative group hover:border-brand-indigo/30 transition-all text-left">
                                <div className="text-4xl font-black text-white/5 absolute top-4 right-6 group-hover:text-brand-indigo/20 transition-colors">{s.step}</div>
                                <h4 className="text-lg font-black mb-2">{s.title}</h4>
                                <div className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-4 italic">{s.week}</div>
                                <p className="text-[10px] text-slate-500 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING MODELS */}
            <section id="pricing" className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-4">Investment <span className="text-brand-indigo italic">Models</span></h2>
                        <p className="text-slate-500">Pick the path that fits your automation scale.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            { title: "Per Agent Build", price: "₹2,00,000", recurring: "+ ₹40,000/mo", features: ["Single high-impact workflow", "4-6 week build time", "3 mo optimization", "Email support"] },
                            { title: "Agent Fleet", price: "₹8,00,000", recurring: "+ ₹1,20,000/mo", features: ["3-5 interconnected agents", "8-week build time", "Shared intelligence layer", "Priority support"] },
                            { title: "Agent-as-a-Service", price: "No Upfront", recurring: "₹75,000/mo", features: ["Pre-built templates", "All maintenance included", "Continuous improvement", "Monthly reports"] },
                            { title: "Enterprise Platform", price: "Custom", recurring: "Annual Scaling", features: ["Unlimited custom agents", "On-premise deployment", "Dedicated team", "Enterprise SLA"] }
                        ].map((plan, i) => (
                            <div key={i} className={`glass-dark p-8 rounded-[3rem] border flex flex-col h-full ${i === 1 ? 'border-brand-indigo shadow-[0_0_50px_rgba(99,102,241,0.1)]' : 'border-white/5'}`}>
                                <h4 className="text-lg font-black mb-4 uppercase tracking-tighter">{plan.title}</h4>
                                <div className="text-3xl font-black text-white mb-1">{plan.price}</div>
                                <div className="text-xs text-slate-500 mb-8">{plan.recurring}</div>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                                            <CheckCircle2 className={`w-4 h-4 ${i === 1 ? 'text-brand-indigo' : 'text-slate-600'}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="#contact" className={`py-4 rounded-full font-bold text-center transition-all ${i === 1 ? 'btn-premium' : 'glass border border-white/10 hover:bg-white/5'}`}>Get Started</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECURITY */}
            <section className="py-32 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-24 opacity-5">
                    <Shield className="w-96 h-96 text-brand-orange" />
                </div>
                <div className="container mx-auto px-6 text-left">
                    <div className="max-w-4xl">
                        <h2 className="text-4xl font-black mb-12">Security & Human <span className="text-brand-orange italic">Control</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-indigo flex-shrink-0">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">Your Data is Yours</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Agents trained on your data only. No sharing between clients. Option for on-premise deployment.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                                        <AlertCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">Human Oversight</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Approval gates for high-stakes decisions. Kill switch to pause agent instantly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-dark p-8 rounded-[3rem] border border-white/5">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Compliance Guarantee</h4>
                                <ul className="space-y-4">
                                    {["SOC 2 Type II Infrastructure", "GDPR & DPDP (India) Compliant", "End-to-End Encryption", "Full Audit Trails"].map(t => (
                                        <li key={t} className="flex items-center gap-3 text-sm font-bold text-white">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-32 relative">
                <div className="container mx-auto px-6 text-left">
                    <div className="max-w-6xl mx-auto glass-dark p-12 md:p-24 rounded-[4rem] border border-brand-indigo/30 relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/2">
                                <h2 className="text-5xl font-black mb-8 leading-tight">Stop Doing Work That <span className="text-brand-orange italic underline">Agents</span> Should Do.</h2>
                                <p className="text-slate-400 text-xl mb-12">Tell us about your most painful repetitive workflow. We'll tell you if an agent can fix it—free consultation.</p>
                                <div className="p-8 rounded-[2rem] bg-brand-indigo/10 border border-brand-indigo/30">
                                    <div className="text-white font-bold mb-2 uppercase tracking-tighter">The Open Claw Guarantee</div>
                                    <p className="text-slate-400 text-sm italic leading-relaxed">"If your agent doesn't save you time within 30 days, we'll refund 100% of your build cost."</p>
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
