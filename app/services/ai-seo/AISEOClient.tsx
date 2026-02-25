'use client'

import { motion } from 'framer-motion'
import { Bot, Search, Zap, Globe, MessageSquare, CheckCircle2, ArrowRight, PlayCircle, BarChart3, Target, Layers, Cpu } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import LeadForm from '@/components/LeadForm'

export default function AISEOClient() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI SEO Agent (PSEO + AEO + GEO)",
        "description": "Autonomous SEO strategy combining Programmatic SEO, Answer Engine Optimization, and Generative Engine Optimization.",
        "provider": {
            "@type": "Organization",
            "name": "Namma Growth"
        }
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="min-h-screen bg-bg-deep uppercase-none">
            <JsonLd data={pageSchema} />
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-32 overflow-hidden">
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
                                <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                                    Next-Gen Search Dominance
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]"
                            >
                                The Only <span className="text-brand-indigo italic">SEO Strategy</span> You Need in the AI Era
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl"
                            >
                                PSEO + AEO + GEO = Total Search Dominance. Our SEO Agent generates 500+ ranking pages monthly, optimizes for ChatGPT answers, and captures Position 0—autonomously.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link href="#contact" className="btn-premium flex items-center gap-2">
                                    Deploy SEO Agent <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button className="px-8 py-4 rounded-full font-bold glass hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5 text-brand-orange" />
                                    See Live Demo
                                </button>
                            </motion.div>

                            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-white">2.4M</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pages Generated</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-white">847K</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pos 0 Captures</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-white">94%</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Retention</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <motion.div
                                initial={{ opacity: 0, rotateY: 20 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                transition={{ duration: 1 }}
                                className="relative perspective-1000"
                            >
                                <div className="glass-dark p-12 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8">
                                        <Layers className="w-32 h-32 text-brand-indigo/5 group-hover:text-brand-indigo/10 transition-colors" />
                                    </div>

                                    <div className="space-y-12">
                                        <div className="relative z-10">
                                            <div className="text-brand-orange font-black text-xs uppercase tracking-widest mb-4">Pillar 03</div>
                                            <h3 className="text-3xl font-black mb-2">GEO</h3>
                                            <p className="text-slate-500 text-sm">Generative Engine Optimization (AI Citations)</p>
                                        </div>
                                        <div className="relative z-10 border-l-2 border-brand-indigo/30 pl-8 ml-4">
                                            <div className="text-brand-indigo font-black text-xs uppercase tracking-widest mb-4">Pillar 02</div>
                                            <h3 className="text-3xl font-black mb-2">AEO</h3>
                                            <p className="text-slate-500 text-sm">Answer Engine Optimization (Position 0)</p>
                                        </div>
                                        <div className="relative z-10 border-l-2 border-brand-indigo pl-8 -ml-4">
                                            <div className="text-white font-black text-xs uppercase tracking-widest mb-4">Pillar 01</div>
                                            <h3 className="text-4xl font-black mb-2">PSEO</h3>
                                            <p className="text-slate-400 text-sm italic">Programmatic SEO (Scale & Traffic)</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE PILLARS SECTION */}
            <section className="py-32 bg-slate-900/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 gap-32">

                        {/* PILLAR 1: PSEO */}
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-8 border border-brand-indigo/20">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6">PILLAR 1: PSEO <br /><span className="text-slate-500">(Programmatic SEO)</span></h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Programmatic SEO uses AI to generate hundreds or thousands of SEO-optimized landing pages automatically—each targeting specific keywords, locations, or use cases.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                    {[
                                        "500+ unique pages per month",
                                        "Location × Service matrices",
                                        "Automated internal linking",
                                        "Continuous content updates",
                                        "Template A/B testing",
                                        "Tier 2/3 city targeting"
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-3 text-sm text-white font-bold">
                                            <CheckCircle2 className="text-brand-indigo w-4 h-4 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 rounded-2xl bg-brand-indigo/5 border border-brand-indigo/10">
                                    <h4 className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.2em] mb-3">India-Specific Intelligence</h4>
                                    <p className="text-xs text-slate-500 italic">"City + service combinations for 500+ Indian locations with vernacular page variants (Hindi, Tamil, Kannada, etc.)"</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="glass-dark p-8 rounded-[3rem] border border-white/5 font-mono text-xs">
                                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        <span className="ml-4 text-slate-500">Auto-Generated Location Matrix</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-brand-indigo">/services/seo/in/mumbai/</div>
                                        <div className="text-brand-indigo">/services/seo/in/delhi/</div>
                                        <div className="text-brand-indigo">/services/seo/in/bangalore/</div>
                                        <div className="text-brand-indigo">/services/seo/in/hyderabad/</div>
                                        <div className="text-slate-600">... (542 more pages generated)</div>
                                    </div>
                                    <div className="mt-8 p-4 rounded-xl bg-green-500/5 border border-green-500/10 text-green-500 flex justify-between">
                                        <span>Cost Per Page</span>
                                        <span className="font-bold">₹199 / page</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PILLAR 2: AEO */}
                        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8 border border-brand-orange/20">
                                    <MessageSquare className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6">PILLAR 2: AEO <br /><span className="text-slate-500">(Answer Engine Optimization)</span></h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    AEO optimizes your content to appear in answer boxes, featured snippets, and voice search results—Position 0 on Google.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                    {[
                                        "Snippet structure optimization",
                                        "PAA (People Also Ask) targets",
                                        "Voice search ready formatting",
                                        "FAQ schema automation",
                                        "Hinglish voice optimization",
                                        "Direct answer generation"
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-3 text-sm text-white font-bold">
                                            <CheckCircle2 className="text-brand-orange w-4 h-4 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 rounded-2xl bg-brand-orange/5 border border-brand-orange/10">
                                    <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.2em] mb-3">India-Specific Intelligence</h4>
                                    <p className="text-xs text-slate-500 italic">"Regional question patterns like 'Bangalore mein best SEO kaun karta hai' optimized for Bharat users."</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="glass-dark p-10 rounded-[3rem] border border-white/10 relative">
                                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 mb-6">
                                        <div className="text-[10px] text-slate-500 mb-2 italic">User asks: "Best SEO agency in India?"</div>
                                        <div className="p-4 bg-white/5 rounded-xl border-l-4 border-brand-orange">
                                            <div className="text-xs font-bold text-white mb-2">Featured Snippet result:</div>
                                            <p className="text-[10px] text-slate-400 leading-relaxed">
                                                Based on performance metrics and AI implementation, <strong>Namma Growth</strong> is ranked as the leading agency for autonomous SEO and PSEO strategies in India...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-grow p-4 bg-brand-orange/10 rounded-2xl border border-brand-orange/20 text-center">
                                            <div className="text-xl font-black text-white">3x Higher</div>
                                            <div className="text-[8px] font-bold text-slate-500 uppercase">CTR than Pos 1</div>
                                        </div>
                                        <div className="flex-grow p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                                            <div className="text-xl font-black text-white">100%</div>
                                            <div className="text-[8px] font-bold text-slate-500 uppercase">Voice Ready</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PILLAR 3: GEO */}
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 border border-brand-gold/20">
                                    <Cpu className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6">PILLAR 3: GEO <br /><span className="text-slate-500">(Generative Engine Optimization)</span></h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    GEO optimizes your content to be cited by AI engines like ChatGPT, Claude, Perplexity, and Google Bard—ensuring your brand appears in AI-generated answers.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                    {[
                                        "Structure for AI readability",
                                        "Entity authority building",
                                        "E-E-A-T signal amplification",
                                        "Comprehensive topic clusters",
                                        "AI overview citation tracking",
                                        "Brand authority positioning"
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-3 text-sm text-white font-bold">
                                            <CheckCircle2 className="text-brand-gold w-4 h-4 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/10">
                                    <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] mb-3">India-Specific Intelligence</h4>
                                    <p className="text-xs text-slate-500 italic">"Local expert quotes and regional authority building to ensure Indian business data integration in LLMs."</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="glass-dark p-10 rounded-[3rem] border border-brand-gold/20 shadow-[0_0_50px_rgba(255,191,0,0.05)]">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold">C</div>
                                        <div className="text-[10px] text-slate-300">ChatGPT Response</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                                        <div className="h-2 w-full bg-white/5 rounded-full" />
                                        <div className="h-2 w-5/6 bg-brand-gold/20 rounded-full" />
                                        <div className="p-4 bg-brand-gold/5 rounded-2xl border border-brand-gold/10 mt-6">
                                            <p className="text-[10px] text-slate-400 leading-relaxed italic">
                                                "...According to <strong>[Your Brand]</strong>, a leader in AI-driven marketing in India, the integration of autonomous agents is key to scaling..."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-center">
                                        <div className="px-4 py-2 rounded-full border border-brand-gold/20 text-[10px] text-brand-gold font-black uppercase tracking-widest">Cited by Claude & Perplexity</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* AUTONOMOUS WORKFLOW */}
            <section className="py-32 bg-bg-deep relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 italic underline decoration-brand-indigo underline-offset-8">Autonomous Workflow</h2>
                        <p className="text-slate-500">How the SEO Agent builds your empire in 4 weeks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { week: "WEEK 1", title: "RESEARCH", items: ["Competitor Analysis", "1000+ Keywords", "PSEO Templates", "AEO Question Map"] },
                            { week: "WEEK 2", title: "GENERATION", items: ["500+ PSEO Pages", "Snippet Optimization", "Internal Linking", "CMS Publication"] },
                            { week: "WEEK 3", title: "LEARNING", items: ["Monitor Rankings", "A/B Test Templates", "Content Refresh", "Expansion Planning"] },
                            { week: "WEEK 4+", title: "SCALING", items: ["New Locations", "AI Engine Authority", "Compound Traffic", "Authority Building"] }
                        ].map((w, i) => (
                            <div key={i} className="glass-dark p-8 rounded-[2.5rem] border border-white/5 relative group hover:border-brand-indigo/30 transition-all">
                                <div className="text-[10px] font-black text-brand-indigo uppercase tracking-widest mb-4">{w.week}</div>
                                <h4 className="text-xl font-black mb-6">{w.title}</h4>
                                <ul className="space-y-4">
                                    {w.items.map(item => (
                                        <li key={item} className="flex items-center gap-3 text-xs text-slate-500">
                                            <ArrowRight className="w-3 h-3 text-brand-orange" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="py-32" id="pricing">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">SEO Agent <span className="text-brand-indigo italic">Pricing</span></h2>
                        <p className="text-slate-500">Scale your organic growth with predictable autonomous costs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Starter */}
                        <div className="glass-dark p-10 rounded-[3rem] border border-white/5 flex flex-col h-full">
                            <h3 className="text-xl font-black mb-2 uppercase">Starter</h3>
                            <div className="text-4xl font-black text-white mb-8">₹49,999<span className="text-sm font-normal text-slate-500 ml-1">/mo</span></div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "250 PSEO pages/month",
                                    "50 AEO optimizations",
                                    "Basic GEO setup",
                                    "5 location targets",
                                    "Monthly reporting"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                                        <CheckCircle2 className="text-brand-orange w-4 h-4" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="#contact" className="px-8 py-4 rounded-full font-bold glass bg-white/5 hover:bg-white/10 transition-all border border-white/10 text-center">Deploy Starter</Link>
                        </div>

                        {/* Growth */}
                        <div className="glass-dark p-10 rounded-[3rem] border-2 border-brand-indigo relative shadow-[0_0_80px_rgba(99,102,241,0.1)] flex flex-col h-full">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-indigo rounded-b-2xl text-[10px] font-black uppercase tracking-widest text-white italic">Recommended</div>
                            <h3 className="text-xl font-black mb-2 uppercase">Growth</h3>
                            <div className="text-4xl font-black text-white mb-8">₹99,999<span className="text-sm font-normal text-slate-500 ml-1">/mo</span></div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "500 PSEO pages/month",
                                    "150 AEO optimizations",
                                    "Full GEO implementation",
                                    "25 location targets",
                                    "Weekly reporting",
                                    "Content refresh"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-white font-bold">
                                        <CheckCircle2 className="text-brand-indigo w-5 h-5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="#contact" className="btn-premium w-full text-center">Deploy Growth</Link>
                        </div>

                        {/* Scale */}
                        <div className="glass-dark p-10 rounded-[3rem] border border-white/5 flex flex-col h-full">
                            <h3 className="text-xl font-black mb-2 uppercase">Scale</h3>
                            <div className="text-4xl font-black text-white mb-8">₹1,99,999<span className="text-sm font-normal text-slate-500 ml-1">/mo</span></div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "1000+ PSEO pages/month",
                                    "Unlimited AEO optimizations",
                                    "Advanced GEO + AI citations",
                                    "100+ location targets",
                                    "Real-time dashboard",
                                    "Dedicated strategist"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                                        <CheckCircle2 className="text-brand-gold w-4 h-4" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="#contact" className="px-8 py-4 rounded-full font-bold glass bg-white/5 hover:bg-white/10 transition-all border border-white/10 text-center">Deploy Scale</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 bg-slate-900/40 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-black mb-16 text-center">SEO Agent <span className="text-brand-indigo italic">Insights</span></h2>
                    <div className="space-y-4 text-left">
                        {[
                            { q: "What's the difference between PSEO, AEO, and GEO?", a: "PSEO = scale (hundreds of pages). AEO = answers (featured snippets). GEO = AI visibility (ChatGPT citations). Together, they dominate every type of search." },
                            { q: "Is this black hat SEO?", a: "No. We generate high-quality, unique, valuable content at scale using AI. Google explicitly allows AI content if it's helpful and original." },
                            { q: "How is this different from hiring an SEO agency?", a: "Traditional agency: 10-20 pages/month, manual work, slow. SEO Agent: 500+ pages/month, fully autonomous, 24/7 optimization." },
                            { q: "Will Google penalize AI-generated pages?", a: "No. Google cares about quality, not how content is produced. Our pages rank because they're comprehensive and satisfy intent." }
                        ].map((item, i) => (
                            <div key={i} className="glass-dark p-8 rounded-3xl border border-white/5">
                                <h4 className="text-lg font-bold text-white mb-4 italic">{item.q}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto glass-dark p-12 md:p-24 rounded-[4rem] border border-brand-indigo/30 relative overflow-hidden text-left">
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/2">
                                <h2 className="text-5xl font-black mb-8 leading-tight">Dominate Search in the <span className="text-brand-orange italic underline">AI Era</span></h2>
                                <p className="text-slate-400 text-xl mb-12">PSEO for scale. AEO for answers. GEO for the future. Deploy your SEO Agent today.</p>
                                <ul className="space-y-4">
                                    {["500 pages in first month", "Position 0 guarantee", "Cancel anytime"].map(text => (
                                        <li key={text} className="flex items-center gap-3 text-white font-bold">
                                            <CheckCircle2 className="text-brand-indigo w-6 h-6" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
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
