import { ChevronRight } from "lucide-react";
import { popularProducts } from "@/constants/products";
import ProductCard from "@components/productCard";
import { Product } from "@/types/dto";

type CategoryProps = {
  getRandomImage: (width: number, height: number) => string;
};

export default function Popular({ getRandomImage }: CategoryProps) {
  // Transform popularProducts to match ProductCard props format
  const transformedProducts: Product[] = popularProducts.slice(4, 8).map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    rating: product.rating,
    isNew: product.discount !== undefined, // Using discount as a flag for special treatment
    image: getRandomImage(500, 600)
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-sm text-yellow-600 font-semibold mb-2">TOP PICKS</div>
            <h2 className="text-3xl font-bold">Bestsellers</h2>
          </div>
          <a href="#" className="text-yellow-600 font-semibold flex items-center hover:underline">
            View All <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {transformedProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              rating={product.rating}
              isNew={product.isNew}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}