import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, TrendingUp, Search, MapPin, Code, Smartphone, ChevronRight, CheckCircle2, Layout, Video, Target, BarChart3, Users, Globe, Headset } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Digital Marketing Services India | AI Marketing, SEO, Automation | Namma Growth",
    description: "Full-stack AI marketing services for Indian businesses. WhatsApp automation, PSEO, Google Ads, web development. Custom strategies for India + global markets. Get free consultation."
};

const serviceCategories = [
    {
        title: "AI-Powered Marketing",
        desc: "Leverage artificial intelligence to automate, optimize, and scale your marketing efforts beyond human capacity.",
        price: "From ₹35,000/month",
        services: [
            {
                id: "ai-seo",
                name: "AI SEO & AEO",
                desc: "Rank #1 with AI-optimized content and answer engine optimization. ChatGPT visibility and Position 0 targeting.",
                icon: Smartphone,
                color: "text-brand-gold"
            },
            {
                id: "ai-automation",
                name: "Conversational AI",
                desc: "24/7 customer engagement via WhatsApp, Instagram, and web chat. GPT-4 bots with UPI integration.",
                icon: Zap,
                color: "text-green-500"
            },
            {
                id: "predictive-analytics",
                name: "Predictive Intelligence",
                desc: "Predict customer behavior, churn, and LTV forecasting before your competitors do.",
                icon: TrendingUp,
                color: "text-brand-orange"
            }
        ]
    },
    {
        title: "Performance Marketing",
        desc: "Data-driven advertising across Google, Meta, and LinkedIn with AI-optimized bidding.",
        price: "From ₹50,000/month",
        services: [
            {
                id: "google-ads",
                name: "Google Ads Mastery",
                desc: "Search, Display, YouTube, and Performance Max. ROI-focused smart bidding.",
                icon: Target,
                color: "text-brand-indigo"
            },
            {
                id: "meta-ads",
                name: "Meta Ads (FB/IG)",
                desc: "Reels-first strategy, vernacular creatives, and WhatsApp click-to-chat campaigns.",
                icon: Layout,
                color: "text-blue-500"
            },
            {
                id: "linkedin-ads",
                name: "LinkedIn B2B",
                desc: "Precision targeting for decision-makers. ABM and lead generation for startups & enterprises.",
                icon: BarChart3,
                color: "text-brand-indigo"
            }
        ]
    },
    {
        title: "Organic Growth",
        desc: "Dominate search results and build sustainable organic traffic through SEO and PSEO.",
        price: "From ₹30,000/month",
        services: [
            {
                id: "seo",
                name: "Advanced SEO",
                desc: "Technical excellence and on-page mastery. Google.co.in and international optimization.",
                icon: Search,
                color: "text-brand-indigo"
            },
            {
                id: "pseo",
                name: "Programmatic SEO",
                desc: "Scale to 100s of ranking pages (Service × Location) with AI-powered content.",
                icon: Globe,
                color: "text-brand-orange"
            },
            {
                id: "content-strategy",
                name: "Content Marketing",
                desc: "Hinglish and vernacular content that resonates with the Indian heart.",
                icon: Video,
                color: "text-brand-gold"
            }
        ]
    },
    {
        title: "Web & App",
        desc: "High-performance websites and apps built for conversion, speed, and scale.",
        price: "From ₹75,000",
        services: [
            {
                id: "web-dev",
                name: "Next.js Web Dev",
                desc: "Next.js websites that load instantly. 2G/3G optimized with regional hosting.",
                icon: Code,
                color: "text-purple-500"
            },
            {
                id: "ecommerce",
                name: "E-commerce Engine",
                desc: "Shopify & custom stores with UPI, COD, and GST invoicing built-in.",
                icon: Smartphone,
                color: "text-brand-gold"
            },
            {
                id: "cro",
                name: "CRO Optimization",
                desc: "A/B testing and funnel analysis to turn more visitors into customers.",
                icon: Zap,
                color: "text-brand-orange"
            }
        ]
    },
    {
        title: "Creative & Brand",
        desc: "Stand out with compelling video, design, and influencer partnerships.",
        price: "From ₹25,000",
        services: [
            {
                id: "brand-strategy",
                name: "Brand Identity",
                desc: "Cultural symbolism and vernacular naming for the Indian market.",
                icon: Users,
                color: "text-pink-500"
            },
            {
                id: "video-ads",
                name: "Video ROI",
                desc: "High-converting Reels, Shorts, and explainer videos for ads and social.",
                icon: Video,
                color: "text-brand-indigo"
            },
            {
                id: "influencer",
                name: "Influencer Scale",
                desc: "Leverage regional nano and micro-influencers for authentic reach.",
                icon: Target,
                color: "text-brand-gold"
            }
        ]
    },
    {
        title: "Strategy & Strategy",
        desc: "Predictive decision-making with marketing automation and analytics.",
        price: "From ₹40,000/month",
        services: [
            {
                id: "automation",
                name: "Automation Hub",
                desc: "WhatsApp-first nurture flows and CRM integration at scale.",
                icon: Zap,
                color: "text-green-500"
            },
            {
                id: "analytics",
                name: "Data Intelligence",
                desc: "Online-offline attribution and predictive LTV dashboards.",
                icon: TrendingUp,
                color: "text-brand-orange"
            },
            {
                id: "pr",
                name: "Digital PR",
                desc: "Brand authority building across YourStory, Inc42, and global pubs.",
                icon: Headset,
                color: "text-brand-indigo"
            }
        ]
    }
];

