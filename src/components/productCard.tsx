import { Heart, Star, PlusCircle } from "lucide-react";
import Image from "next/image";
import { Product } from "@/types/dto";

export type ProductCardProps = Product;

export default function ProductCard({ id, name, price, rating, isNew, image }: ProductCardProps) {
  return (
    <div key={id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-72 overflow-hidden mb-4 bg-gray-100">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition duration-500" unoptimized />
        <button
          className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-yellow-600 hover:text-white"
          aria-label="Add to favorites"
        >
          <Heart size={18} />
        </button>
        {isNew && <div className="absolute top-3 left-3 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full transform origin-left hover:scale-105 transition-transform duration-300">NEW</div>}
      </div>
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-semibold relative inline-block">
            {name}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="font-bold text-yellow-600">{price}</div>
          <button className="text-sm font-semibold px-3 py-1 rounded-lg border border-black flex items-center transition-all duration-300 hover:shadow-md hover:bg-black hover:text-white" aria-label="Add to cart">
            <span className="mr-1">Add</span>
            <PlusCircle size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
