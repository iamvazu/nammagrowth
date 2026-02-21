import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Marketing Case Studies Bangalore | Real Results, Real Revenue | Namma Growth",
    description: "See how we helped Bangalore businesses grow. Real revenue numbers, real strategies, real ROI. SaaS, real estate, healthcare success stories."
};

const caseStudies = [
    {
        id: "koramangala-saas",
        category: "B2B SaaS",
        location: "Koramangala",
        title: "How a Koramangala SaaS startup reached ₹10Cr ARR",
        challenge: "Low demo requests, high CAC across primary channels.",
        solution: "LinkedIn ABM + Landing page optimization + PSEO.",
        results: [
            "300% increase in qualified leads",
            "60% reduction in cost per acquisition",
            "₹10Cr ARR achieved in 12 months"
        ]
    },
    {
        id: "whitefield-real-estate",
        category: "Real Estate",
        location: "Whitefield",
        title: "Qualified leads and ₹50Cr inventory sold for Whitefield Project",
        challenge: "Slow sales velocity, unqualified inquiries from generic ads.",
        solution: "PSEO location pages + WhatsApp automation for automated site visit booking.",
        results: [
            "500+ qualified leads in 3 months",
            "25% increase in site visits",
            "₹50Cr+ inventory sold"
        ]
    },
    {
        id: "hsr-healthcare",
        category: "Healthcare",
        location: "HSR Layout",
        title: "3X Inquiries for HSR Layout Dental Clinic",
        challenge: "Low patient volume, no online presence in a competitive local area.",
        solution: "Local SEO + Google Business optimization + WhatsApp Appointment Bot.",
        results: [
            "#1 ranking for 'dentist in HSR Layout'",
            "200% increase in appointment calls",
            "4.9★ Google rating (150+ reviews)"
        ]
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
                        Real Bangalore Businesses. <br />
                        <span className="text-gradient">Real Revenue Growth.</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        No fluff, no jargon. Just data-backed success stories of local
                        companies scaling the right way.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 gap-20">
                        {caseStudies.map((cs) => (
                            <div key={cs.id} className="group relative">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="order-2 lg:order-1">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-4 py-1.5 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs font-bold uppercase tracking-widest border border-brand-indigo/20">
                                                {cs.category}
                                            </span>
                                            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                                                {cs.location}
                                            </span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-bold mb-8 group-hover:text-brand-orange transition-colors">
                                            {cs.title}
                                        </h2>

                                        <div className="space-y-8 mb-10">
                                            <div>
                                                <h4 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest text-slate-500">The Challenge</h4>
                                                <p className="text-slate-400 leading-relaxed">{cs.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest text-slate-500">The Solution</h4>
                                                <p className="text-slate-400 leading-relaxed">{cs.solution}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-3xl glass-dark border border-white/5">
                                            {cs.results.map((r, i) => (
                                                <div key={i}>
                                                    <div className="text-white font-black text-sm mb-1 uppercase tracking-tighter">Impact {i + 1}</div>
                                                    <div className="text-slate-400 text-sm leading-tight">{r}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href={`/case-studies/${cs.id}`} className="inline-flex items-center gap-2 mt-10 text-brand-orange font-bold hover:gap-4 transition-all">
                                            Read Full Story <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>

                                    <div className="order-1 lg:order-2 aspect-video rounded-[3rem] glass-dark border border-white/5 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/20 to-brand-orange/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex items-center justify-center h-full text-slate-700 font-black text-4xl uppercase tracking-tighter">
                                            Success Story
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 border-t border-white/5 bg-slate-900/40">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8 italic">Want Results Like These?</h2>
                    <Link href="/book-call" className="btn-premium">
                        Get Your Free Growth Audit
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
