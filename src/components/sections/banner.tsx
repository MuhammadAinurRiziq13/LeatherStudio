import Image from "next/image";
// import { getRandomImage } from "@/lib/utils";

type CategoryProps = {
  getRandomImage: (width: number, height: number) => string;
};

export default function Banner({getRandomImage}:CategoryProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <Image src={getRandomImage(800, 1000)} alt="Men's Collection" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="bg-white/90 p-6 rounded-lg max-w-xs">
                <h3 className="text-2xl font-bold mb-2">Men's Collection</h3>
                <p className="text-gray-600 mb-4 text-sm">Discover our range of premium wallets, belts, and accessories tailored for men.</p>
                <a href="#" className="inline-block bg-black text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-lg">
            <Image src={getRandomImage(800, 1000)} alt="Women's Collection" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="bg-white/90 p-6 rounded-lg max-w-xs">
                <h3 className="text-2xl font-bold mb-2">Women's Collection</h3>
                <p className="text-gray-600 mb-4 text-sm">Elegant handbags, clutches, and accessories crafted for the modern woman.</p>
                <a href="#" className="inline-block bg-black text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
