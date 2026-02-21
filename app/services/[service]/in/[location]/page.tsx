import Navbar from "@/components/Navbar";
import { Check, ArrowRight, Zap } from "lucide-react";

export async function generateStaticParams() {
    // In a real app, this would fetch all services and all locations
    const services = ["seo", "whatsapp-automation", "performance-marketing"];
    const locations = ["koramangala", "hsr-layout", "indiranagar"];

    const paths = [];
    for (const s of services) {
        for (const l of locations) {
            paths.push({ service: s, location: l });
        }
    }
    return paths;
}

export default async function ServiceLocationPage({ params }: { params: Promise<{ service: string, location: string }> }) {
    const { service, location } = await params;
    const serviceName = service.replace('-', ' ').toUpperCase();
    const locationName = location.replace('-', ' ').toUpperCase();

    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            <section className="pt-40 pb-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-brand-indigo font-bold text-sm tracking-widest uppercase">
                            <Zap className="w-4 h-4" />
                            Local Business Growth
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
                            Premium <span className="text-gradient">{serviceName}</span> <br />
                            Services in <span className="underline decoration-brand-orange">{locationName}</span>
                        </h1>

                        <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                            Dominate the local market in {locationName} with our specialized {serviceName} strategies.
                            We combine AI-powered automation with deep local insights to deliver 5X more ROI
                            than traditional agencies.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
                            <div className="glass-dark p-8 rounded-3xl border border-white/5">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Check className="text-brand-indigo" /> For Establishments in {locationName}
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    Tailored {serviceName} solutions that account for local competitors,
                                    geographic trends, and {locationName}-specific consumer behavior.
                                </p>
                            </div>
                            <div className="glass-dark p-8 rounded-3xl border border-white/5">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Check className="text-brand-indigo" /> AI-First Delivery
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    Our proprietary AI engine continuously optimizes your {serviceName} campaign
                                    for maximum visibility in the {locationName} region.
                                </p>
                            </div>
                        </div>

                        <button className="btn-premium transform scale-110">
                            Claim Your Free {locationName} Audit
                            <ArrowRight className="inline-block ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Trust & E-E-A-T */}
            <section className="py-20 bg-slate-900/40">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-400 max-w-2xl mx-auto italic">
                        "Namma Growth transformed our {locationName} operations. Their {serviceName} expertise
                        is unmatched in Bangalore's tech ecosystem. We've seen a 300% increase in qualified leads."
                    </p>
                    <div className="mt-6 font-bold text-white">— Founder, {locationName} SaaS Startup</div>
                </div>
            </section>
        </main>
    );
}
