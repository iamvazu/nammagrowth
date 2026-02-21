import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import {
    Bot, TrendingUp, Search, Code, Smartphone, MapPin,
    Zap, Layout, Video, Target, BarChart3, Users, Globe, Headset,
    CheckCircle2, ArrowRight
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const serviceData: Record<string, any> = {
    "ai-seo": {
        title: "AI SEO & AEO",
        subtitle: "Answer Engine Optimization",
        desc: "LLM-optimized content for ChatGPT, Perplexity, and Bard. We help your brand become the cited source for AI answers.",
        longDesc: "Traditional SEO is evolving. With the rise of Search Generative Experience (SGE), your brand needs to be 'AI-ready'. We optimize your digital footprint so that AI models trust and recommend your business.",
        icon: Smartphone,
        color: "text-brand-gold",
        features: [
            "Answer Engine Optimization (AEO)",
            "LLM Content Training Data Optimization",
            "Featured Snippets & Position 0 Targeting",
            "Natural Language Keyword Research"
        ]
    },
    "whatsapp-automation": {
        title: "WhatsApp Automation",
        subtitle: "Conversational Commerce",
        desc: "24/7 customer engagement via WhatsApp Business API. Auto-replies, lead qualification, and UPI payments.",
        longDesc: "In India, WhatsApp is where business happens. We build intelligent chatbots that handle inquiries, book appointments, and even collect payments while you sleep.",
        icon: Zap,
        color: "text-green-500",
        features: [
            "Custom GPT-4 Powered Chatbots",
            "Automated Lead Qualification",
            "UPI Payment Integration",
            "Broadcast Campaigns & Nurture Flows"
        ]
    },
    "google-ads": {
        title: "Google & Search Ads",
        subtitle: "High-Intent Lead Gen",
        desc: "Precision-targeted search campaigns that capture users exactly when they are looking for your services.",
        longDesc: "We manage high-budget Google Ads accounts with a focus on ROAS. Using AI-driven smart bidding, we ensure every rupee spent contributes to your bottom line.",
        icon: Target,
        color: "text-brand-indigo",
        features: [
            "Search, Display & YouTube Ads",
            "Performance Max Optimization",
            "Competitor Keyword Targeting",
            "Remarketing & Retargeting"
        ]
    },
    "pseo": {
        title: "Programmatic SEO",
        subtitle: "Scale to Infinity",
        desc: "Generate hundreds of high-quality landing pages to capture long-tail search traffic across multiple locations.",
        longDesc: "Dominate search for every combination of your service and location. Our PSEO engine builds localized pages that rank #1 and drive massive organic traffic.",
        icon: Globe,
        color: "text-brand-orange",
        features: [
            "Localized Landing Page Generation",
            "Dynamic Content Injection",
            "Internal Linking Architecture",
            "Automated Page Indexing"
        ]
    },
    "local-seo": {
        title: "Local SEO Mastery",
        subtitle: "Own Your Neighborhood",
        desc: "Rank #1 for 'near me' searches in Koramangala, HSR, Indiranagar, and beyond.",
        longDesc: "We optimize your Google Business Profile and local citations to ensure you are the top choice for customers in your immediate vicinity.",
        icon: MapPin,
        color: "text-red-500",
        features: [
            "Google Business Profile Optimization",
            "Local Citation Building",
            "Review Management Strategy",
            "Hyper-Local Keyword Targeting"
        ]
    },
    "web-development": {
        title: "Premium Web Development",
        subtitle: "Built for Performance",
        desc: "Next.js websites that load in milliseconds and are optimized for high conversion rates.",
        longDesc: "Your website is your best salesperson. We build blazing-fast, mobile-first experiences that follow modern design standards and convert visitors into leads.",
        icon: Code,
        color: "text-purple-500",
        features: [
            "Next.js & React Framework",
            "Core Web Vitals Optimized",
            "Conversion-First UI/UX Design",
            "Mobile-First Responsive Layouts"
        ]
    }
};

// Aliases for Navbar slugs
const slugMap: Record<string, string> = {
    "ai-content": "ai-seo",
    "analytics": "ai-seo",
    "ai-automation": "whatsapp-automation",
    "social-ads": "google-ads",
    "linkedin-ads": "google-ads",
    "programmatic-ads": "google-ads",
    "content-marketing": "pseo",
    "social-media": "pseo",
    "ecommerce": "web-development",
    "video": "web-development",
    "cro": "web-development"
};

export async function generateMetadata({ params }: { params: { service: string } }) {
    const slug = params.service;
    const targetSlug = slugMap[slug] || slug;
    const data = serviceData[targetSlug];

    if (!data) return { title: "Service Not Found" };

    return {
        title: `${data.title} | Namma Growth`,
        description: data.desc
    };
}

export default function ServiceDetailPage({ params }: { params: { service: string } }) {
    const slug = params.service;
    const targetSlug = slugMap[slug] || slug;
    const data = serviceData[targetSlug];

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 pb-24 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-indigo/10 blur-[120px] rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 border border-white/10 uppercase tracking-widest text-[10px] font-black text-brand-orange">
                            Service Detail
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                            {data.title}
                        </h1>
                        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed italic max-w-3xl">
                            {data.desc}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">The <span className="text-brand-indigo">Namma Growth</span> Approach</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                {data.longDesc}
                            </p>

                            <div className="space-y-6">
                                {data.features.map((f: string, i: number) => (
                                    <div key={i} className="flex items-center gap-4 text-white font-bold">
                                        <CheckCircle2 className="text-brand-orange w-6 h-6 shrink-0" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16">
                                <Link href="/book-call" className="btn-premium">
                                    Get Started with {data.title}
                                    <ArrowRight className="inline-block ml-2" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-dark p-12 rounded-[4rem] border border-white/10 relative z-10">
                                <data.icon className={`w-32 h-32 ${data.color} mb-12`} />
                                <div className="text-4xl font-black text-white/5 absolute top-12 right-12 uppercase italic">{data.subtitle}</div>
                                <h3 className="text-2xl font-bold text-white mb-6">Ready to scale?</h3>
                                <p className="text-slate-400 mb-8 italic">Fill out the quick audit form and we'll send you a custom strategy for {data.title} within 2 hours.</p>
                                <LeadForm />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="py-32 bg-slate-900/40 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-widest text-slate-500">Explore More Growth Engines</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.values(serviceData)
                            .filter(s => s.title !== data.title)
                            .slice(0, 3)
                            .map((s, i) => (
                                <Link key={i} href={`/services/${s.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-brand-indigo/30 transition-all group">
                                    <s.icon className={`w-10 h-10 mb-6 ${s.color}`} />
                                    <h4 className="text-xl font-bold text-white mb-2">{s.title}</h4>
                                    <div className="text-brand-orange text-[10px] font-black uppercase tracking-widest flex items-center gap-2">View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
