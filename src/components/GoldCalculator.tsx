import { useState } from "react";
import { motion } from "framer-motion";
import { useGoldPrice } from "@/hooks/useGoldPrice";
import { Calculator } from "lucide-react";

const karats = [
  { label: "24K", factor: 1 },
  { label: "22K", factor: 0.916 },
  { label: "21K", factor: 0.875 },
  { label: "18K", factor: 0.75 },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("en-BD", { maximumFractionDigits: 2 }).format(n);

export default function GoldCalculator() {
  const { prices } = useGoldPrice();
  const [grams, setGrams] = useState("");
  const [karat, setKarat] = useState(0);

  const result =
    prices && grams
      ? prices.gram24 * karats[karat].factor * parseFloat(grams)
      : null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto glass-card gold-glow p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-gradient p-3 rounded-xl">
              <Calculator size={24} className="text-primary-foreground" />
            </div>
            <h2 className="font-heading text-2xl font-bold">Gold Calculator</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2 font-body">
                Weight in Grams
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Enter grams…"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
                className="w-full bg-secondary border border-white/10 rounded-xl px-5 py-3.5 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2 font-body">
                Select Karat
              </label>
              <div className="grid grid-cols-4 gap-3">
                {karats.map((k, i) => (
                  <button
                    key={k.label}
                    onClick={() => setKarat(i)}
                    className={`py-3 rounded-xl font-body font-semibold text-sm transition-all ${
                      karat === i
                        ? "gold-gradient text-primary-foreground"
                        : "bg-secondary text-muted-foreground border border-white/10 hover:border-primary/40"
                    }`}
                  >
                    {k.label}
                  </button>
                ))}
              </div>
            </div>

            {result !== null && !isNaN(result) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 p-6 rounded-xl bg-primary/10 border border-primary/20 text-center"
              >
                <p className="text-sm text-muted-foreground mb-1">Estimated Price</p>
                <p className="font-heading text-3xl font-bold gold-text">
                  ৳ {fmt(result)}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
