import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gold-glow p-12 md:p-16 text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Need <span className="gold-text">Assistance</span>?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Reach out to our team for bulk pricing, custom reports, or partnership inquiries.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
