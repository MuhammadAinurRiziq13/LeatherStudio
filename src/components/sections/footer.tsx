import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold text-black uppercase mb-6">LEATHER STUDIO</div>
            <p className="text-gray-600 mb-6 text-sm">Premium leather products handmade with love in Indonesia since 2015. Each piece tells a story of craftsmanship and quality.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-yellow-100 transition">
                <Instagram size={18} className="text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-yellow-100 transition">
                <Facebook size={18} className="text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-yellow-100 transition">
                <Twitter size={18} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Wallets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Bags
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Belts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600 text-sm">
                <MapPin size={18} className="mr-2 text-yellow-600 flex-shrink-0 mt-1" />
                <span>Jl. Kulit No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Phone size={18} className="mr-2 text-yellow-600" />
                <span>+62 123 456 7890</span>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Mail size={18} className="mr-2 text-yellow-600" />
                <span>info@leatherstudio.id</span>
              </li>
              <li className="mt-4">
                <a href="#" className="text-black hover:text-yellow-600 font-semibold text-sm flex items-center">
                  Store Locator <ArrowRight size={16} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} LEATHER STUDIO. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-yellow-600 text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-600 text-sm">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
