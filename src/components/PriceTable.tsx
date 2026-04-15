import { motion } from "framer-motion";
import { useGoldPrice } from "@/hooks/useGoldPrice";
import { Loader2, AlertCircle } from "lucide-react";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-BD", { maximumFractionDigits: 2 }).format(n);

export default function PriceTable() {
  const { prices, loading, error } = useGoldPrice();

  return (
    <section id="prices" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">
            Market Data
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Live Gold <span className="gold-text">Prices</span>
          </h2>
          {prices && (
            <p className="text-muted-foreground text-sm mt-3">
              Last updated: {prices.lastUpdated}
            </p>
          )}
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center gap-3 py-20 text-primary">
            <Loader2 className="animate-spin" size={28} />
            <span className="font-body text-lg">Fetching live prices…</span>
          </div>
        )}

        {error && (
          <div className="glass-card gold-glow p-8 flex items-center gap-4 max-w-xl mx-auto text-destructive">
            <AlertCircle size={28} />
            <div>
              <p className="font-semibold">Failed to load prices</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        )}

        {prices && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card gold-glow overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-5 font-heading text-sm text-primary tracking-wider uppercase">
                      Gold Type
                    </th>
                    <th className="text-right px-6 py-5 font-heading text-sm text-primary tracking-wider uppercase">
                      Per Gram (BDT)
                    </th>
                    <th className="text-right px-6 py-5 font-heading text-sm text-primary tracking-wider uppercase">
                      Per Bhori (BDT)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "24K Gold", gram: prices.gram24, bhori: prices.bhori24 },
                    { label: "22K Gold", gram: prices.gram22, bhori: prices.bhori22 },
                    { label: "21K Gold", gram: prices.gram21, bhori: prices.bhori21 },
                    { label: "18K Gold", gram: prices.gram18, bhori: prices.bhori18 },
                  ].map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${
                        i === 0 ? "bg-primary/[0.04]" : ""
                      }`}
                    >
                      <td className="px-6 py-5 font-body font-semibold text-foreground">
                        {row.label}
                      </td>
                      <td className="px-6 py-5 text-right font-body tabular-nums text-foreground">
                        ৳ {fmt(row.gram)}
                      </td>
                      <td className="px-6 py-5 text-right font-body tabular-nums text-foreground">
                        ৳ {fmt(row.bhori)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
