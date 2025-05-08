import { ArrowRight } from "lucide-react";
import Image from "next/image";
type CategoryProps = {
  getRandomImage: (width: number, height: number) => string;
};

export default function Story({ getRandomImage }: CategoryProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-yellow-600 font-semibold mb-2">OUR HERITAGE</div>
            <h2 className="text-4xl font-bold mb-6">The Art of Leather Making</h2>
            <p className="text-gray-600 mb-6">
              Each piece is meticulously handcrafted by our skilled artisans, combining traditional techniques passed down through generations with modern design for timeless elegance. We source only the finest full-grain leather to ensure
              our products age beautifully and develop a unique patina over time.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to sustainable practices means we use every part of the leather, minimizing waste and respecting the materials that nature provides. This dedication to craftsmanship is what sets our leather goods apart.
            </p>
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition w-fit">
              Our Process <ArrowRight size={18} />
            </a>
          </div>
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image src={getRandomImage(800, 1000)} alt="Leather Craftsmanship" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-50 p-6 rounded-lg shadow-xl border border-yellow-100 max-w-xs">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-gray-800 font-semibold">Years of leather crafting expertise and dedication to quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
