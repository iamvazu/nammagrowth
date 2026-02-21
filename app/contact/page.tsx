import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export const metadata = {
    title: "Contact Namma Growth | Marketing Agency in Koramangala, Bangalore",
    description: "Get in touch with Namma Growth for AI marketing, SEO, and automation services. Office in Koramangala. WhatsApp direct support."
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 border-b border-white/5 bg-slate-900/40">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
                        Let&apos;s Start Your <br />
                        <span className="text-gradient">Growth Journey.</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Whether you have a specific goal or just want to explore AI
                        possibilities, we&apos;re only a message away.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Left Column: Direct Contact */}
                        <div className="space-y-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-8 italic text-brand-orange underline underline-offset-8 decoration-white/10 decoration-wavy">Direct Access</h3>
                                <div className="space-y-10">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-brand-indigo shrink-0 group-hover:bg-brand-indigo group-hover:text-white transition-all">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Write to us</h4>
                                            <div className="text-xl font-bold text-white">growth@nammagrowth.in</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-green-500 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">WhatsApp Direct</h4>
                                            <div className="text-xl font-bold text-white">+91 80 XXXX XXXX</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Visit Our Lab</h4>
                                            <div className="text-xl font-bold text-white max-w-xs leading-tight">WeWork, Koramangala 4th Block, Bangalore</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 rounded-[3rem] bg-white/5 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-indigo/10 blur-3xl rounded-full" />
                                <h4 className="text-white font-bold mb-4 italic uppercase text-xs tracking-widest">Client Priority</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                    Existing clients have 24/7 dedicated access via their growth manager&apos;s priority line.
                                    Check your dashboard for direct contact details.
                                </p>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-600">Response Guarantee: 2 Hours</div>
                            </div>
                        </div>

                        {/* Right Column: Lead Form */}
                        <div className="glass-dark p-2 md:p-10 rounded-[4rem] border border-white/5 shadow-2xl">
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-20 bg-slate-900/40 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="h-[400px] w-full rounded-[3rem] glass-dark flex items-center text-slate-700 italic font-mono justify-center border border-white/5">
                        [Google Map: Koramangala 4th Block Office Location]
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
