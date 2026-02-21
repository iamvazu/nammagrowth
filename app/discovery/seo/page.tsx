import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, AlertCircle, TrendingUp, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "SEO Discovery Form | Namma Growth",
    description: "Start your SEO journey with Bangalore's leading AI-native agency. Fill out our discovery form to see if we're a good fit."
};

export default function SeoDiscoveryPage() {
    const criteria = [
        {
            title: "Active & Healthy Business",
            desc: "Our services are for companies that are up and running already and want to scale. We do not work with get-rich-quick schemes, adult-themed material, or unproven concepts.",
            icon: CheckCircle2
        },
        {
            title: "Steady Flow of Leads & Customers",
            desc: "You have consistent traffic and are already making sales. You're actively promoting your business. You don't need to be a household name, but you must be present in your market.",
            icon: TrendingUp
        },
        {
            title: "Solid Product & Reputation",
            desc: "Everything we do is about amplifying your brand. We work with businesses that have a good reputation and a product they are proud of.",
            icon: ShieldCheck
        }
    ];

    return (
        <main className="min-h-screen bg-bg-deep">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-8 italic">
                        OUR SEO IS <span className="text-brand-orange not-italic">NOT FOR ALL BUSINESSES.</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto italic leading-relaxed">
                        We select the clients we work with very carefully to ensure maximum attention to detail and your company's ultimate success.
                    </p>
                </div>
            </section>

            {/* Criteria */}
            <section className="py-20 bg-slate-900/40">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-500 text-center">We work with clients who have:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {criteria.map((c, i) => (
                            <div key={i} className="glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:border-brand-indigo/30 transition-all">
                                <c.icon className="w-12 h-12 text-brand-indigo mb-6" />
                                <h4 className="text-xl font-bold mb-4 text-white">{i + 1}. {c.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 rounded-[2.5rem] bg-brand-orange/5 border border-brand-orange/20 max-w-3xl mx-auto flex items-start gap-6">
                        <AlertCircle className="w-8 h-8 text-brand-orange shrink-0 mt-1" />
                        <p className="text-slate-300 text-sm italic">
                            <strong>Note:</strong> We only work with a limited number of clients at any given time. If you do not meet the criteria above, we may not be the right fit for your current stage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Discovery Form */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Discovery Form</h2>
                            <p className="text-slate-500 italic">Fill out the form below to help us understand your business better.</p>
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
