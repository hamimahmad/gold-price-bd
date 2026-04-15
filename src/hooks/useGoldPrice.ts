import { useState, useEffect } from "react";

const API_KEY = "1abccd86ff5083a441d2ced9e31a6f25";
const API_URL = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=XAU&currencies=BDT`;

const OUNCE_TO_GRAM = 31.1035;
const BHORI_GRAMS = 11.664;

export interface GoldPrices {
  gram24: number;
  bhori24: number;
  gram22: number;
  bhori22: number;
  gram21: number;
  bhori21: number;
  gram18: number;
  bhori18: number;
  lastUpdated: string;
}

export function useGoldPrice() {
  const [prices, setPrices] = useState<GoldPrices | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrices() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch gold prices");
        const data = await res.json();

        if (!data.rates?.BDT) throw new Error("Invalid API response");

        const ouncePrice = 1 / data.rates.BDT;
        const gram24 = ouncePrice / OUNCE_TO_GRAM;
        const bhori24 = gram24 * BHORI_GRAMS;

        setPrices({
          gram24,
          bhori24,
          gram22: gram24 * 0.916,
          bhori22: bhori24 * 0.916,
          gram21: gram24 * 0.875,
          bhori21: bhori24 * 0.875,
          gram18: gram24 * 0.75,
          bhori18: bhori24 * 0.75,
          lastUpdated: new Date().toLocaleString("en-BD"),
        });
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchPrices();
  }, []);

  return { prices, loading, error };
}
