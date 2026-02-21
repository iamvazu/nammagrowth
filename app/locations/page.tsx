import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Service Locations in Bangalore | Namma Growth",
    description: "Namma Growth provides AI marketing and SEO services across all major Bangalore micro-markets. Explore our location-specific strategies."
};

const locations = [
    { slug: "koramangala", name: "Koramangala", desc: "Startups, SaaS hub, and established tech enterprises." },
    { slug: "hsr-layout", name: "HSR Layout", desc: "Residential and commercial mix, home to thousands of SMEs." },
    { slug: "indiranagar", name: "Indiranagar", desc: "D2C brands, trendy retail, and high-end F&B." },
    { slug: "whitefield", name: "Whitefield", desc: "The tech giant corridor and large-scale enterprises." },
    { slug: "electronic-city", name: "Electronic City", desc: "Manufacturing, IT hubs, and industrial tech." },
    { slug: "jp-nagar", name: "JP Nagar", desc: "Education centers and residential business services." },
    { slug: "jayanagar", name: "Jayanagar", desc: "Legacy businesses and retail landmarks." },
    { slug: "mg-road", name: "MG Road / CBD", desc: "The commercial heart and premium retail sector." },
    { slug: "banaswadi", name: "Banaswadi", desc: "Emerging markets and residential services." },
    { slug: "bellandur", name: "Bellandur", desc: "IT ecosystems and large-scale residential growth." }
];

export default function LocationsHub() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 border-b border-white/5 bg-slate-900/40">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 italic">
                        Own Your <span className="text-gradient not-italic">Neighborhood</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        We have specific growth playbooks for every micro-market in Bangalore.
                        Click your location to see how we help you dominate local search.
                    </p>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locations.map((loc) => (
                            <Link key={loc.slug} href={`/locations/${loc.slug}`} className="group glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:border-brand-orange/30 transition-all">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-orange border border-white/5 group-hover:bg-brand-orange group-hover:text-white transition-all">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">{loc.name}</h3>
                                </div>
                                <p className="text-slate-500 text-sm mb-8 leading-relaxed italic">
                                    {loc.desc}
                                </p>
                                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                                    Explore Playbook <ArrowRight className="w-4 h-4 text-brand-orange" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 border-t border-white/5 bg-slate-900/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Business Outside Bangalore?</h2>
                    <p className="text-slate-400 text-lg mb-12 italic">We serve Pan-India clients with our AI-First Performance Marketing engine.</p>
                    <Link href="/book-call" className="btn-premium">
                        Talk to Us
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
