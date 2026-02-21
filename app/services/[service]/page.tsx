import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import {
    CheckCircle2, ArrowRight
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceMap, allServices } from "@/lib/services";

type Props = {
    params: Promise<{ service: string }>;
};

// Map URL aliases to core service IDs
const aliasMap: Record<string, string> = {
    // AI Services
    "ai-content": "ai-seo",
    "whatsapp-automation": "ai-automation",
    "analytics": "predictive-analytics",
    "predictive-intelligence": "predictive-analytics",

    // Performance Ads
    "social-ads": "meta-ads",
    "programmatic-ads": "google-ads",
    "search-ads": "google-ads",

    // Organic Growth
    "local-seo": "seo",
    "content-marketing": "content-strategy",
    "social-media": "content-strategy",
    "pseo-engine": "pseo",
    "organic-seo": "seo",

    // Web & Creative
    "web-development": "web-dev",
    "video": "video-ads",
    "ecommerce-solutions": "ecommerce",
    "cro-optimization": "cro",

    // Strategy
    "automation-hub": "automation",
    "data-intelligence": "analytics",
    "digital-pr": "pr"
};

export async function generateMetadata({ params }: Props) {
    const { service } = await params;
    const targetId = aliasMap[service] || service;
    const data = serviceMap[targetId];

    if (!data) return { title: "Service Not Found | Namma Growth" };

    return {
        title: `${data.name} | Namma Growth`,
        description: data.desc
    };
}

export async function generateStaticParams() {
    // Include both core IDs and all aliases in pre-rendering
    const coreParams = allServices.map((s) => ({
        service: s.id,
    }));
    const aliasParams = Object.keys(aliasMap).map((a) => ({
        service: a,
    }));
    return [...coreParams, ...aliasParams];
}

export default async function ServiceDetailPage({ params }: Props) {
    const { service } = await params;
    const targetId = aliasMap[service] || service;
    const data = serviceMap[targetId];

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-bg-deep uppercase-none">
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
                            {data.name}
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
                                    Get Started with {data.name}
                                    <ArrowRight className="inline-block ml-2" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-dark p-12 rounded-[4rem] border border-white/10 relative z-10">
                                <data.icon className={`w-32 h-32 ${data.color} mb-12`} />
                                <div className="text-4xl font-black text-white/5 absolute top-12 right-12 uppercase italic">{data.subtitle}</div>
                                <h3 className="text-2xl font-bold text-white mb-6">Ready to scale?</h3>
                                <p className="text-slate-400 mb-8 italic">Fill out the quick audit form and we'll send you a custom strategy for {data.name} within 2 hours.</p>
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
                        {allServices
                            .filter(s => s.id !== data.id)
                            .slice(0, 3)
                            .map((s, i) => (
                                <Link key={i} href={`/services/${s.id}`} className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-brand-indigo/30 transition-all group">
                                    {/* @ts-ignore */}
                                    <s.icon className={`w-10 h-10 mb-6 ${s.color}`} />
                                    <h4 className="text-xl font-bold text-white mb-2">{s.name}</h4>
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
