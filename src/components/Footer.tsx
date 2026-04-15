import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold gold-text mb-3">GoldBD</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted source for real-time gold prices in Bangladesh.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">Home</Link>
              <Link to="/blog" className="text-muted-foreground text-sm hover:text-primary transition-colors">Blog</Link>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Contact</h4>
            <p className="text-muted-foreground text-sm">info@goldbd.com</p>
            <p className="text-muted-foreground text-sm">+880 1700-000000</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} GoldBD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
