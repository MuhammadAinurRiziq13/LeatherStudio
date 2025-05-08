import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchPopupOpen, setSearchPopupOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setSearchPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchPopupOpen(false);
  };

  const navItems = [
    { label: "Home", url: "/" },
    // { label: "Shop", url: "/shop" },
    { label: "Collections", url: "/collections" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? "shadow-md py-2" : "py-5"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-xl md:text-2xl font-black text-black uppercase tracking-widest relative">
              <span className="relative z-10">LEATHER STUDIO</span>
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-yellow-600"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.url} className="text-sm uppercase font-medium hover:text-yellow-600 transition group relative py-2">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search Icon */}
            <div className="relative" ref={searchInputRef}>
              <button className="p-2 hover:text-yellow-600 transition group relative" onClick={() => setSearchPopupOpen(!searchPopupOpen)}>
                <span className="absolute inset-0 rounded-full bg-gray-50 scale-0 transition-transform duration-200 group-hover:scale-100"></span>
                <Search className="relative" size={20} />
              </button>

              {/* Search Popup */}
              {searchPopupOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg border border-gray-200 p-4 w-72 animate-fadeIn" ref={searchInputRef}>
                  <form onSubmit={handleSearchSubmit}>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-50 border border-gray-200 
                        focus:outline-none focus:ring-1 focus:ring-yellow-600 text-sm"
                        autoFocus
                      />
                      <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                      <button type="submit" className="absolute right-2 top-2 text-sm font-medium text-yellow-600 hover:text-yellow-700">
                        Search
                      </button>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Popular Searches:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Wallets", "Bags", "Belts", "Accessories"].map((term) => (
                          <button
                            key={term}
                            type="button"
                            className="px-2 py-1 bg-gray-50 hover:bg-gray-100 rounded text-xs"
                            onClick={() => {
                              // Add logic to handle popular search term click
                              setSearchPopupOpen(false);
                            }}
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Icon buttons - reduce size on smaller screens */}
            <div className="hidden sm:flex items-center gap-2 md:gap-4">
              {[
                { icon: <User size={20} />, badge: null, url: "/account" },
                { icon: <Heart size={20} />, badge: 3, url: "/wishlist" },
                { icon: <ShoppingBag size={20} />, badge: 2, url: "/cart" },
              ].map((item, index) => (
                <Link key={index} href={item.url} className="hover:text-yellow-600 transition relative p-2 group">
                  <span className="absolute inset-0 rounded-full bg-gray-50 scale-0 transition-transform duration-200 group-hover:scale-100"></span>
                  <span className="relative">{item.icon}</span>
                  {item.badge && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-600 text-white text-xs flex items-center justify-center">{item.badge}</span>}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 mt-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.label} href={item.url} className="text-sm uppercase font-medium hover:text-yellow-600 transition py-2 px-2" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}

              {/* Mobile Search */}
              <div className="py-2 relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-50 border border-gray-200 
                  focus:outline-none focus:ring-1 focus:ring-yellow-600 text-sm"
                />
                <Search className="absolute left-3 top-4 text-gray-400" size={18} />
              </div>

              {/* Mobile icon buttons */}
              <div className="sm:hidden flex justify-between py-2">
                {[
                  { icon: <User size={20} />, label: "Account", badge: null, url: "/account" },
                  { icon: <Heart size={20} />, label: "Wishlist", badge: 3, url: "/wishlist" },
                  { icon: <ShoppingBag size={20} />, label: "Cart", badge: 2, url: "/cart" },
                ].map((item, index) => (
                  <Link key={index} href={item.url} className="flex flex-col items-center gap-1">
                    <span className="relative">
                      {item.icon}
                      {item.badge && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-600 text-white text-xs flex items-center justify-center">{item.badge}</span>}
                    </span>
                    <span className="text-xs">{item.label}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
