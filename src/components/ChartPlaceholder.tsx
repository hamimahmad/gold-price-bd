import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function ChartPlaceholder() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Analytics</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Historical <span className="gold-text">Trends</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gold-glow p-12 flex flex-col items-center justify-center min-h-[320px]"
        >
          <TrendingUp size={48} className="text-primary mb-4" />
          <p className="text-muted-foreground font-body">
            Historical price chart coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
