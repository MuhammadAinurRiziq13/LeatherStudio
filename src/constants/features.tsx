import { Heart, Clock, Shield, Award } from "lucide-react";
import { JSX } from "react";

interface Feature {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export const features: Feature[] = [
  {
    icon: <Heart size={28} className="text-yellow-600" />,
    title: "Trusted Craftsmanship",
    desc: "Handmade leather products you can rely on for years to come",
  },
  {
    icon: <Shield size={28} className="text-yellow-600" />,
    title: "Authentic Quality",
    desc: "Each piece crafted with care and precision by master artisans",
  },
  {
    icon: <Award size={28} className="text-yellow-600" />,
    title: "Premium Materials",
    desc: "Sourced from the finest sustainable leathers for durability",
  },
  {
    icon: <Clock size={28} className="text-yellow-600" />,
    title: "Timeless Design",
    desc: "Classic leather pieces that never go out of style",
  },
];
