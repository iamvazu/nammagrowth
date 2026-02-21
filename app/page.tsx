import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import BangaloreMap from "@/components/BangaloreMap";
import { Bot, TrendingUp, Search, Code, Smartphone, MapPin, Mail, Phone, ArrowRight, Quote } from "lucide-react";

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

  const services = [
    {
      title: "AI WhatsApp Automation",
      desc: "Broadcast campaigns, auto-replies, and payment links.",
      price: "From ₹15k/mo",
      icon: Bot,
      color: "text-green-500"
    },
    {
      title: "Google & Meta Ads",
      desc: "High-intent lead generation. ₹10Cr+ ad spend managed.",
      price: "From ₹25k/mo",
      icon: TrendingUp,
      color: "text-brand-orange"
    },
    {
      title: "Local SEO",
      desc: "Rank #1 in Koramangala, HSR, Indiranagar, and more.",
      price: "From ₹20k/mo",
      icon: MapPin,
      color: "text-red-500"
    },
    {
      title: "Programmatic SEO",
      desc: "100s of localized landing pages to dominate search.",
      price: "Custom Quote",
      icon: Search,
      color: "text-brand-indigo"
    },
    {
      title: "Website Development",
      desc: "Next.js, conversion-optimized, 2-week delivery.",
      price: "From ₹50k",
      icon: Code,
      color: "text-purple-500"
    },
    {
      title: "Voice & AI Search",
      desc: "Optimize for ChatGPT, Alexa, and Google Assistant.",
      price: "From ₹15k/mo",
      icon: Smartphone,
      color: "text-brand-gold"
    }
  ];

  return (
    <main className="min-h-screen bg-bg-deep uppercase-none">
      <JsonLd data={organizationSchema} />
      <Navbar />
      <Hero />

      {/* Trust Section / Testimonials */}
      <section className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-16">
            Real Impact for Bangalore Businesses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Namma Growth transformed our HSR dental clinic. We went from 5 to 25 inquiries a week using just Local SEO and WhatsApp.",
                author: "Dr. Sandeep K.",
                role: "Director, HSR Health",
              },
              {
                text: "The PSEO engine is a beast. We rank for keywords we didn't even know existed. Pure organic growth at scale.",
                author: "Pranay M.",
                role: "Founder, Koramangala SaaS",
              },
              {
                text: "Finally an agency that speaks 'Bangalore'. Their Indiranagar-specific influencer strategy doubled our D2C sales.",
                author: "Ananya R.",
                role: "Marketing Head, D2C Brand",
              }
            ].map((t, i) => (
              <div key={i} className="glass-dark p-8 rounded-3xl border border-white/5 relative group hover:border-brand-orange/30 transition-all">
                <Quote className="text-brand-orange w-8 h-8 opacity-20 mb-4" />
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="text-white font-bold">{t.author}</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our <span className="text-brand-indigo uppercase-none">Growth Engine</span> Services
            </h2>
            <p className="text-slate-400 text-lg">
              High-performance marketing systems optimized for conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="group p-8 rounded-3xl glass-dark hover:bg-slate-800/50 transition-all border border-white/5 hover:border-brand-indigo/30 flex flex-col h-full"
              >
                <service.icon className={`w-12 h-12 mb-6 ${service.color}`} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-brand-indigo font-bold text-xs uppercase tracking-widest">{service.price}</span>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 group-hover:text-brand-orange transition-colors">
                    View Details <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bengaluru-First Growth Strategy Section */}
      <section className="py-32 bg-bg-deep relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                Built for <span className="text-brand-orange italic">Bangalore</span> <br />
                Not Bombay or Boston
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-10">
                We understand that Bangalore isn&apos;t just India&apos;s tech capital —
                it&apos;s a collection of unique micro-markets with distinct behaviors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "SaaS Playbook", area: "Koramangala" },
                  { title: "F&B Strategy", area: "Indiranagar" },
                  { title: "Enterprise ABM", area: "Whitefield" },
                  { title: "Healthcare SEO", area: "HSR Layout" }
                ].map(item => (
                  <div key={item.area} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand-orange" />
                    <div>
                      <div className="text-white font-bold">{item.title}</div>
                      <div className="text-slate-500 text-xs uppercase tracking-widest">{item.area}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 rounded-full font-bold glass-dark border border-brand-indigo/30 hover:bg-brand-indigo/10 transition-all">
                Download Local Playbook →
              </button>
            </div>

            <div className="lg:w-1/2 w-full h-[500px]">
              <BangaloreMap />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Lead Capture Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 italic">
                Ready to <span className="text-gradient not-italic">Scale?</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12">
                Book a free 30-minute growth audit. Join 100+ Bangalore businesses
                scaling with AI precision. No spam, ever.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-brand-indigo border border-white/5">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Us</div>
                    <div className="text-xl font-medium">growth@nammagrowth.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-brand-orange border border-white/5">
                    <Phone />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-500 uppercase tracking-widest">WhatsApp Direct</div>
                    <div className="text-xl font-medium">+91 80 XXXX XXXX</div>
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

      <Footer />
    </main>
  );
}
