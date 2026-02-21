import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { Bot, TrendingUp, Search, Code, Smartphone, MapPin, Mail, Phone } from "lucide-react";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Namma Growth",
    "url": "https://nammagrowth.in",
    "logo": "https://nammagrowth.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Koramangala",
      "addressRegion": "Bangalore",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80-XXXX-XXXX",
      "contactType": "sales"
    }
  };

  return (
    <main className="min-h-screen bg-bg-deep">
      <JsonLd data={organizationSchema} />
      <Navbar />
      <Hero />

      {/* Trust Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-10">
            Trusted by Bangalore&apos;s fastest growing companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* These would be real logos */}
            {["FLIPKART", "SWIGGY", "CRED", "ZEPTO"].map((brand) => (
              <span key={brand} className="text-2xl font-black text-white">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20 text-balance">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-brand-indigo">Growth Engine</span> Services
            </h2>
            <p className="text-slate-400 text-lg">
              We don&apos;t just do marketing; we build scalable digital systems
              powered by the latest AI technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WhatsApp Automation",
                desc: "Turn WhatsApp into a revenue channel with automated support and campaigns.",
                icon: Bot,
                color: "text-green-500"
              },
              {
                title: "Performance Marketing",
                desc: "High-intent lead generation across Meta, Google, and LinkedIn Ads.",
                icon: TrendingUp,
                color: "text-brand-orange"
              },
              {
                title: "PSEO & SEO",
                desc: "Dominate search results with hyper-local programmatic landing pages.",
                icon: Search,
                color: "text-brand-indigo"
              },
              {
                title: "Web & App Dev",
                desc: "Conversion-optimized platforms built for the Indian mobile-first market.",
                icon: Code,
                color: "text-purple-500"
              },
              {
                title: "AEO Optimization",
                desc: "Optimize for voice search and AI answer engines like ChatGPT.",
                icon: Smartphone,
                color: "text-brand-gold"
              },
              {
                title: "Local SEO",
                desc: "Own your local Bangalore market from Koramangala to Whitefield.",
                icon: MapPin,
                color: "text-red-500"
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-3xl glass-dark hover:bg-slate-800/50 transition-all border border-white/5 hover:border-brand-indigo/30">
                <service.icon className={`w-12 h-12 mb-6 ${service.color}`} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Proof Section */}
      <section className="py-32 bg-bg-deep relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Bengaluru-First <br />
                <span className="text-brand-orange">Growth Strategy</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                We know the pulse of Bangalore. From the tech hubs of Whitefield to
                the startup vibes of Koramangala, our strategies are locally tailored
                to win in India&apos;s tech capital.
              </p>
              <ul className="space-y-4">
                {["Local Language Support (Kannada/Hinglish)", "Mobile-First Optimization", "GST-Integrated Pricing"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 w-full aspect-video rounded-3xl glass-dark flex items-center justify-center">
              <span className="text-slate-500 font-mono">[Interactive Bangalore Growth Map]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Lead Capture Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to <span className="text-gradient">Scale?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12">
                Book a free 30-minute growth audit. Our experts will analyze your current performance
                and provide a roadmap for AI-driven expansion.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center text-brand-indigo">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase">Email Us</div>
                    <div className="text-lg font-medium">growth@nammagrowth.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center text-brand-orange">
                    <Phone />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase">Call Us</div>
                    <div className="text-lg font-medium">+91 80 XXXX XXXX</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Simplified for now) */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 mb-4">© 2026 Namma Growth. Built with AI in Bengaluru.</p>
        </div>
      </footer>
    </main>
  );
}
