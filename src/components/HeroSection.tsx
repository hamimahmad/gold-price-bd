import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroGold from "@/assets/hero-gold.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroGold}
          alt="Gold bars and coins"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Live Gold Prices — Bangladesh
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Track <span className="gold-text">Gold</span> in
          <br />
          Real Time
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Get accurate, up-to-the-minute gold prices in BDT across all karat
          grades. Your premium source for precious metal data.
        </motion.p>
        <motion.a
          href="#prices"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          View Today's Prices
          <ArrowDown size={18} />
        </motion.a>
      </div>
    </section>
  );
}
