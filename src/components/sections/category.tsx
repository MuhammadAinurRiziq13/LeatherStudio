import { ChevronRight, ArrowRight } from "lucide-react";
import { categories } from "@/constants/categories";
import Image from "next/image";

type CategoryProps = {
  getRandomImage: (width: number, height: number) => string;
};

export default function Category({ getRandomImage }: CategoryProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-sm text-yellow-600 font-semibold mb-2 tracking-wider">CURATED SELECTION</div>
            <h2 className="text-3xl font-bold relative before:content-[''] before:absolute before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-yellow-600">Shop by Category</h2>
          </div>
          <a href="#" className="text-yellow-600 font-semibold flex items-center group">
            <span className="relative overflow-hidden">
              <span className="inline-block relative">View All</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((category) => (
            <a key={category.slug} href={`/category/${category.slug}`} className="group relative h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image src={getRandomImage(500, 700)} alt={category.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300">
                <h3 className="text-xl font-bold text-white border-b border-transparent group-hover:border-yellow-300 inline-block pb-1">{category.name}</h3>
                <div className="flex items-center text-yellow-300 text-sm font-semibold mt-2 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  Explore <ArrowRight size={14} className="ml-1 group-hover:ml-2 transition-all duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
