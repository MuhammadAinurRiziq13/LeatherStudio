import { useEffect, useRef } from "react";
import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "@components/testimonialCard";

interface TestimonialProps {
  getRandomImage: (width: number, height: number) => string;
}

export default function Testimonial({ getRandomImage }: TestimonialProps) {
  const scrollContainer = useRef<HTMLDivElement | null>(null);

  // Clone testimonials to ensure smooth infinite scrolling
  const doubledTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollSpeed = 0.5; // pixels per frame
    const container = scrollContainer.current;
    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (container) {
        scrollPosition += scrollSpeed;

        // Reset scroll position when we've scrolled through half the content
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }

        container.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm text-yellow-600 font-semibold mb-2">TRUSTED BY CUSTOMERS</div>
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        </div>

        <div className="relative overflow-hidden">
          <div ref={scrollContainer} className="flex overflow-x-auto scrollbar-hide py-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {doubledTestimonials.map((item, index) => (
              <TestimonialCard key={index} item={item} getRandomImage={getRandomImage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
