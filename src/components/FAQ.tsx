import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How often are gold prices updated?",
    a: "Our prices are fetched from MetalpriceAPI in real-time every time you visit the page, reflecting the latest international gold rates.",
  },
  {
    q: "What is the difference between karat grades?",
    a: "24K is pure gold (99.9%). 22K contains 91.6% gold, 21K is 87.5%, and 18K is 75%. Lower karats are mixed with other metals for durability.",
  },
  {
    q: "How is bhori calculated?",
    a: "1 bhori equals 11.664 grams. It is the traditional unit of gold measurement used in Bangladesh and parts of South Asia.",
  },
  {
    q: "Why do local jeweler prices differ?",
    a: "Local prices include making charges, VAT, shop margins, and design premiums on top of the raw gold price shown here.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Support</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-body font-semibold text-foreground pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-primary shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
