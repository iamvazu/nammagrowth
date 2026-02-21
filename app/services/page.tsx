import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, TrendingUp, Search, MapPin, Code, Smartphone, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Digital Marketing Services in Bangalore | AI Automation, SEO, Ads | Namma Growth",
    description: "Full-stack AI marketing services for Bangalore businesses. WhatsApp automation, performance marketing, PSEO, and web development. Free consultation."
};

const serviceCategories = [
    {
        title: "AI-Powered Marketing",
        services: [
            {
                id: "ai-seo",
                name: "AI SEO & AEO",
                desc: "LLM-optimized content for ChatGPT, Perplexity, and Bard. Featured snippet targeting at scale.",
                icon: Smartphone,
                color: "text-brand-gold"
            },
            {
                id: "ai-automation",
                name: "AI Automation",
                desc: "WhatsApp Business API, UPI payment bots, and lead scoring powered by GPT-4.",
                icon: Zap,
                color: "text-green-500"
            },
            {
                id: "predictive-analytics",
                name: "Predictive Analytics",
                desc: "LTV forecasting, anomaly detection, and automated insights dashboards.",
                icon: TrendingUp,
                color: "text-brand-orange"
            }
        ]
    },
    {
        title: "Performance Ads",
        services: [
            {
                id: "google-ads",
                name: "Google Ads",
                desc: "Search, Display, and YouTube. ROI-focused smart bidding and creative optimization.",
                icon: Search,
                color: "text-brand-indigo"
            },
            {
                id: "social-ads",
                name: "Social Ads",
                desc: "Meta (Instagram/WhatsApp) & LinkedIn B2B. Multi-city localized campaigns.",
                icon: TrendingUp,
                color: "text-brand-orange"
            }
        ]
    },
    {
        title: "Organic Growth",
        services: [
            {
                id: "pseo",
                name: "Programmatic SEO",
                desc: "Massive scale landing pages (Service × Location) ranking for 100s of keywords.",
                icon: Search,
                color: "text-brand-indigo"
            },
            {
                id: "local-seo",
                name: "Local SEO Mastery",
                desc: "GBP optimization for Koramangala to Whitefield. Local citation dominance.",
                icon: MapPin,
                color: "text-red-500"
            }
        ]
    },
    {
        title: "Web & App",
        services: [
            {
                id: "web-dev",
                name: "Web Development",
                desc: "Next.js sites optimized for 2G/3G speeds. GST-integrated e-commerce solutions.",
                icon: Code,
                color: "text-purple-500"
            },
            {
                id: "cro",
                name: "CRO Optimization",
                desc: "Heatmaps, funnel analysis, and UPI friction reduction for higher sales.",
                icon: Smartphone,
                color: "text-brand-gold"
            }
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
                        Every Service You Need to <br />
                        <span className="text-gradient">Scale</span> — Under One Roof
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        We don&apos;t just provide services; we build growth engines
                        tailored for the Bangalore ecosystem.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {serviceCategories.map((cat) => (
                            <div key={cat.title}>
                                <h2 className="text-2xl font-black mb-12 uppercase tracking-[0.3em] text-center text-slate-500">{cat.title}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                    {cat.services.map((s: any) => (
                                        <div key={s.id} className="glass-dark p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-indigo/30 transition-all group">
                                            <s.icon className={`w-14 h-14 mb-8 ${s.color}`} />
                                            <h4 className="text-2xl font-bold mb-6 text-white leading-tight">{s.name}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                                {s.desc}
                                            </p>
                                            <Link href={`/book-call?service=${s.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                                                Get Started <ChevronRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-slate-900/40">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Not Sure What You Need?</h2>
                    <p className="text-slate-400 text-lg mb-12">Book a free 30-minute strategy call with our growth experts.</p>
                    <Link href="/book-call" className="btn-premium">
                        Book My Strategy Session
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
