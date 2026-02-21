import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Target, MapPin, Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "About Namma Growth | The AI-First Marketing Agency for Bangalore",
    description: "Learn about the team behind Bangalore's most aggressive growth agency. We combine local insights with global AI tech to scale your business."
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-32 border-b border-white/5 bg-slate-900/40">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                            Born in <span className="text-brand-orange">Koramangala</span> <br />
                            Built for <span className="italic">Results</span>
                        </h1>
                        <p className="text-slate-400 text-2xl leading-relaxed max-w-3xl">
                            Namma Growth was founded with a single obsession: Bangalore&apos;s
                            ambitious startups and SMEs are being underserved by traditional
                            jargon-heavy agencies. We replaced the jargon with AI.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-10 italic underline decoration-brand-indigo underline-offset-8">Our DNA</h2>
                            <div className="space-y-12">
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-brand-indigo shrink-0 group-hover:bg-brand-indigo group-hover:text-white transition-all">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Aggressive ROI focus</h4>
                                        <p className="text-slate-500 italic leading-relaxed">We don&apos;t care about &apos;brand awareness&apos; if it doesn&apos;t lead to revenue. Every rupee you spend with us must work harder than it does on its own.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Hyper-Local Intelligence</h4>
                                        <p className="text-slate-500 italic leading-relaxed">We know why a SaaS founder in Koramangala buys differently than a real estate developer in Whitefield. Locality is our strategy.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">AI-Execution</h4>
                                        <p className="text-slate-500 italic leading-relaxed">Our proprietary AI engine handles the grunt work—reporting, tracking, and content at scale—allowing our humans to focus on strategy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-square rounded-[4rem] glass-dark border border-white/5 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-indigo/20 blur-[120px] rounded-full" />
                            <div className="text-center">
                                <span className="text-slate-700 font-black text-[12rem] leading-none uppercase tracking-tighter opacity-20 select-none">NAMMA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team / Growth Placeholder */}
            <section className="py-32 bg-slate-900/30">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto italic mb-16">
                        "To make Bangalore the world capital of successful businesses
                        by democratizing AI-powered marketing for every entrepreneur."
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto opacity-50">
                        {/* Values Icons */}
                        {["Integrity", "Innovation", "Speed", "Results"].map(v => (
                            <div key={v} className="text-center">
                                <div className="text-white font-black uppercase tracking-widest text-xs">{v}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
