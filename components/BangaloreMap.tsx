'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap } from 'lucide-react'
import { useState } from 'react'

const neighborhoods = [
    {
        id: 'koramangala',
        name: 'Koramangala',
        playbook: 'SaaS founders need LinkedIn B2B strategies + demo optimization.',
        x: '40%', y: '45%'
    },
    {
        id: 'hsr',
        name: 'HSR Layout',
        playbook: 'Retail & restaurants need Instagram + Zomato local boost.',
        x: '45%', y: '55%'
    },
    {
        id: 'whitefield',
        name: 'Whitefield',
        playbook: 'Enterprises need high-intent Google Ads + Enterprise SEO.',
        x: '75%', y: '35%'
    },
    {
        id: 'indiranagar',
        name: 'Indiranagar',
        playbook: 'D2C brands need influencer marketing + performance ads.',
        x: '55%', y: '25%'
    }
]

export default function BangaloreMap() {
    const [selected, setSelected] = useState(neighborhoods[0])

    return (
        <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5 relative h-full flex flex-col">
            <div className="flex items-center gap-2 mb-8">
                <MapPin className="text-brand-orange w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Neighborhood Playbooks</span>
            </div>

            <div className="relative flex-grow bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden mb-8 min-h-[300px]">
                {/* Abstract Map Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-slate-700 rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 w-3/4 h-3/4 border border-slate-700 rounded-full  -translate-x-1/2 -translate-y-1/2" />
                </div>

                {neighborhoods.map((n) => (
                    <button
                        key={n.id}
                        onClick={() => setSelected(n)}
                        className="absolute p-3 group transition-transform hover:scale-110"
                        style={{ left: n.x, top: n.y }}
                    >
                        <div className={`w-4 h-4 rounded-full border-2 transition-all ${selected.id === n.id ? 'bg-brand-orange border-white w-6 h-6' : 'bg-slate-700 border-white/20'}`} />
                        <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] font-bold whitespace-nowrap tracking-widest uppercase transition-opacity ${selected.id === n.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                            {n.name}
                        </span>
                    </button>
                ))}
            </div>

            <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-6 rounded-2xl border border-brand-indigo/20"
            >
                <div className="flex items-center gap-2 mb-3 text-brand-indigo text-xs font-black uppercase tracking-widest">
                    <Zap className="w-3 h-3" /> Targeted Strategy
                </div>
                <h4 className="text-xl font-bold mb-2">{selected.name} Playbook</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {selected.playbook}
                </p>
            </motion.div>
        </div>
    )
}
