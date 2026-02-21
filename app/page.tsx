import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import BangaloreMap from "@/components/BangaloreMap";
import Link from "next/link";
import { Bot, TrendingUp, Search, Code, Smartphone, MapPin, Mail, Phone, ArrowRight, Quote, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Namma Growth | India's #1 AI Marketing & Automation Agency | Bangalore",
  description: "Scale your business with AI-powered marketing. WhatsApp automation, PSEO, performance marketing & web development. Trusted by 100+ Indian startups. Free growth audit."
};

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
      title: "AI-Powered Marketing",
      slug: "ai-seo",
      desc: "GPT-4 powered content, predictive analytics, and autonomous campaigns.",
      cta_text: "Explore AI Services",
      icon: Bot,
      color: "text-brand-orange",
      features: ["AI SEO", "Chatbots", "Predictive Lead Scoring"]
    },
    {
      title: "Performance Marketing",
      slug: "google-ads",
      desc: "Google, Meta, LinkedIn ads with AI-optimized bidding and creative.",
      cta_text: "See Ad Services",
      icon: TrendingUp,
      color: "text-brand-indigo",
      features: ["Google Ads", "Meta Ads", "LinkedIn B2B"]
    },
    {
      title: "Organic Growth",
      slug: "pseo",
      desc: "SEO, PSEO, and content that ranks #1 and drives organic revenue.",
      cta_text: "Explore SEO",
      icon: Search,
      color: "text-brand-gold",
      features: ["Local SEO", "PSEO", "Content Marketing"]
    },
    {
      title: "Web & App Development",
      slug: "web-development",
      desc: "Next.js websites, e-commerce, and mobile apps that convert.",
      cta_text: "See Development",
      icon: Code,
      color: "text-purple-500",
      features: ["Next.js", "E-commerce", "App Marketing"]
    },
    {
      title: "Creative & Brand",
      slug: "web-development",
      desc: "Video production, design, and influencer marketing at scale.",
      cta_text: "Explore Creative",
      icon: Smartphone,
      color: "text-pink-500",
      features: ["Video", "Design", "Influencers"]
    },
    {
      title: "Strategy & Analytics",
      slug: "ai-seo",
      desc: "Marketing automation, analytics, and data-driven decision making.",
      cta_text: "See Strategy",
      icon: TrendingUp,
      color: "text-green-500",
      features: ["Automation", "Analytics", "PR"]
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
            Trusted by India&apos;s Fastest Growing Companies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "We went from 50 leads/month to 300+ with their AI WhatsApp automation. Best marketing investment we've made.",
                author: "Rahul Sharma",
                role: "CEO, TechStart Bangalore",
              },
              {
                text: "Their PSEO strategy created 200+ ranking pages in 90 days. Organic traffic is now our #1 revenue channel.",
                author: "Priya Nair",
                role: "Founder, D2C Brand Mumbai",
              },
              {
                text: "The team's understanding of Indian market nuances is unmatched. They know when to send WhatsApp broadcasts and when not to.",
                author: "Arjun Reddy",
                role: "CMO, HealthTech Hyderabad",
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
              <div
                key={i}
                className="group p-8 rounded-3xl glass-dark hover:bg-slate-800/50 transition-all border border-white/5 hover:border-brand-indigo/30 flex flex-col h-full"
              >
                <service.icon className={`w-12 h-12 mb-6 ${service.color}`} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.map(f => (
                    <span key={f} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-slate-400 border border-white/5">
                      • {f}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <Link href={`/services/${service.slug}`} className="flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-brand-orange transition-colors">
                    {service.cta_text} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India-First Growth Strategy Section */}
      <section className="py-32 bg-bg-deep relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                Built for <span className="text-brand-orange italic">India.</span> <br />
                Ready for the World.
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-10">
                We understand India&apos;s unique digital landscape: mobile-first traffic,
                vernacular audiences, and WhatsApp-native communication.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Mobile-First (85% of traffic)",
                  "Vernacular Mastery",
                  "WhatsApp-First Strategy",
                  "UPI-Integrated Payments",
                  "Festival-Led Growth",
                  "Tier 2/3 Expansion"
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand-orange" />
                    <div className="text-white font-bold">{item}</div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl glass-dark border border-brand-indigo/30">
                <h4 className="text-lg font-bold text-white mb-2">Global Expansion?</h4>
                <p className="text-slate-400 text-sm">Now serving US, UK, and UAE markets with India prices + global quality execution.</p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full h-[500px]">
              <BangaloreMap />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 border-y border-white/5 bg-slate-900/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold mb-4 uppercase-none">How It <span className="text-brand-indigo">Works</span></h2>
            <p className="text-slate-500">Our battle-tested process for exponential growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Audit", desc: "We analyze your marketing, competitors, and opportunities.", time: "Day 1-2" },
              { step: "02", title: "Custom Roadmap", desc: "AI-powered strategy tailored to your industry and goals.", time: "Day 3-5" },
              { step: "03", title: "Rapid Execution", desc: "Our team + AI tools deploy campaigns at machine speed.", time: "Week 1-2" },
              { step: "04", title: "Optimize & Scale", desc: "Continuous AI optimization for compounding growth.", time: "Ongoing" }
            ].map((item, i) => (
              <div key={i} className="relative p-8 glass-dark rounded-3xl border border-white/5">
                <div className="text-5xl font-black text-white/5 absolute top-4 right-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-orange">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase-none italic underline decoration-brand-orange underline-offset-8">Growth <span className="not-italic">Stories</span></h2>
              <p className="text-slate-500">Real results for real businesses in the Bangalore ecosystem.</p>
            </div>
            <Link href="/case-studies" className="btn-premium py-3 px-6">View All Success Stories</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: "Koramangala SaaS Startup",
                industry: "B2B SaaS",
                result: "300% lead increase, ₹10Cr ARR",
                quote: "Namma Growth's AI automation changed our entire sales process."
              },
              {
                client: "Whitefield Real Estate",
                industry: "Real Estate",
                result: "500+ qualified leads, ₹50Cr sales",
                quote: "The PSEO strategy brought us buyers we never knew existed."
              },
              {
                client: "HSR Healthcare Clinic",
                industry: "Healthcare",
                result: "#1 Google ranking, 200% appointment increase",
                quote: "We're now the top-rated clinic in HSR Layout."
              }
            ].map((item, i) => (
              <div key={i} className="glass-dark p-8 rounded-[3rem] border border-white/5 flex flex-col h-full">
                <div className="text-xs font-black text-brand-indigo mb-2 uppercase tracking-widest">{item.industry}</div>
                <h4 className="text-2xl font-bold mb-6">{item.client}</h4>
                <div className="p-4 rounded-2xl bg-white/5 text-brand-orange font-bold text-sm mb-6">
                  Result: {item.result}
                </div>
                <p className="text-slate-500 text-sm italic mb-8">&quot;{item.quote}&quot;</p>
                <Link href="/case-studies" className="mt-auto text-xs font-black uppercase tracking-widest flex items-center gap-2 text-white hover:text-brand-orange transition-colors">
                  Read Case Study <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-32 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 uppercase-none">Growth <span className="text-brand-indigo italic">Insights</span></h2>
              <p className="text-slate-500 italic">Latest from our AI marketing lab.</p>
            </div>
            <Link href="/blog" className="text-sm font-bold text-white hover:text-brand-orange transition-colors">Go to Blog →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How to Rank #1 on Google in Bangalore: Complete Local SEO Guide", cat: "SEO", time: "12 min" },
              { title: "WhatsApp Business API Pricing India 2024: Complete Breakdown", cat: "Automation", time: "8 min" },
              { title: "PSEO Case Study: 200 Pages, 50,000 Monthly Organic Visits in 90 Days", cat: "Case Study", time: "15 min" }
            ].map((post, i) => (
              <Link key={i} href="/blog" className="group glass-dark p-8 rounded-3xl border border-white/5 hover:border-brand-indigo/30 transition-all">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange mb-4">{post.cat}</div>
                <h4 className="text-xl font-bold mb-6 group-hover:text-white transition-colors">{post.title}</h4>
                <div className="text-xs text-slate-500">{post.time} read</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Lead Capture */}
      <section id="contact" className="py-40 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto glass-dark p-12 md:p-20 rounded-[4rem] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[100px] rounded-full" />

            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
              <div className="lg:w-1/2">
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                  Ready to <span className="text-brand-indigo uppercase-none">Scale?</span>
                </h2>
                <p className="text-slate-400 text-xl leading-relaxed mb-12">
                  Join 100+ Indian businesses growing with AI. Get your free 30-minute growth audit today.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-brand-indigo w-5 h-5" />
                    <span>Free 30-minute growth audit</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-brand-indigo w-5 h-5" />
                    <span>No commitments or contracts</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-brand-indigo w-5 h-5" />
                    <span>Response in under 2 hours</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-orange border border-white/5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Our Team</div>
                      <div className="text-lg font-bold">growth@nammagrowth.in</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="text-sm font-bold text-center mb-6 text-slate-500 italic">Fill out the form to start your engine</div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
