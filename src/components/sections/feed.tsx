import { ChevronRight, ArrowRight, Instagram } from "lucide-react";
import Image from "next/image";

type CategoryProps = {
  getRandomImage: (width: number, height: number) => string;
};

export default function Feed({ getRandomImage }: CategoryProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-sm text-yellow-600 font-semibold mb-2">@LEATHERSTUDIO</div>
          <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <a key={index} href="#" className="group relative h-60 overflow-hidden rounded-lg">
              <Image src={getRandomImage(300, 300)} alt="Instagram Post" fill className="object-cover group-hover:scale-110 transition duration-700" unoptimized />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Instagram size={30} className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
