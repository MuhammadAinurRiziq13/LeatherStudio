import { ArrowRight } from "lucide-react";

type HeroProps = {
  getRandomImage: (width: number, height: number) => string;
};

export default function Hero({ getRandomImage }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZTVlNWU1Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMmMxIDAgMi0xIDItMnYtMmMwLTEtMS0yLTItMmgtMmMtMSAwLTIgMS0yIDJ2Mnom+PC9wYXRoPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
        <img src={getRandomImage(1800, 600)} alt="Premium Leather Craftsmanship" className="object-cover w-full h-full" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-32 relative z-20 flex flex-col md:flex-row items-center h-auto">
        <div className="md:w-3/5 text-left max-w-xl mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Timeless{" "}
            <span className="text-yellow-600 relative">
              Leather Craft
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3C50 -1 150 7 200 3" stroke="#D97706" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            For Modern Life
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-600 font-medium pr-10">Each piece is meticulously crafted from premium genuine leather and high-quality vegan alternatives, designed to age beautifully and last for years.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition text-center flex items-center justify-center gap-2 group">
              Shop Now
              <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" className="bg-transparent text-black border-2 border-black font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition text-center">
              Explore Collections
            </a>
          </div>
        </div>
        <div className="md:w-2/5 relative hidden md:block">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-yellow-100/50 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