const faqs = [
    {
        q: "What makes Namma Growth different?",
        a: "We're India's first AI-native agency. We combine Silicon Valley AI with deep Indian market expertise (WhatsApp-first, vernacular, mobile-first)."
    },
    {
        q: "Do you work with startups?",
        a: "Yes! Our Startup Engine plan begins at ₹25k/month. We scale with you from pre-seed to enterprise."
    },
    {
        q: "Can you help us expand globally?",
        a: "Absolutely. We have hybrid India-Global teams and experience running campaigns in US, UK, and UAE markets."
    },
    {
        q: "How quickly can we see results?",
        a: "PPC is immediate. AI Automation shows efficiency gains week 1. SEO typically takes 3-6 months for market dominance."
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-32 border-b border-white/5 relative bg-slate-900/40">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                        Every Service You <br />
                        Need to <span className="text-brand-indigo italic">Scale</span>
                    </h1>
                    <p className="text-slate-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 italic">
                        From AI automation to web development, we offer complete digital marketing
                        solutions tailored for Indian businesses expanding locally and globally.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="#services" className="btn-premium">View All Services</Link>
                        <Link href="/book-call" className="px-8 py-4 rounded-full font-bold glass-dark border border-white/10 text-white hover:bg-white/5 transition-all">Download Catalog</Link>
                    </div>
                </div>
            </section>

            {/* Services Hub */}
            <section id="services" className="py-32">
                <div className="container mx-auto px-6">
                    <div className="space-y-40">
                        {serviceCategories.map((cat, i) => (
                            <div key={i} className="relative">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                                    <div className="max-w-2xl">
                                        <h2 className="text-4xl font-black mb-6 uppercase-none tracking-tight">{cat.title}</h2>
                                        <p className="text-slate-400 text-lg leading-relaxed">{cat.desc}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Estimated Investment</div>
                                        <div className="text-2xl font-bold text-brand-orange">{cat.price}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {cat.services.map((s, idx) => (
                                        <div key={idx} className="glass-dark p-10 rounded-[3rem] border border-white/5 group hover:border-brand-indigo/30 transition-all flex flex-col">
                                            <s.icon className={`w-14 h-14 mb-8 ${s.color}`} />
                                            <h4 className="text-2xl font-bold mb-6 text-white leading-tight">{s.name}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow">{s.desc}</p>
                                            <Link href={`/book-call?service=${s.id}`} className="mt-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-brand-orange transition-colors">
                                                Learn More <ChevronRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-32 bg-slate-900/40 border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase-none">Why India&apos;s Fastest Growing <br /><span className="text-brand-indigo">Companies Choose Us</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { title: "AI-Native", desc: "Born in the AI era, every service has an AI layer for speed and intelligence.", icon: Zap },
                            { title: "India-First", desc: "Built for Bharat: Vernacular, mobile-first, and WhatsApp-native strategy.", icon: Globe },
                            { title: "Results-First", desc: "Transparent performance-based pricing and ROI-focused execution.", icon: TrendingUp },
                            { title: "Bangalore Speed", desc: "Silicon Valley quality at Indian prices. 24/7 autonomous execution.", icon: Smartphone }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-brand-indigo mx-auto mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-4">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black mb-4 uppercase-none">Common <span className="text-brand-orange">Questions</span></h2>
                        <p className="text-slate-500 italic">Everything you need to know about scaling with us.</p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {faqs.map((f, i) => (
                            <div key={i} className="glass-dark p-8 rounded-3xl border border-white/5">
                                <h4 className="text-xl font-bold mb-4 text-white">Q: {f.q}</h4>
                                <p className="text-slate-400 leading-relaxed italic">A: {f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-slate-900/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto glass-dark p-12 md:p-20 rounded-[4rem] border border-white/10 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/10 blur-[100px] rounded-full" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Not Sure Which Service You Need?</h2>
                        <p className="text-slate-400 text-xl italic mb-12 relative z-10 line-clamp-2 leading-relaxed">
                            Book a free 30-minute consultation. We&apos;ll audit your current marketing
                            and build a custom road-map for your specific industry.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 relative z-10">
                            <Link href="/book-call" className="btn-premium">Book Strategy Session</Link>
                            <div className="w-full text-xs font-bold text-slate-500 mt-4 flex items-center justify-center gap-4">
                                <span>✓ Free 30-min audit</span>
                                <span>✓ No commitment</span>
                                <span>✓ Response in 2 hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
