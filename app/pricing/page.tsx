import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Transparent Marketing Pricing Bangalore | Namma Growth",
    description: "Simple, transparent pricing for AI marketing, SEO, and automation. No hidden costs. ROI-focused tiers for Bangalore businesses."
};

const tiers = [
    {
        name: "Growth Starter",
        price: "₹25,000",
        period: "/month",
        desc: "Perfect for local SMEs and clinics looking to dominate their neighborhood.",
        features: [
            "Local SEO (1 Location)",
            "Google Business Optimization",
            "WhatsApp Business Setup",
            "Lead Capture Form",
            "Monthly Growth Report"
        ],
        cta: "Start Local Growth",
        color: "border-white/5"
    },
    {
        name: "Scale Engine",
        price: "₹75,000",
        period: "/month",
        desc: "Designed for high-growth startups and established Bangalore brands.",
        features: [
            "Performance Ads (Meta & Google)",
            "Full WhatsApp AI Automation",
            "PSEO Hub (50+ Pages)",
            "Conversion Rate Optimization",
            "Priority WhatsApp Support",
            "Dedicated Growth Manager"
        ],
        cta: "Fuel Your Growth",
        color: "border-brand-indigo",
        featured: true
    },
    {
        name: "Enterprise Domination",
        price: "Custom",
        period: "",
        desc: "Multi-location, multi-service strategy for large-scale market leadership.",
        features: [
            "Custom PSEO Infrastructure",
            "Advanced AI Agent Integration",
            "Enterprise ABM Strategies",
            "National Expansion Mapping",
            "24/7 Strategic Partnership"
        ],
        cta: "Contact for Custom Plan",
        color: "border-white/5"
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 border-b border-white/5 bg-slate-900/40">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 italic">
                        No Jargon. Just <span className="text-gradient not-italic">ROI.</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
                        Transparent pricing built for the Bangalore startup and business ecosystem.
                        Choose a tier that fits your growth stage.
                    </p>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`glass-dark p-10 rounded-[3rem] border-2 ${tier.color} transition-all relative flex flex-col h-full ${tier.featured ? 'scale-105 shadow-2xl shadow-brand-indigo/10' : ''}`}
                            >
                                {tier.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-indigo px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-xs font-black tracking-[0.3em] text-slate-500 mb-2 uppercase">{tier.name}</h3>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-5xl font-black text-white tracking-tighter">{tier.price}</span>
                                    <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">{tier.period}</span>
                                </div>

                                <p className="text-slate-400 text-sm mb-10 min-h-[40px] italic leading-relaxed">
                                    {tier.desc}
                                </p>

                                <ul className="space-y-4 mb-12 flex-grow">
                                    {tier.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                            <Check className="w-5 h-5 text-brand-orange mt-0.5 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/book-call" className={`w-full py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${tier.featured ? 'bg-brand-indigo text-white hover:bg-brand-indigo/80' : 'glass border border-white/10 text-white hover:bg-white/5'}`}>
                                    {tier.cta} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison or ROI Calculator placeholder */}
            <section className="py-32 bg-slate-900/20 border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Why our pricing is different?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto">
                        <div>
                            <Zap className="w-10 h-10 text-brand-orange mx-auto mb-6" />
                            <h4 className="text-white font-bold mb-3">No Retainers</h4>
                            <p className="text-slate-500 text-sm italic">Performance-linked fees that keep us hungrier for your growth than ours.</p>
                        </div>
                        <div>
                            <Zap className="w-10 h-10 text-brand-indigo mx-auto mb-6" />
                            <h4 className="text-white font-bold mb-3">AI Efficiency</h4>
                            <p className="text-slate-500 text-sm italic">Lower costs for you because we automate 70% of the manual agency grunt work.</p>
                        </div>
                        <div>
                            <Zap className="w-10 h-10 text-brand-orange mx-auto mb-6" />
                            <h4 className="text-white font-bold mb-3">100% Transparency</h4>
                            <p className="text-slate-500 text-sm italic">Deep-dive live dashboards. You see what we see, whenever you want.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
