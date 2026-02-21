import Navbar from "@/components/Navbar";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// This would usually come from a CMS like Sanity
const locationData: Record<string, any> = {
    "koramangala": {
        name: "Koramangala",
        landmarks: "Sony World Signal, Forum Mall, Wework Galaxy",
        desc: "As the startup heart of Bangalore, Koramangala requires aggressive, AI-driven marketing strategies to stand out. Namma Growth helps Koramangala businesses dominate local search and automate lead capture.",
        nearby: ["HSR Layout", "Indiranagar", "BTM Layout"]
    },
    "hsr-layout": {
        name: "HSR Layout",
        landmarks: "HSR BDA Complex, 27th Main Road",
        desc: "The residential and commercial hub of HSR Layout is home to thousands of growing businesses. Our local SEO and WhatsApp automation tools are designed specifically for HSR's unique business landscape.",
        nearby: ["Koramangala", "Bellandur", "Sarjapur Road"]
    }
};

export async function generateStaticParams() {
    return Object.keys(locationData).map((slug) => ({
        slug: slug,
    }));
}

export default function LocationPage({ params }: { params: { slug: string } }) {
    const data = locationData[params.slug] || { name: params.slug.replace('-', ' ') };

    return (
        <main className="min-h-screen bg-bg-deep uppercase-none">
            <Navbar />

            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-indigo/10 blur-[100px]" />

                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-2/3">
                            <div className="flex items-center gap-2 text-brand-orange mb-4">
                                <MapPin className="w-5 h-5" />
                                <span className="font-bold tracking-widest uppercase text-sm">Serving {data.name}, Bangalore</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
                                Digital Marketing & AI <br />
                                Automation in <span className="text-gradient">{data.name}</span>
                            </h1>

                            <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl">
                                {data.desc || `Scale your business in ${data.name} with AI-powered performance marketing, local SEO, and automated customer journeys.`}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <button className="btn-premium">Start Growth Audit</button>
                                <button className="px-8 py-4 rounded-full font-bold glass">Book consultation</button>
                            </div>
                        </div>

                        <div className="md:w-1/3 w-full glass-dark p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-bold mb-6 italic">Why choose us in {data.name}?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Hyper-local keyword mapping",
                                    "WhatsApp API for local leads",
                                    "5-min proximity to key hubs",
                                    "Bangalore-specific AI models"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-brand-indigo" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Landmarks/Context */}
            {data.landmarks && (
                <section className="py-20 bg-slate-900/20 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Expertise near {data.landmarks.split(',')[0]}</h2>
                                <p className="text-slate-400 mb-8">
                                    We provide on-ground marketing support and digital strategies for businesses near
                                    <span className="text-white font-medium"> {data.landmarks}</span>.
                                    Our team understands the local traffic patterns and consumer behavior in {data.name}.
                                </p>
                                <div className="flex gap-4">
                                    {data.nearby?.map((area: string) => (
                                        <span key={area} className="px-4 py-2 rounded-full bg-white/5 text-xs text-slate-500">
                                            Also serving {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="aspect-video rounded-3xl glass-dark flex items-center justify-center text-slate-600">
                                [Local {data.name} Map View]
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-32">
                <div className="container mx-auto px-6 text-center">
                    <div className="glass-dark p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/20 blur-[100px]" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to dominate <span className="text-brand-indigo">{data.name}</span> search results?
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                            Our PSEO engine will put your brand in front of every potential customer in {data.name}.
                        </p>
                        <button className="btn-premium">
                            Build My Strategy
                        </button>
                    </div>
                </div>
            </section>

            <footer className="py-20 text-center border-t border-white/5">
                <p className="text-slate-500">Namma Growth - {data.name} Branch Operations</p>
            </footer>
        </main>
    );
}
