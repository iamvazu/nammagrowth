import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, Layout, Zap, Users } from "lucide-react";

export const metadata = {
    title: "Web Design Discovery Form | Namma Growth",
    description: "Craft a high-converting website for your Bangalore business. Start with our web design discovery process."
};

export default function WebDesignDiscoveryPage() {
    const criteria = [
        {
            title: "Growth-Minded Infrastructure",
            desc: "Our web design process is for businesses ready to treat their website as their #1 salesperson. We build conversion engines, not just pretty brochures.",
            icon: Layout
        },
        {
            title: "Clarity of Offer",
            desc: "You have a clear product or service that solves a real problem. We help you translate that value into a world-class digital experience.",
            icon: Zap
        },
        {
            title: "Commitment to Results",
            desc: "We work with clients who understand that a website is an investment. We focus on speed, user experience, and measurable ROI.",
            icon: Users
        }
    ];

    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-8 italic">
                        CONVERSION-FIRST <span className="text-brand-indigo not-italic">WEB DESIGN.</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto italic leading-relaxed">
                        We don't just build websites; we build growth engines. Fill out the form below to see if we're a match for your project.
                    </p>
                </div>
            </section>

            {/* Criteria */}
            <section className="py-20 bg-slate-900/40">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-500 text-center">Ideal Projects for Our Workflow:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {criteria.map((c, i) => (
                            <div key={i} className="glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:border-brand-orange/30 transition-all">
                                <c.icon className="w-12 h-12 text-brand-orange mb-6" />
                                <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{c.title}</h4>
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
                            <h2 className="text-3xl font-bold mb-4">Web Design Discovery Form</h2>
                            <p className="text-slate-500 italic">Tell us about your brand vision and goals.</p>
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
