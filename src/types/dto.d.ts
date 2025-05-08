export interface Product {
    id: number;
    name: string;
    price: string;
    rating: string;
    isNew?: boolean;
    image: string;
  };

export interface Testimonial {
    name: string;
    role: string;
    text: string;
    rating: number;
}