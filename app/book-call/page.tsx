import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
    title: "Book Free Marketing Consultation Bangalore | Namma Growth",
    description: "Free 30-minute growth audit for your Bangalore business. AI marketing strategy, SEO audit, automation roadmap. No obligation."
};

export default function BookCallPage() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            <section className="pt-40 pb-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Left Info */}
                        <div className="lg:w-1/2">
                            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 italic">
                                Let&apos;s Build Your <br />
                                <span className="text-gradient not-italic">Growth Engine</span>
                            </h1>

                            <p className="text-slate-400 text-xl leading-relaxed mb-12">
                                Join 100+ Bangalore companies already scaling with Namma Growth.
                                Our team will analyze your business and provide a clear 90-day roadmap.
                            </p>

                            <div className="space-y-6 mb-16">
                                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">What you&apos;ll get in 30 minutes:</h4>
                                {[
                                    "Complete audit of your current marketing metrics",
                                    "3 specific high-impact opportunities we see for your brand",
                                    "Custom growth roadmap for the next 90 days",
                                    "Clear budget and timeline estimates for implementation"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-brand-indigo shrink-0" />
                                        <span className="text-slate-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-10 border-t border-white/5 space-y-6">
                                <div className="flex items-center gap-4 text-slate-400">
                                    <Mail className="w-5 h-5 text-brand-orange" />
                                    <span className="font-bold">growth@nammagrowth.in</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <Phone className="w-5 h-5 text-brand-indigo" />
                                    <span className="font-bold">+91 80 XXXX XXXX (WhatsApp)</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <MapPin className="w-5 h-5 text-brand-orange" />
                                    <span className="font-bold">WeWork, Koramangala, Bangalore</span>
                                </div>
                            </div>

                            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-500 italic">
                                Office Hours: Mon-Sat, 9 AM - 7 PM IST <br />
                                Response Time: Under 2 hours
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:w-1/2 bg-slate-900/40 p-1 md:p-8 rounded-[3rem] border border-white/5">
                            <LeadForm />
                            <div className="mt-8 text-center space-y-4">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center justify-center gap-4">
                                    <span className="h-px w-8 bg-white/10" /> Join 100+ Businesses <span className="h-px w-8 bg-white/10" />
                                </p>
                                <div className="flex justify-center gap-2">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-brand-indigo" />)}
                                </div>
                                <p className="text-[10px] text-slate-600 uppercase tracking-widest px-10">Rated 4.9/5 on Google Reviews • No spam guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
