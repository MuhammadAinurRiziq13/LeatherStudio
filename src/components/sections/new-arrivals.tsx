import { ChevronRight } from "lucide-react";
import { popularProducts } from "@/constants/products";
import ProductCard from "@components/productCard";

type CategoryProps = {
  getRandomImage: (width: number, height: number) => string;
};

export default function NewArrivals({ getRandomImage }: CategoryProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-sm text-yellow-600 font-semibold mb-2 tracking-wider">JUST LAUNCHED</div>
            <h2 className="text-3xl font-bold relative before:content-[''] before:absolute before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-yellow-600">New Arrivals</h2>
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
          {popularProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} rating={product.rating} isNew={product.isNew} image={getRandomImage(500, 600)} />
          ))}
        </div>
      </div>
    </section>
  );
}
