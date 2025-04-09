
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/95 backdrop-blur-sm shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-caramel-600">Caramel</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/benefits" className="text-gray-700 hover:text-caramel-600 transition-colors">
            Benefits
          </Link>
          <Link to="/results" className="text-gray-700 hover:text-caramel-600 transition-colors">
            Results
          </Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-caramel-600 transition-colors">
            Testimonials
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-caramel-600 transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-caramel-600 transition-colors">
            Contact
          </Link>
          <Button className="bg-caramel-600 hover:bg-caramel-700 text-white">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/benefits" className="text-gray-700 hover:text-caramel-600 transition-colors">
              Benefits
            </Link>
            <Link to="/results" className="text-gray-700 hover:text-caramel-600 transition-colors">
              Results
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-caramel-600 transition-colors">
              Testimonials
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-caramel-600 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-caramel-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-caramel-600 hover:bg-caramel-700 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
