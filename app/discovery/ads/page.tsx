import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, Target, BarChart3, Rocket } from "lucide-react";

export const metadata = {
    title: "Paid Advertising Discovery Form | Namma Growth",
    description: "Scale your revenue with AI-driven Google & Meta Ads. Complete the discovery form for a custom ad strategy."
};

export default function PaidAdsDiscoveryPage() {
    const criteria = [
        {
            title: "Active Ad Budget",
            desc: "Our paid advertising strategies are designed for businesses with a minimum monthly ad spend of ₹25,000. We focus on scaling what works.",
            icon: Target
        },
        {
            title: "Data-Driven Mindset",
            desc: "We work with clients who value tracking and ROI over vanity metrics. Our AI optimizes for conversions, not just clicks.",
            icon: BarChart3
        },
        {
            title: "Proven Offer",
            desc: "You have an offer that people are already buying. We help you pour gasoline on that fire using the latest AI-driven targeting.",
            icon: Rocket
        }
    ];

    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-8 italic">
                        PERFORMANCE-LED <span className="text-brand-orange not-italic">PAID ADVERTISING.</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto italic leading-relaxed">
                        Ready to spend ₹1 to make ₹5? Fill out the form below to see if your brand is ready for the Namma Growth Ad Engine.
                    </p>
                </div>
            </section>

            {/* Criteria */}
            <section className="py-20 bg-slate-900/40">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-500 text-center">Prerequisites for Scale:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {criteria.map((c, i) => (
                            <div key={i} className="glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:border-brand-indigo/30 transition-all">
                                <c.icon className="w-12 h-12 text-brand-indigo mb-6" />
                                <h4 className="text-xl font-bold mb-4 text-white">{c.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Discovery Form */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Paid Ads Discovery Form</h2>
                            <p className="text-slate-500 italic">Tell us about your current ad performance and growth targets.</p>
                        </div>
                        <div className="glass-dark p-10 rounded-[4rem] border border-white/5">
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
