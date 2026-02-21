'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        {
            name: 'Services',
            href: '/services',
            isMega: true,
            categories: [
                {
                    title: "AI-Powered Marketing",
                    links: [
                        { name: "AI SEO & AEO", href: "/services/ai-seo" },
                        { name: "AI Content Generation", href: "/services/ai-content" },
                        { name: "WhatsApp Automation", href: "/services/whatsapp-automation" },
                        { name: "Predictive Analytics", href: "/services/analytics" }
                    ]
                },
                {
                    title: "Performance Ads",
                    links: [
                        { name: "Google & Search Ads", href: "/services/google-ads" },
                        { name: "Meta & Social Ads", href: "/services/social-ads" },
                        { name: "LinkedIn B2B", href: "/services/linkedin-ads" },
                        { name: "Programmatic Ads", href: "/services/programmatic-ads" }
                    ]
                },
                {
                    title: "Organic Growth",
                    links: [
                        { name: "PSEO Engine", href: "/services/pseo" },
                        { name: "Local SEO Mastery", href: "/services/local-seo" },
                        { name: "Content Strategy", href: "/services/content-marketing" },
                        { name: "Social Management", href: "/services/social-media" }
                    ]
                },
                {
                    title: "Web & Creative",
                    links: [
                        { name: "Web Development", href: "/services/web-development" },
                        { name: "E-commerce Solutions", href: "/services/ecommerce" },
                        { name: "Video Production", href: "/services/video" },
                        { name: "CRO Optimization", href: "/services/cro" }
                    ]
                }
            ]
        },
        {
            name: 'Industries',
            href: '/industries',
            dropdown: [
                { name: 'SaaS & Tech', href: '/industries/saas' },
                { name: 'Real Estate', href: '/industries/real-estate' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'D2C E-commerce', href: '/industries/ecommerce' },
            ]
        },
        { name: 'Case Stories', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
            <div className="container mx-auto px-6">
                <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${isScrolled ? 'glass-dark' : 'bg-transparent'}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-orange flex items-center justify-center font-bold text-white shadow-lg shadow-brand-indigo/20">
                            N
                        </div>
                        <span className="text-xl font-extrabold tracking-tighter text-white">
                            NAMMA GROWTH
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group py-2"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                    {(link.dropdown || link.categories) && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                </Link>

                                {/* Regular Dropdown */}
                                {link.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass-dark p-4 rounded-3xl border border-white/10 shadow-2xl"
                                            >
                                                <div className="flex flex-col gap-1">
                                                    {link.dropdown.map((item: any) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}

                                {/* Mega Menu */}
                                {link.categories && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] glass-dark p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden"
                                            >
                                                <div className="grid grid-cols-4 gap-8 relative z-10">
                                                    {link.categories.map((cat: any) => (
                                                        <div key={cat.title}>
                                                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange mb-4">{cat.title}</h5>
                                                            <div className="flex flex-col gap-3">
                                                                {cat.links.map((item: any) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        className="text-sm text-slate-400 hover:text-white transition-colors"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-indigo/10 blur-3xl rounded-full" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                        <Link href="/book-call" className="px-6 py-2.5 rounded-full glass border border-white/10 text-sm font-bold hover:bg-white/10 transition-all text-white">
                            Book a Call
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg-deep border-b border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-brand-indigo transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/book-call"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-premium w-full text-center"
                            >
                                Get Free Audit
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
