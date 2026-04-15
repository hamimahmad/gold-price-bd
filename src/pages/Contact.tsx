import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    setForm({ name: "", email: "", message: "" });
  };

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
              Reach Out
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold">
              Contact <span className="gold-text">Us</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card gold-glow p-8 md:p-10 space-y-6"
            >
              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-body">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-white/10 rounded-xl px-5 py-3.5 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-body">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-white/10 rounded-xl px-5 py-3.5 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-body">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-white/10 rounded-xl px-5 py-3.5 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-primary-foreground font-body font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={18} />
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { icon: Phone, label: "Phone", value: "+880 1700-000000" },
                { icon: Mail, label: "Email", value: "info@goldbd.com" },
                { icon: MapPin, label: "Office", value: "Motijheel, Dhaka 1000, Bangladesh" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass-card p-6 flex items-start gap-4">
                  <div className="gold-gradient p-3 rounded-xl shrink-0">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">{label}</p>
                    <p className="text-foreground font-body font-semibold">{value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="glass-card overflow-hidden h-56 flex items-center justify-center">
                <p className="text-muted-foreground font-body text-sm">
                  Google Map — Motijheel, Dhaka
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
