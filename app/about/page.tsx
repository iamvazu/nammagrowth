import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, MapPin, Award } from "lucide-react";

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
                            Silicon Valley <span className="text-brand-indigo">AI.</span> <br />
                            Indian <span className="text-brand-orange italic">Heart.</span>
                        </h1>
                        <p className="text-slate-400 text-2xl leading-relaxed max-w-3xl">
                            Namma Growth is India&apos;s first AI-native marketing agency.
                            We combine global LLM technology with deep local expertise
                            to scale businesses from Koramangala to the world.
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
                                        <h4 className="text-xl font-bold mb-2">WhatsApp-First Strategy</h4>
                                        <p className="text-slate-500 italic leading-relaxed">In India, marketing happens on WhatsApp, not email. We build UPI-integrated bots that handle everything from discovery to payment.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Vernacular Mastery</h4>
                                        <p className="text-slate-500 italic leading-relaxed">We optimize for Bharat. Our AI handles Hinglish, Kannada, Tamil, and more, ensuring your brand speaks the language of your customer.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Predictive Execution</h4>
                                        <p className="text-slate-500 italic leading-relaxed">Our AI doesn&apos;t just generate content; it predicts which creatives will convert best in specific micro-markets like HSR or Whitefield.</p>
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
