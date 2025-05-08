import { Star } from "lucide-react";
import Image from "next/image";
import { Testimonial } from "@/types/dto";

interface TestimonialCardProps {
  item: Testimonial;
  getRandomImage: (width: number, height: number) => string;
}

const TestimonialCard = ({ item, getRandomImage }: TestimonialCardProps) => (
  <div className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-sm mx-3">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className={i < item.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-200"} />
      ))}
    </div>
    <p className="text-gray-600 mb-6 italic">"{item.text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
        <Image src={getRandomImage(100, 100)} alt={item.name} width={40} height={40} className="object-cover" unoptimized />
      </div>
      <div>
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-gray-500">{item.role}</div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
