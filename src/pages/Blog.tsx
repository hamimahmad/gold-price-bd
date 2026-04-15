import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Understanding Gold Purity: 24K vs 22K vs 18K",
    excerpt: "A comprehensive guide to gold karat ratings and what they mean for your investment and jewelry purchases.",
    date: "Apr 14, 2026",
    category: "Education",
  },
  {
    title: "Gold Price Forecast for Bangladesh 2026",
    excerpt: "Expert analysis on where gold prices are headed this year, considering global economic factors and local demand.",
    date: "Apr 10, 2026",
    category: "Analysis",
  },
  {
    title: "How to Buy Gold Safely in Dhaka",
    excerpt: "Tips for purchasing authentic gold from trusted sources, verifying purity, and avoiding common scams.",
    date: "Apr 7, 2026",
    category: "Guide",
  },
  {
    title: "Gold as an Investment: Is It Still Worth It?",
    excerpt: "Comparing gold returns with stocks, real estate, and fixed deposits in the Bangladeshi market.",
    date: "Apr 3, 2026",
    category: "Investment",
  },
  {
    title: "The History of Bhori: Bangladesh's Gold Unit",
    excerpt: "Exploring the origins and cultural significance of the bhori measurement in South Asian gold trade.",
    date: "Mar 28, 2026",
    category: "Culture",
  },
  {
    title: "Wedding Season and Gold Demand Surge",
    excerpt: "How seasonal wedding demand impacts gold prices and what buyers should know before the rush.",
    date: "Mar 22, 2026",
    category: "Market",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">
              Insights
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold">
              Gold <span className="gold-text">Blog</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-8 hover:border-primary/30 transition-colors group cursor-pointer flex flex-col"
              >
                <span className="text-xs font-body font-semibold text-primary tracking-wider uppercase mb-4">
                  {post.category}
                </span>
                <h2 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <p className="text-muted-foreground/60 text-xs mt-5 font-body">
                  {post.date}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
