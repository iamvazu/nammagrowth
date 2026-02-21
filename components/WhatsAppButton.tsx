'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
    const whatsappNumber = "+919876543210" // Placeholder
    const message = encodeURIComponent("Hi Namma Growth, I'm interested in scaling my business with AI marketing.")

    return (
        <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
        >
            <MessageCircle className="w-8 h-8 text-white fill-white" />
            <span className="absolute -top-12 right-0 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl whitespace-nowrap">
                Talk to Growth Expert
                <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white rotate-45" />
            </span>
        </motion.a>
    )
}
