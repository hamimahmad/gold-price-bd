import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PriceTable from "@/components/PriceTable";
import GoldCalculator from "@/components/GoldCalculator";
import ChartPlaceholder from "@/components/ChartPlaceholder";
import NewsCards from "@/components/NewsCards";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PriceTable />
      <GoldCalculator />
      <ChartPlaceholder />
      <NewsCards />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
}
