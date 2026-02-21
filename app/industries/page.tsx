import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link2, Laptop, Home, UserPlus, ShoppingBag, GraduationCap, DollarSign, Utensils } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Industry-Specific Marketing Solutions Bangalore | SaaS, Real Estate, Healthcare | Namma Growth",
    description: "Specialized marketing strategies for Bangalore's top industries. SaaS, real estate, healthcare, e-commerce, fintech, and more."
};

const industries = [
    {
        id: "saas",
        title: "SAAS & TECHNOLOGY",
        tagline: "From 0 to 1000 Customers",
        icon: Laptop,
        features: ["LinkedIn B2B lead generation", "Product-led growth strategies", "Demo request optimization", "Churn reduction campaigns"],
        client: "Koramangala SaaS startup → ₹10Cr ARR"
    },
    {
        id: "real-estate",
        title: "REAL ESTATE & PROPTECH",
        tagline: "Sell Properties Faster",
        icon: Home,
        features: ["Qualified lead generation", "Virtual tour marketing", "Retargeting interested buyers", "Broker network activation"],
        client: "Whitefield project → 50+ site visits/month"
    },
    {
        id: "healthcare",
        title: "HEALTHCARE & WELLNESS",
        tagline: "Fill Your Appointment Calendar",
        icon: UserPlus,
        features: ["Local SEO for clinics", "WhatsApp appointment booking", "Patient review management", "Specialized service marketing"],
        client: "HSR dental clinic → 3X patient inquiries"
    },
    {
        id: "ecommerce",
        title: "E-COMMERCE & D2C",
        tagline: "Scale Beyond Marketplaces",
        icon: ShoppingBag,
        features: ["Direct-to-consumer acquisition", "Instagram shopping setup", "Retention & loyalty programs", "Amazon listing optimization"],
        client: "Indiranagar skincare brand → ₹1Cr revenue"
    },
    {
        id: "education",
        title: "EDUCATION & EDTECH",
        tagline: "Enroll More Students",
        icon: GraduationCap,
        features: ["Lead nurturing via WhatsApp", "Demo class marketing", "Parent engagement campaigns", "Local center promotion"],
        client: "JP Nagar coaching center → Full batches"
    },
    {
        id: "fintech",
        title: "FINTECH & FINANCIAL SERVICES",
        tagline: "Build Trust, Acquire Users",
        icon: DollarSign,
        features: ["Compliance-first advertising", "Trust-building content", "App install campaigns", "User activation flows"],
        client: "Bangalore fintech → 10K+ app installs"
    },
    {
        id: "f-and-b",
        title: "FOOD & BEVERAGE",
        tagline: "Fill Tables, Not Just Feeds",
        icon: Utensils,
        features: ["Zomato/Swiggy optimization", "Instagram food marketing", "Local discovery boost", "Loyalty program setup"],
        client: "Koramangala cafe → Weekend waitlists"
    }
];

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 italic">
                        Marketing <span className="text-gradient not-italic">Playbooks</span> <br />
                        Built for Your Industry
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        We don&apos;t believe in one-size-fits-all. Every industry in
                        Bangalore has a unique growth code. We help you crack it.
                    </p>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {industries.map((ind) => (
                            <div key={ind.id} className="glass-dark p-10 rounded-[3rem] border border-white/5 hover:border-brand-orange/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-3xl rounded-full" />

                                <ind.icon className="w-12 h-12 mb-8 text-brand-orange" />
                                <h3 className="text-xs font-black tracking-[0.3em] text-slate-500 mb-2 uppercase">{ind.title}</h3>
                                <h4 className="text-2xl font-bold mb-6 text-white leading-tight">{ind.tagline}</h4>

                                <ul className="space-y-4 mb-8">
                                    {ind.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                                            <Link2 className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-sm text-slate-300">
                                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Key Result</div>
                                    {ind.client}
                                </div>
                            </div>
                        ))}

                        {/* CTA Option Card */}
                        <div className="p-10 rounded-[3rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center group hover:border-brand-indigo/30 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Don&apos;t See Your Industry?</h3>
                            <p className="text-slate-500 mb-8">We probably have a playbook for it. Let&apos;s talk.</p>
                            <Link href="/contact" className="px-8 py-3 rounded-full glass border border-white/10 font-bold hover:bg-white/5 transition-all">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
