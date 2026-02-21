import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import {
    CheckCircle2, ArrowRight, Bot, Target, ShoppingBag, Building2, Stethoscope
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const industryData: Record<string, any> = {
    "saas": {
        name: "SaaS & Tech",
        desc: "Scale your software company with data-driven AI marketing.",
        icon: Bot,
        color: "text-brand-indigo",
        features: ["Low CAC Lead Gen", "G2/Capterra Optimization", "Feature-Driven Content", "Product-Led Growth"]
    },
    "real-estate": {
        name: "Real Estate",
        desc: "High-intent lead generation for luxury properties and developments.",
        icon: Building2,
        color: "text-brand-orange",
        features: ["Hyper-local Geo-targeting", "Virtual Tour Promotion", "Qualified Lead Filters", "WhatsApp Follow-up Automation"]
    },
    "healthcare": {
        name: "Healthcare",
        desc: "Connect patients with the care they need through trust-based marketing.",
        icon: Stethoscope,
        color: "text-blue-500",
        features: ["Local SEO for Clinics", "Trust-First Content Strategy", "Patient Review Management", "Medical PR Compliance"]
    },
    "ecommerce": {
        name: "D2C E-commerce",
        desc: "Dominate the Indian D2C market with high ROAS social campaigns.",
        icon: ShoppingBag,
        color: "text-brand-gold",
        features: ["Click-to-WhatsApp Ads", "Shopify CRO Audits", "Vernacular Ad Creatives", "Blended ROAS Tracking"]
    }
};

type Props = {
    params: Promise<{ industry: string }>;
};

export async function generateStaticParams() {
    return Object.keys(industryData).map((i) => ({
        industry: i,
    }));
}

export default async function IndustryPage({ params }: Props) {
    const { industry } = await params;
    const data = industryData[industry];

    if (!data) notFound();

    return (
        <main className="min-h-screen bg-bg-deep uppercase-none">
            <Navbar />
            <section className="pt-48 pb-24 border-b border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 border border-white/10 uppercase tracking-widest text-[10px] font-black text-brand-gold">
                            Industry Expertise
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                            {data.name}
                        </h1>
                        <p className="text-slate-400 text-xl md:text-2xl italic leading-relaxed max-w-3xl">
                            {data.desc}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-black mb-8">Growth Strategy for <span className={data.color}>{data.name}</span></h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-12 italic">
                                We understand the unique nuances of the {data.name} landscape in India.
                                Our approach combines industry-specific AI models with hyper-local market intelligence.
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
                                <Link href="/book-call" className="btn-premium">Get {data.name} Audit <ArrowRight className="inline-block ml-2" /></Link>
                            </div>
                        </div>
                        <div className="glass-dark p-12 rounded-[4rem] border border-white/10">
                            <data.icon className={`w-24 h-24 ${data.color} mb-12`} />
                            <h3 className="text-2xl font-bold text-white mb-6">Scale Your Brand</h3>
                            <p className="text-slate-400 mb-8 italic">Tell us about your project and get a custom {data.name} strategy within 2 hours.</p>
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
