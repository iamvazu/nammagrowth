import {
    Zap, TrendingUp, Search, MapPin, Code, Smartphone,
    Layout, Video, Target, BarChart3, Users, Globe, Headset
} from "lucide-react";

export const serviceCategories = [
    {
        title: "AI-Powered Marketing",
        desc: "Leverage artificial intelligence to automate, optimize, and scale your marketing efforts beyond human capacity.",
        price: "From ₹35,000/month",
        services: [
            {
                id: "ai-seo",
                name: "AI SEO & AEO",
                subtitle: "Answer Engine Optimization",
                desc: "Rank #1 with AI-optimized content and answer engine optimization. ChatGPT visibility and Position 0 targeting.",
                longDesc: "Traditional Search is being replaced by Answer Engines. We optimize your brand to be the primary source for AI-generated answers, ensuring visibility in ChatGPT, Perplexity, and Google SGE.",
                icon: Smartphone,
                color: "text-brand-gold",
                features: ["AEO Entity Optimization", "LLM-Ready Content Clusters", "Position 0 & Snippet Domination", "Technical AI SEO Audit"]
            },
            {
                id: "ai-automation",
                name: "Conversational AI",
                subtitle: "24/7 Intelligent Engagement",
                desc: "24/7 customer engagement via WhatsApp, Instagram, and web chat. GPT-4 bots with UPI integration.",
                longDesc: "Turn your WhatsApp into a revenue engine. Our AI agents handle lead qualification, appointment booking, and even collect payments via UPI, all with a human-like touch.",
                icon: Zap,
                color: "text-green-500",
                features: ["Custom GPT-4 Bot Training", "WhatsApp Business API Setup", "Instant UPI Payment Links", "Multi-platform Sync"]
            },
            {
                id: "predictive-analytics",
                name: "Predictive Intelligence",
                subtitle: "Data-Driven Foresight",
                desc: "Predict customer behavior, churn, and LTV forecasting before your competitors do.",
                longDesc: "Stop guessing. We use machine learning models to forecast which leads are most likely to convert, allowing you to focus your ad spend where it actually matters.",
                icon: TrendingUp,
                color: "text-brand-orange",
                features: ["LTV Forecasting Models", "Churn Prediction Systems", "Smart Audience Budgeting", "Custom ML Dashboards"]
            }
        ]
    },
    {
        title: "Performance Marketing",
        desc: "Data-driven advertising across Google, Meta, and LinkedIn with AI-optimized bidding.",
        price: "From ₹50,000/month",
        services: [
            {
                id: "google-ads",
                name: "Google Ads Mastery",
                subtitle: "Search & Display ROI",
                desc: "Search, Display, YouTube, and Performance Max. ROI-focused smart bidding.",
                longDesc: "We manage high-intent search campaigns that capture users exactly when they need you. Our AI-optimized bidding ensures the lowest CPA in the Bangalore market.",
                icon: Target,
                color: "text-brand-indigo",
                features: ["PMax Campaign Mastery", "Competitor Conquesting", "Search Intent Optimization", "YouTube Ad Funnels"]
            },
            {
                id: "meta-ads",
                name: "Meta Ads (FB/IG)",
                subtitle: "Social Growth Engine",
                desc: "Reels-first strategy, vernacular creatives, and WhatsApp click-to-chat campaigns.",
                longDesc: "Scale your brand with high-energy Reels and video ads. We specialize in Click-to-WhatsApp campaigns that convert scrolling into conversations.",
                icon: Layout,
                color: "text-blue-500",
                features: ["Reels-First Creative Strategy", "Click-to-WhatsApp Funnels", "Vernacular (Hinglish/Kannada) Ads", "Lookalike Audience Scaling"]
            },
            {
                id: "linkedin-ads",
                name: "LinkedIn B2B",
                subtitle: "Decision Maker Targeting",
                desc: "Precision targeting for decision-makers. ABM and lead generation for startups & enterprises.",
                longDesc: "Get in front of CXOs and founders. We run Account-Based Marketing (ABM) campaigns that land high-value B2B contracts for your service business.",
                icon: BarChart3,
                color: "text-brand-indigo",
                features: ["Account Based Marketing (ABM)", "Job Title & Seniority Targeting", "Thought Leadership Content", "CRM Lead Sync"]
            }
        ]
    },
    {
        title: "Organic Growth",
        desc: "Dominate search results and build sustainable organic traffic through SEO and PSEO.",
        price: "From ₹30,000/month",
        services: [
            {
                id: "seo",
                name: "Advanced SEO",
                subtitle: "The Technical Advantage",
                desc: "Technical excellence and on-page mastery. Google.co.in and international optimization.",
                longDesc: "Sustainable growth starts with a solid foundation. We fix your technical debt, optimize your site speed, and build a high-authority backlink profile.",
                icon: Search,
                color: "text-brand-indigo",
                features: ["Technical SEO Mastery", "On-Page Strategic Optimization", "High-Authority Link Building", "International & Local SEO"]
            },
            {
                id: "pseo",
                name: "Programmatic SEO",
                subtitle: "Scale Traffic Automatically",
                desc: "Scale to 100s of ranking pages (Service × Location) with AI-powered content.",
                longDesc: "Build 500+ localized landing pages that target long-tail keywords. Our PSEO engine generates unique, high-value pages that rank instantly for hyper-local lookups.",
                icon: Globe,
                color: "text-brand-orange",
                features: ["Dynamic Page Generation", "Long-Tail Keyword Coverage", "Automatic Internal Linking", "Indexation Management"]
            },
            {
                id: "content-strategy",
                name: "Content Marketing",
                subtitle: "Strategic Storytelling",
                desc: "Hinglish and vernacular content that resonates with the Indian heart.",
                longDesc: "Content isn't just blogs. It's building community. We create whitepapers, case studies, and vernacular guides that establish your brand as a market leader.",
                icon: Video,
                color: "text-brand-gold",
                features: ["Vernacular Content Production", "Multi-format Strategy", "E-E-A-T Content Audits", "Distribution Playbooks"]
            }
        ]
    },
    {
        title: "Web & App",
        desc: "High-performance websites and apps built for conversion, speed, and scale.",
        price: "From ₹75,000",
        services: [
            {
                id: "web-dev",
                name: "Next.js Web Dev",
                subtitle: "Speed Without Compromise",
                desc: "Next.js websites that load instantly. 2G/3G optimized with regional hosting.",
                longDesc: "We build blazing-fast React/Next.js applications that pass all Core Web Vitals. Our sites are optimized for Bangalore's varied connectivity and mobile-first users.",
                icon: Code,
                color: "text-purple-500",
                features: ["Next.js & React Framework", "Vercel/AWS Edge Hosting", "Headless CMS Integration", "API-First Architecture"]
            },
            {
                id: "ecommerce",
                name: "E-commerce Engine",
                subtitle: "Built for Conversion",
                desc: "Shopify & custom stores with UPI, COD, and GST invoicing built-in.",
                longDesc: "D2C success requires more than just a store. We build conversion-optimized checkouts with UPI, COD verification, and WhatsApp order status updates.",
                icon: Smartphone,
                color: "text-brand-gold",
                features: ["Custom Shopify Liquid Dev", "UPI & NetBanking Setup", "GST-Ready Invoicing", "Checkout Optimization"]
            },
            {
                id: "cro",
                name: "CRO Optimization",
                subtitle: "Maximizing Every Visit",
                desc: "A/B testing and funnel analysis to turn more visitors into customers.",
                longDesc: "Don't waste traffic. We use heatmaps, session recordings, and A/B tests to identify friction points in your funnel and increase your conversion rate by 20-50%.",
                icon: Zap,
                color: "text-brand-orange",
                features: ["Heatmap & Session Analysis", "A/B & Multivariate Testing", "Funnel Friction Audits", "Copywriting for Conversion"]
            }
        ]
    },
    {
        title: "Creative & Brand",
        desc: "Stand out with compelling video, design, and influencer partnerships.",
        price: "From ₹25,000",
        services: [
            {
                id: "brand-strategy",
                name: "Brand Identity",
                subtitle: "Distinct Visual Language",
                desc: "Cultural symbolism and vernacular naming for the Indian market.",
                longDesc: "Build a brand that people recognize. We create logos, palettes, and brand guidelines that reflect your company's values and speak to the Bangalore tech scene.",
                icon: Users,
                color: "text-pink-500",
                features: ["Logo & Visual Identity", "Brand Voice & Tone", "Cultural Sensitivity Audit", "Trademark-Ready Naming"]
            },
            {
                id: "video-ads",
                name: "Video ROI",
                subtitle: "High Engagement Video",
                desc: "High-converting Reels, Shorts, and explainer videos for ads and social.",
                longDesc: "Video is the king of content. We produce professional Reels, YouTube shorts, and product videos that grab attention in the first 3 seconds and drive clicks.",
                icon: Video,
                color: "text-brand-indigo",
                features: ["Reels & Shorts Production", "Motion Graphics Videos", "Ad-Creative Editing", "Vertical Content Strategy"]
            },
            {
                id: "influencer",
                name: "Influencer Scale",
                subtitle: "Authentic Outreach",
                desc: "Leverage regional nano and micro-influencers for authentic reach.",
                longDesc: "Skip the generic celebrities. We connect you with local Bangalore and Indian micro-influencers who actually influence buying decisions in your niche.",
                icon: Target,
                color: "text-brand-gold",
                features: ["Regional Talent Sourcing", "Campaign ROI Tracking", "Contract Management", "Niche Micro-influencers"]
            }
        ]
    },
    {
        title: "Strategy & Analytics",
        desc: "Predictive decision-making with marketing automation and analytics.",
        price: "From ₹40,000/month",
        services: [
            {
                id: "automation",
                name: "Automation Hub",
                subtitle: "Efficiency at Scale",
                desc: "WhatsApp-first nurture flows and CRM integration at scale.",
                longDesc: "Stop manual follow-ups. We automate your entire sales funnel, from the first WhatsApp inquiry to post-purchase review collection, using AI-driven nurture flows.",
                icon: Zap,
                color: "text-green-500",
                features: ["CRM Sales Automation", "WhatsApp Nurture Flows", "Email Automation Engines", "Zapier/Make Workflows"]
            },
            {
                id: "analytics",
                name: "Data Intelligence",
                subtitle: "Unified Growth View",
                desc: "Online-offline attribution and predictive LTV dashboards.",
                longDesc: "See the full picture. We unify your data from Ads, Shopify, and CRM into a single live dashboard, giving you real-time visibility into your blended ROAS.",
                icon: TrendingUp,
                color: "text-brand-orange",
                features: ["Blended ROAS Dashboards", "Cross-Channel Attribution", "Live Performance Reporting", "Google Analytics 4 Setup"]
            },
            {
                id: "pr",
                name: "Digital PR",
                subtitle: "Authority & Backlinks",
                desc: "Brand authority building across YourStory, Inc42, and global pubs.",
                longDesc: "Be seen where it matters. We place your brand story in India's leading tech publications like YourStory and Inc42 to build massive SEO authority and trust.",
                icon: Headset,
                color: "text-brand-indigo",
                features: ["Tech Publication Placements", "Founders Personal Branding", "Press Release Strategy", "E-E-A-T Building"]
            }
        ]
    }
];

export const allServices = serviceCategories.flatMap(cat => cat.services);
export const serviceMap = Object.fromEntries(allServices.map(s => [s.id, s]));
