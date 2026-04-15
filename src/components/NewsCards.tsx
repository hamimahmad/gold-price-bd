import { motion } from "framer-motion";
import newsJewelry from "@/assets/news-jewelry.jpg";
import newsReserve from "@/assets/news-reserve.jpg";
import newsWedding from "@/assets/news-wedding.jpg";

const news = [
  {
    title: "Gold Hits Record High in Bangladesh",
    excerpt: "International gold prices push local rates to unprecedented levels as global demand surges.",
    date: "Apr 14, 2026",
    image: newsJewelry,
  },
  {
    title: "Central Bank Adjusts Gold Reserve Policy",
    excerpt: "Bangladesh Bank announces new guidelines for gold imports affecting retail prices nationwide.",
    date: "Apr 12, 2026",
    image: newsReserve,
  },
  {
    title: "22K Gold Remains Most Popular Choice",
    excerpt: "Jewelers report that 22K gold continues to dominate the wedding season market in Bangladesh.",
    date: "Apr 10, 2026",
    image: newsWedding,
  },
];

export default function NewsCards() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Latest</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Gold <span className="gold-text">News</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <p className="text-primary text-xs tracking-wider uppercase mb-4 font-body">
                  {item.date}
                </p>
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
