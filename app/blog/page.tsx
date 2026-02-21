import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Tag, ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Bangalore Marketing Blog | AI, SEO, Growth Strategies | Namma Growth",
    description: "Actionable marketing insights for Bangalore businesses. Learn AI automation, PSEO, local SEO, and performance marketing."
};

const posts = [
    {
        id: "koramangala-local-seo",
        title: "How to Rank #1 on Google in Koramangala: The Complete Local SEO Playbook",
        excerpt: "Everything you need to know about dominating the Koramangala market, from GBP optimization to local citations.",
        category: "Local SEO",
        readTime: "12 min",
        featured: true
    },
    {
        id: "whatsapp-pricing-2024",
        title: "WhatsApp Business API Pricing India 2024: Complete Cost Breakdown",
        excerpt: "A transparent guide to how much WhatsApp automation actually costs for Bangalore startups.",
        category: "AI Automation",
        readTime: "8 min"
    },
    {
        id: "pseo-explained",
        title: "PSEO Explained: How We Generated 200+ Ranking Pages for a SaaS Company",
        excerpt: "Learn the architecture behind our Programmatic SEO engine that drives massive organic traffic.",
        category: "SEO",
        readTime: "15 min"
    },
    {
        id: "google-vs-meta-ads",
        title: "Google Ads vs Meta Ads: Which Works Better for Indian B2B Companies?",
        excerpt: "A data-backed comparison of where you should spend your first ₹1 Lakh in ad budget.",
        category: "PPC",
        readTime: "10 min"
    }
];

export default function BlogPage() {
    const categories = ["All", "AI Automation", "SEO", "PPC", "Local Marketing", "Case Studies"];

    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 border-b border-white/5 bg-slate-900/40">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
                        Bangalore Marketing <br />
                        <span className="text-brand-orange italic">Intelligence</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
                        Actionable strategies and local insights to help your
                        Bangalore business scale faster using AI.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(c => (
                            <button key={c} className="px-6 py-2 rounded-full glass border border-white/5 text-xs font-bold hover:border-brand-indigo transition-all">
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    {posts.filter(p => p.featured).map(p => (
                        <Link key={p.id} href={`/blog/${p.id}`} className="group block glass-dark p-8 md:p-12 rounded-[3.5rem] border border-white/5 hover:border-brand-indigo/30 transition-all overflow-hidden relative">
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-indigo/10 blur-[100px] rounded-full" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="aspect-video rounded-[2.5rem] bg-slate-900 flex items-center justify-center text-slate-800 font-bold text-3xl uppercase tracking-tighter border border-white/5">
                                    Featured Article
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-brand-indigo font-black text-xs uppercase tracking-widest">{p.category}</span>
                                        <span className="text-slate-600 flex items-center gap-1 text-xs">
                                            <Clock className="w-3 h-3" /> {p.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl font-bold mb-6 text-white group-hover:text-brand-orange transition-colors">
                                        {p.title}
                                    </h2>
                                    <p className="text-slate-400 text-lg mb-8 leading-relaxed italic">
                                        {p.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                                        Read Now <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Recent Posts */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.filter(p => !p.featured).map((p) => (
                            <Link key={p.id} href={`/blog/${p.id}`} className="group glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:border-slate-700 transition-all flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange border border-white/5">
                                        <Tag className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">{p.category}</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-5 leading-tight group-hover:text-brand-orange transition-colors">
                                    {p.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-8 line-clamp-2 flex-grow">
                                    {p.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <span className="text-xs text-slate-500 flex items-center gap-1 font-bold">
                                        <Clock className="w-3 h-3" /> {p.readTime}
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto glass-dark p-12 md:p-20 rounded-[4rem] text-center border border-white/5 relative overflow-hidden">
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full" />

                        <Mail className="w-12 h-12 text-brand-orange mx-auto mb-8" />
                        <h2 className="text-4xl font-bold mb-6">Get Bangalore Marketing <br /> Insights Weekly</h2>
                        <p className="text-slate-400 mb-10 text-lg">Join 1,200+ founders and marketers getting the edge.</p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="john@company.com"
                                className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand-indigo text-white"
                            />
                            <button className="px-8 py-4 rounded-full bg-brand-indigo text-white font-bold hover:bg-brand-indigo/80 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
