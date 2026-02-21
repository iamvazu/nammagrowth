import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, TrendingUp, Search, MapPin, Code, Smartphone, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Digital Marketing Services in Bangalore | AI Automation, SEO, Ads | Namma Growth",
    description: "Full-stack AI marketing services for Bangalore businesses. WhatsApp automation, performance marketing, PSEO, and web development. Free consultation."
};

const services = [
    {
        id: "ai-automation",
        title: "AI AUTOMATION",
        tagline: "Put Your Marketing on Autopilot",
        icon: Zap,
        color: "text-green-500",
        features: [
            "WhatsApp Business API setup & automation",
            "AI chatbots (Kannada, Hindi, English)",
            "Email & SMS workflow automation",
            "Lead scoring & nurturing"
        ],
        caseStudy: "How a Koramangala clinic automated 80% of inquiries"
    },
    {
        id: "performance-marketing",
        title: "PERFORMANCE MARKETING",
        tagline: "Pay Only for Results",
        icon: TrendingUp,
        color: "text-brand-orange",
        features: [
            "Google Ads (Search, Display, YouTube)",
            "Meta Ads (Facebook, Instagram, WhatsApp)",
            "LinkedIn B2B lead generation",
            "Retargeting & remarketing"
        ],
        stats: "₹5Cr+ ad spend managed, 4.2X average ROAS"
    },
    {
        id: "pseo",
        title: "PROGRAMMATIC SEO (PSEO)",
        tagline: "Own Every Search in Bangalore",
        icon: Search,
        color: "text-brand-indigo",
        features: [
            "Location × Service page generation",
            "Automated content at scale",
            "Internal linking architecture",
            "Rank tracking & optimization"
        ],
        example: "200+ pages ranking in 90 days"
    },
    {
        id: "local-seo",
        title: "LOCAL SEO",
        tagline: "Be the #1 Choice in Your Neighborhood",
        icon: MapPin,
        color: "text-red-500",
        features: [
            "Google Business Profile optimization",
            "Local citation building",
            "Review generation strategies",
            "Near me ranking optimization"
        ],
        neighborhoods: "Koramangala, HSR, Indiranagar, Whitefield..."
    },
    {
        id: "web-dev",
        title: "WEB DEVELOPMENT",
        tagline: "Websites That Convert Visitors to Customers",
        icon: Code,
        color: "text-purple-500",
        features: [
            "Next.js development (fast, SEO-friendly)",
            "E-commerce (Shopify, WooCommerce)",
            "Landing pages for ads",
            "PWA development"
        ],
        guarantee: "2-week delivery or 20% off"
    },
    {
        id: "aeo",
        title: "AEO (ANSWER ENGINE OPTIMIZATION)",
        tagline: "Be the Answer When Customers Ask",
        icon: Smartphone,
        color: "text-brand-gold",
        features: [
            "Featured snippet optimization",
            "Voice search readiness",
            "ChatGPT/Perplexity visibility",
            "FAQ schema implementation"
        ],
        status: "Ready for AI search"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((s) => (
                            <div key={s.id} className="glass-dark p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-indigo/30 transition-all group">
                                <s.icon className={`w-14 h-14 mb-8 ${s.color}`} />
                                <h3 className="text-xs font-black tracking-[0.3em] text-slate-500 mb-2 uppercase">{s.title}</h3>
                                <h4 className="text-2xl font-bold mb-6 text-white leading-tight">{s.tagline}</h4>

                                <ul className="space-y-4 mb-8">
                                    {s.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo mt-1.5" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {s.caseStudy && (
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-400 italic mb-8">
                                        Case Study: "{s.caseStudy}"
                                    </div>
                                )}
                                {s.stats && (
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-brand-orange font-bold mb-8">
                                        Result: {s.stats}
                                    </div>
                                )}
                                {s.guarantee && (
                                    <div className="p-4 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/20 text-xs text-brand-indigo font-bold mb-8">
                                        Guarantee: {s.guarantee}
                                    </div>
                                )}

                                <Link href={`/book-call?service=${s.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                                    Get Started <ChevronRight className="w-4 h-4" />
                                </Link>
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
